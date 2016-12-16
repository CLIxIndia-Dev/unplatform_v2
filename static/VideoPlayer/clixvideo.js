function videoPlayerInit() {

    function playFile(event) {
        var file = event.target.files[0];
        var videoNode = document.querySelector('video');
        var fileURL = window.URL.createObjectURL(file);
        videoNode.src = fileURL;
        videoNode.loaded = true;
    }

    inputNode = document.getElementById('input'); 
	inputNode.addEventListener('change', playFile, false);
	initButtons();
};

function initButtons() {
	// Buttons	
	var playButton = document.getElementById("play-pause");
	var muteButton = document.getElementById("mute");
	var fullScreenButton = document.getElementById("full-screen");
	var plusButton = document.getElementById("plus-one-frame");
	var minusButton = document.getElementById("minus-one-frame");
    var addPointButton = document.getElementById("add-pt-btn");
	
	// Sliders
	var seekBar = document.getElementById("seek-bar");
	var volumeBar = document.getElementById("volume-bar");

	// Time
	var currentTime = document.getElementById("current-time")
	
	// Video
	var video = document.getElementById("video");
	var canvas = document.getElementById('video-canvas');
    var videoControls = document.getElementById("video-controls");
    // initCanvas(video, canvas);
    
    // Motion tracking points
    var points = [];
    var pointTimes = [];
    var lastPoint = null;
        
    var pointTable = new Handsontable(
        document.getElementById('pointTable'),
        {
            colHeaders: ['Time', 'X', 'Y'],
            columns: [
                {
                    data: 'time',
                    type: 'numeric',
                    format: '0.000'
                },
                {
                    data: 'x',
                    type: 'numeric'
                },
                {
                    data: 'y',
                    type: 'numeric'
                }
            ],
            colWidths: 80,
            currentRowClassName: 'selected-point-row'
        }
    );
    
    
    // Time / distance data
    var measurements = [];
    var measureTimes = [];
    var measurePositions = [];
    var startTime = 0;
    
    var measureTable = new Handsontable(
        document.getElementById('measureTable'),
        {
            colHeaders: ['Time', 'Position'],
            columns: [
                {
                    data: 'time',
                    type: 'numeric',
                    format: '0.000',
                    readOnly: true
                },
                {
                    data: 'position',
                    type: 'numeric',
                    format: '0.000'
                }
            ],
            colWidths: 80,
            currentRowClassName: 'selected-point-row',
            multiSelect: true,
            afterChange: (changes, source) => {
                if(changes) {
                    var change = changes[0];
                    if(change[1] == "position") {
                        // TODO: cleanup
                        var i = change[0];
                        measurements[i].position = change[3];
                        measureTimes[i] = measurements[i].time;
                        measurePositions[i] = measurements[i].position;
                        updateChart();
                    }
                }
            }
        }
    );
    
    function updateChart() {
        var dataPts = [];
        for(var i=0; i < measurements.length; i++) {
            dataPts.push({x:measurements[i].time, y:measurements[i].position});
        }
        var chart = new CanvasJS.Chart("measureChart",
        {
            axisX: {
                minimum: 0,
                valueFormatString: "#.### s",
                gridThickness: 1,
                gridColor: "grey"
            },
            axisY:{
            },
            data: [{        
                type: "line",
                dataPoints: dataPts,
                toolTipContent: "{x} s : {y}"
            }]
        });
        
        chart.render();
    }
    
	// hackey bit to get a simple fps solution in place. ideally the FPS should come 
	// from the video but the browser doesn't have access to that information, so
	// we get it from a button in the html instead
	var enableFPSButton = document.getElementById('enable-frame-seek');
	var fpsButtons = document.getElementById('hidden-fps');
    var fps15Button = document.getElementById('15-fps');
	var fps24Button = document.getElementById('24-fps');
	var fps25Button = document.getElementById('25-fps');
	var fps30Button = document.getElementById('30-fps');
	var fps50Button = document.getElementById('50-fps');
	var fps60Button = document.getElementById('60-fps');

	function hideEnableShowFPS() {
		var enableButton = document.getElementById('enable-frame-seek');
		fpsButtons.classList.remove("hidden");
	};

    function hideFPSButtons() {
		var frameButtons = document.getElementsByClassName('frame-btn')
		fpsButtons.classList.add("hidden");
        
		for (var i = 0; i < frameButtons.length; i++) {
			frameButtons[i].classList.remove("disabled");
            frameButtons[i].disabled = false;
		};
	}

	function setFPS(framerate) {
		video.fps = framerate;
		hideFPSButtons()
	}

	// The delta requires pausing since this level of fine control
	// is meaningless while the video is playing
	function videoTimeDelta(delta) {
		if (video.paused == true) {
		    setVideoTime(video.currentTime + delta);
        } 
	}
    
    function setVideoTime(time) {
        video.addEventListener('canplay', drawOnTimeChange);
        video.currentTime = time;
    }
    
    // Update the canvas when video frame is loaded
    video.addEventListener('canplay', drawFirstFrame);
    
    function drawFirstFrame(e) {
        video.removeEventListener('canplay', drawFirstFrame);
        video.play();
        draw(video,canvas.getContext('2d'),canvasWidth,canvasHeight, false);
        video.pause();
    }
    
    function drawOnTimeChange(e) {
        video.removeEventListener('canplay', drawOnTimeChange);
        draw(video,canvas.getContext('2d'),canvasWidth,canvasHeight, false);
    }

	// Listener to show the fps buttons
	enableFPSButton.addEventListener('click', hideEnableShowFPS, false);
	
	// Listener to get the FPS from the buttons
	video.fps = 9999999; // dummy	
    fps15Button.addEventListener("click",function(){ setFPS(15) }, false);
	fps24Button.addEventListener("click",function(){ setFPS(24) }, false);
	fps25Button.addEventListener("click",function(){ setFPS(24.99) }, false);
	fps30Button.addEventListener("click",function(){ setFPS(30) }, false);
	fps50Button.addEventListener("click",function(){ setFPS(50) }, false);
	fps60Button.addEventListener("click",function(){ setFPS(60) }, false);
	
	// Enables the +/- functions of the framerate buttons
	plusButton.addEventListener("click", function(){videoTimeDelta(1/video.fps)});
	minusButton.addEventListener("click", function(){videoTimeDelta(-1/video.fps)});
	
	// Event listener for the play/pause button
	playButton.addEventListener("click", function() {
		if (video.loaded) {
			if (video.paused == true) {
				video.play();
				setPauseBtn();
			} else {
				video.pause();
                setPlayBtn();
			}
		}
	});
    
    function setPlayBtn() {
        playButton.innerHTML = "<i class='fa fa-play'></i>";
    }
		
    function setPauseBtn() {
        playButton.innerHTML = "<i class='fa fa-pause'></i>";
    }
    
	// Event listener for the mute button
	muteButton.addEventListener("click", function() {
		if (video.muted == false) {
            // Mute the video
            video.muted = true;

            // Update the button text
            muteButton.innerHTML = "<i class='fa fa-volume-off'></i><i class='fa fa-times'></i>";
		} else {
            // Unmute the video
            video.muted = false;

            // Update the button text
            muteButton.innerHTML = "<i class='fa fa-volume-up'></i>";
		}
	});
	
	// Event listener for the volume bar
	volumeBar.addEventListener("change", function() {
		// Update the video volume
		video.volume = volumeBar.value;
	});
	
	// Event listener for the full-screen button
	fullScreenButton.addEventListener("click", function() {
		if (video.requestFullscreen) {
		video.requestFullscreen();
		} else if (video.mozRequestFullScreen) {
		video.mozRequestFullScreen(); // Firefox
		} else if (video.webkitRequestFullscreen) {
		video.webkitRequestFullscreen(); // Chrome and Safari
		}
	});
	
	// Event listener for the seek bar
	seekBar.addEventListener("change", function() {
        // Calculate the new time
		var time = video.duration * (seekBar.value / 100);
	   
        video.addEventListener('canplay', drawOnTimeChange);
		// Update the video time
		setVideoTime(time);
	});
    
	// Update the seek bar as the video plays
	video.addEventListener("timeupdate", function() {
		// Calculate the slider value
		var value = (100 / video.duration) * video.currentTime;
	
		// Update the slider value
		seekBar.value = value;
	});
    
	video.onloadeddata = function() {
        currentTime.innerHTML = video.currentTime.toFixed(3);
		document.getElementById("duration").innerHTML = video.duration.toFixed(3);
        startTime = 0;
		initCanvas(video, canvas);
        
        // jump video to point time on row selection
        pointTable.updateSettings({
            afterSelectionEnd: function(e) {
                setVideoTime(pointTimes[e] + startTime);
            }
        });
        
        // jump video to point time on row selection
        measureTable.updateSettings({
            afterSelectionEnd: function(e) {
                setVideoTime(measurements[e].time + startTime);
            }
        });
        
        videoControls.classList.remove("hidden");
	};
	
	// Update the current time display
	video.addEventListener("timeupdate", function() {
        updateTimeDisplay();
    });
                           
    function updateTimeDisplay() {
		document.getElementById("duration").innerHTML = (video.duration - startTime).toFixed(3);
		currentTime.innerHTML = (video.currentTime - startTime).toFixed(3);
	}
    
    video.addEventListener("ended", function() {
		setPlayBtn();		
	});
	
	// Pause the video when the slider handle is being dragged
	seekBar.addEventListener("mousedown", function() {
		video.pause();
	});
	
	// Play the video when the slider handle is dropped
	seekBar.addEventListener("mouseup", function() {
        // to cue that the video is paused and needs to be played
		setPlayBtn();
	});

	// Allows keyboard controls
	document.onkeypress=function(e){
		var key = e.charCode; 
		// console.log(e.charCode) // uncomment this to see live key presses
		if (key == 112 && video.loaded == true) { // p : play
			playButton.click()
		} else if (key == 102) {
			// f : fullscreen
			fullScreenButton.click()
		} else if (key == 45 || key == 95) {
			// - or _ : go back a frame
			minusButton.click()
		} else if (key == 61 || key == 43 ) {
			// + or = : go forward a frame
			plusButton.click()
		} else if (key == 109) {
			// m : mute
			muteButton.click()
		};
	}

	// This handles rotating the video. There's probably a more reliable way to do this
	// since more/other/complex transforms may be done on the element
	function rotateElement(element) {
		if (element.style.transform === 'rotate(90deg)') { 
			element.style.transform = 'rotate(180deg)' }
		else if (element.style.transform === 'rotate(180deg)') { 
			element.style.transform = 'rotate(270deg)' }
		else if (element.style.transform === 'rotate(270deg)') { 
			element.style.transform = 'rotate(0deg)' }		
		else { element.style.transform='rotate(90deg)' }
	}

	// Listener for the rotate button
	var rotateButton = document.getElementById("rotate-video");	
	rotateButton.addEventListener("click", function(){rotateElement(canvas)});


	// Draws the video on the canvas
	function initCanvas(video, canvas) {
        console.log('initCanvas');
		var context = canvas.getContext('2d');
		canvasWidth = video.videoWidth;
	    canvasHeight = video.videoHeight;
	    video.style.display = 'none';
	    canvas.width = canvasWidth;
	    canvas.height = canvasHeight;
	   
        // update canvas as video plays
        video.addEventListener('play', ()=>{
            draw(video,context,canvasWidth,canvasHeight, true);
	    },false);
	}
    
    function draw(v,c,w,h,repeat) {
        console.log("draw");
       if(repeat && (v.paused || v.ended)) return false;
       
       c.clearRect(0, 0, w, h);
	   c.drawImage(v,0,0,w,h);
       if(repeat) {
	       setTimeout(draw,20,v,c,w,h, true);
       }
       
       // check for point at or before current time
       var delta = 0;
       for(var i = 0; i < points.length; i++) {
           var pt = points[i];
           var alpha = 0.3;
           if(pointTimes[i] <= v.currentTime) {
               delta = v.currentTime - pointTimes[i];
               alpha = Math.max(1 - delta, alpha);
           }
           drawPoint(pt.x, pt.y, alpha);
       }
	}
    
    var resetTimerBtn = document.getElementById("resetTimerBtn");
    
    resetTimerBtn.addEventListener("click", (e) => {
        startTime = video.currentTime;
        updateTimeDisplay();
        console.log("new start time: " + startTime);
    });
    
    addEntryBtn.addEventListener("click", (e) => {
        var time = video.currentTime - startTime;
        addTimeEntry(time); 
    });
    
    function addTimeEntry(time) {
        if(measureTimes.indexOf(time) != -1) return;
        
        for(var i=0; i < measurements.length; i++) {
            if(measureTimes[i] > time ) {
                break;
            }
        }
        measurements.splice(i, 0, {time: Math.round(time * 1000) / 1000});
        
        //update table
        measureTable.loadData(measurements);
        measureTable.selectCell(i, 1);
    }

    deleteEntryBtn.addEventListener("click", (e) => {
        var time = video.currentTime - startTime;
        deleteTimeEntry(time); 
    });
    
    function deleteTimeEntry(time) {
        var i = measureTimes.indexOf(time);
        if(i == -1) return;
        
        measurements.splice(i, 1);
        measureTimes.splice(i, 1);
        measurePositions.splice(i, 1);
        
        measureTable.loadData(measurements);
        updateChart();
    }

    /*
    canvas.addEventListener("click", (e) => {
        addPoint(e.offsetX, e.offsetY);
    });
    */
    
    function addPoint(x, y) {
        var time = video.currentTime;
        
        var replace = false;
        for(var i=0; i < pointTimes.length; i++) {
            var existingTime = pointTimes[i];
            if(time == existingTime) {
                replace = true;
                break;
            }
            else if(time < existingTime) {
                break;
            }
        }
        
        var pt = {time:time, x:x, y:y};
        if(replace) {
            pointTimes[i] = time;
            points[i] = pt;
        } else {
            pointTimes.splice(i, 0, time);
            points.splice(i, 0, pt);
        }
        draw(video, canvas.getContext('2d'), canvasWidth, canvasHeight, false);
        
        //update table
        pointTable.loadData(points);
    }
    
    function drawPoint(x, y, alpha=1) {
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = "rgba(255, 0, 0, " + alpha + ")";
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2, true);
        ctx.fill();
    }
}
