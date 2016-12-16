var $j= jQuery.noConflict(); 
	
var backgroundtrack;
var teleported;
var tabletAppear;


if(isiOs){

	level0 = new Howl({
				  urls: ["assets/sound/level0_converted.mp3","assets/sound/level0.ogg"],			
				  loop: true,
				  autoplay: false,
				  onload: function() {					
					},
					volume: 0.2

				});
	level1 = new Howl({
				  urls: ["assets/sound/level1_converted.mp3","assets/sound/level1.ogg"],			
				  loop: true,
				  autoplay: false,
				  onload: function() {					
					},
					volume: 0.2

				});
				
	level2 = new Howl({
				  urls: ["assets/sound/level2_converted.mp3","assets/sound/level2.ogg"],			
				  loop: true,
				  autoplay: false,
				  onload: function() {					
					},
					volume: 0.2

				});
				
	level3 = new Howl({
				  urls: ["assets/sound/level3_converted.mp3","assets/sound/level3.ogg"],			
				  loop: true,
				  autoplay: false,
				  onload: function() {					
					},
					volume: 0.2

				});
	level4 = new Howl({
				  urls: ["assets/sound/level1_converted.mp3","assets/sound/level1.ogg"],			
				  loop: true,
				  autoplay: false,
				  onload: function() {					
					},
					volume: 0.2

				});
	level5 = new Howl({
				  urls: ["assets/sound/level2_converted.mp3","assets/sound/level2.ogg"],			
				  loop: true,
				  autoplay: false,
				  onload: function() {					
					},
					volume: 0.2

				});
				
	level6 = new Howl({
				  urls: ["assets/sound/level3_converted.mp3","assets/sound/level3.ogg"],			
				  loop: true,
				  autoplay: false,
				  onload: function() {					
					},
					volume: 0.2

				});
	level7 = new Howl({
				  urls: ["assets/sound/level0_converted.mp3","assets/sound/level0.ogg"],			
				  loop: true,
				  autoplay: false,
				  onload: function() {					
					},
					volume: 0.2

				});
	level8 = new Howl({
				  urls: ["assets/sound/end_converted.mp3","assets/sound/end.ogg"],			
				  loop: true,
				  autoplay: false,
				  onload: function() {					
					},
					volume: 0.2

				});
	teleported = new Howl({
			  urls: ["assets/sound/teleported.mp3","assets/sound/teleported.ogg"],			
			  loop: false,
			  autoplay: false,
			  onload: function() {				
				},
			volume: 0.4

			});
	tabletAppear = new Howl({
			  urls: ["assets/sound/tabletAppear.mp3","assets/sound/tabletAppear.ogg"],			
			  loop: false,
			  autoplay: false,
			  onload: function() {				
				},
			volume: 0.4

			});
	PowerGained = new Howl({
			  urls: ["assets/sound/PowerGained.mp3","assets/sound/PowerGained.ogg"],			
			  loop: false,
			  autoplay: false,
			  onload: function() {				
				},
			volume: 0.4

			});
	correctDrop = new Howl({
			  urls: ["assets/sound/correctDrop.mp3","assets/sound/correctDrop.ogg"],			
			  loop: false,
			  autoplay: false,
			  onload: function() {				
				},
			volume: 0.6

			});
	incorrectDrop = new Howl({
			  urls: ["assets/sound/incorrectDrop.mp3","assets/sound/incorrectDrop.ogg"],			
			  loop: false,
			  autoplay: false,
			  onload: function() {				
				},
			volume: 0.6

			});
	info = new Howl({
			  urls: ["assets/sound/info.mp3","assets/sound/info.ogg"],			
			  loop: false,
			  autoplay: false,
			  onload: function() {				
				},
			volume: 0.6

			});
}	
	function playEffect(gg){
		
			if( isiOs){
				switch(gg){
					case "info":info.play();
					break;					
					case "incorrectDrop": incorrectDrop.play();
					break;
					case "correctDrop":correctDrop.play();
					break;
					case "PowerGained":PowerGained.play();
					break;
					case "tabletAppear":tabletAppear.play();					
					break;
					case "teleported":teleported.play();					
					break;
				}
			
			}else
			try{
			 $j.mbAudio.play(gg, 'effect');
			 }catch (e){}
		}
		
	function playBG(gg){
	if($j("#audio_btn1").hasClass('activated'))return;
//	console.log("aya re audio"+gg);
		/* try{
			if( isiOs){bg11.stop();bg0.stop();bg11.stop();bg0.stop();}else
			$j.mbAudio.pause('bg'+audioIndex);	

			}catch(Error){}
			if( isiOs){level0.play();}else
			$j.mbAudio.play(gg, 'game');*/
			if( isiOs){
			level0.stop();level1.stop();level2.stop();level3.stop();level4.stop();level5.stop();level6.stop();
						level7.stop();level8.stop();
				switch(gg){	
						
					case 1:level1.play();
					break;
					case 2:level2.play();
					break;
					case 3:level3.play();
					break;
					case 4:level4.play();
					break;
					case 5:level5.play();
					break;
					case 6:level6.play();
					break;
					case 7:level7.play();
					break;
					case 8:end.play();
					break;
				}
			
			}else
			try{
			
			if(noJump){
			 $j.mbAudio.fadeOut('level'+(gg-1));}else { $j.mbAudio.fadeOut('level0');}
			 
				noJump =true;
			
			 window.setTimeout(function(){			 
			 $j.mbAudio.play("level"+gg, 'game');},2000); 
			 }catch (e){}
		}
		function unMuteBG(gg){
			if( isiOs){
			level0.stop();level1.stop();level2.stop();level3.stop();level4.stop();level5.stop();level6.stop();
						level7.stop();level8.stop();
				switch(gg){	
					case 0:level0.play();
					break;	
					case 1:level1.play();
					break;
					case 2:level2.play();
					break;
					case 3:level3.play();
					break;
					case 4:level4.play();
					break;
					case 5:level5.play();
					break;
					case 6:level6.play();
					break;
					case 7:level7.play();
					break;
					case 8:end.play();
					break;
				}
			
			}else
			try{
			 //$j.mbAudio.fadeOut('level'+(gg-1));	
				$j.mbAudio.play("level"+gg, 'game');
			 }catch (e){}
		}
		function muteBG(gg){
	
//	console.log("aya re audio"+gg);
		/* try{
			if( isiOs){bg11.stop();bg0.stop();bg11.stop();bg0.stop();}else
			$j.mbAudio.pause('bg'+audioIndex);	

			}catch(Error){}
			if( isiOs){level0.play();}else
			$j.mbAudio.play(gg, 'game');*/
			if( isiOs){
			level0.pause();level1.pause();level2.pause();level3.pause();level4.pause();level5.pause();level6.pause();
						level7.pause();level8.pause();
				switch(gg){	
						case 0:level0.pause();
					break;
					case 1:level1.pause();
					break;
					case 2:level2.pause();
					break;
					case 3:level3.pause();
					break;
					case 4:level4.pause();
					break;
					case 5:level5.pause();
					break;
					case 6:level6.pause();
					break;
					case 7:level7.pause();
					break;
					case 8:end.pause();
					break;
				}
			
			}else
			try{
				
				$j.mbAudio.pause("level"+gg, 'game'); 
			 }catch (e){}
		}
	$j(document).on("soundsLoaded", function (evt) {
			
				if( isiOs){level0.play();}else{
				 $j.mbAudio.play('level0', 'game');$j("#audio_btn").show();}
		}); 
		
	function mouseover() {if( !isiOs)$j(this).addClass('hover');}
	function mouseout() {if( !isiOs)$j(this).removeClass('hover');}
				
	$j(document).ready(function(){	
	
	
	$j("#audio_btn").hide();
	//some fix
	$j("#audio_btn").bind("mouseover",mouseover); 
	$j("#audio_btn1").bind("mouseover",mouseover);  			
	$j("#close_btn").bind("mouseover",mouseover);  		
	$j("#help_btn").bind("mouseover",mouseover); 
	$j("#mission_btn").bind("mouseover",mouseover); 
	$j("#audio_btn").bind("mouseout",mouseout);  	
	$j("#audio_btn1").bind("mouseout",mouseout);  			
	$j("#close_btn").bind("mouseout",mouseout);  		
	$j("#help_btn").bind("mouseout",mouseout); 
	$j("#mission_btn").bind("mouseout",mouseout); 	
var clickEventType= ((document.ontouchstart!==null)?'click':'click');

				$j("#audio_btn").bind(clickEventType,function() { 				
					$(this).toggleClass('activated');
					if($(this).hasClass('activated')){					
						$j.mbAudio.muteAllSounds();
							if( isiOs)Howler.mute();					
						}
					else{
							if( isiOs)Howler.unmute();
						$j.mbAudio.unMuteAllSounds();									
					}					
				}); 
				$j("#audio_btn1").bind(clickEventType,function() { 				
					$(this).toggleClass('activated');
					if($(this).hasClass('activated')){	
							if(!getIntroScreen())					
							{muteBG(lessonLocation);muteBG(0);}
							else	
							muteBG(0);								
						}
					else{
							if(!getIntroScreen())	
							unMuteBG(lessonLocation);
							else
							unMuteBG(0);
					}					
				});  				
				$j("#mission_btn").bind(clickEventType,function() { 
					$(this).toggleClass('activated');
					if($(this).hasClass('activated')){
						//$j.mbAudio.muteAllSounds();
							//if( isiOs)Howler.mute();
							$j("#HUD").fadeIn(300);
						}
					else{
							//if( isiOs)Howler.unmute();
						//$j.mbAudio.unMuteAllSounds();							
							$j("#HUD").fadeOut(300);					
					}					
				}); 
				
			
				
	/*		window.createGrowl = function (persistent) {
    var target = $j('.qtip.jgrowl:visible:last');

    $j('<div/>').qtip({
        content: {
            text: 'This is a jGrowl-esque qTip!',
            title: {
                text: 'Attention!',
                button: true
            }
        },
        position: {
            target: [0, 0],
            container: $j('#mission_btn')
        },
        show: {
            event: false,
            ready: true,
            effect: function () {
                $j(this).stop(0, 1).animate({
                    height: 'toggle'
                }, 400, 'swing');
            },
            delay: 0,
            persistent: persistent
        },
        hide: {
            event: false,
            effect: function (api) {
                $j(this).stop(0, 1).animate({
                    height: 'toggle'
                }, 400, 'swing');
            }
        },
        style: {
            width: 250,
            classes: 'jgrowl',
            tip: false
        },
        events: {
            render: function (event, api) {
                if (!api.options.show.persistent) {
                    $j(this).bind('mouseover mouseout', function (e) {
                        var lifespan = 5000;

                        clearTimeout(api.timer);
                        if (e.type !== 'mouseover') {
                            api.timer = setTimeout(function () {
                                api.hide(e)
                            }, lifespan);
                        }
                    })
                        .triggerHandler('mouseout');
                }
            }
        }
    });
}


 animations: {
        walkRight: [0, 1, 2, 3, 4, 5, 6, 7],
        walkLeft: [15, 14, 13, 12, 11, 10, 9, 8]
    },	*/

	function getIntroScreen(){
		return $j("#intro").is(":visible")||$j("#mission").is(":visible");
	}	
	
			
			
			$j("#intro").click(function() { 
				$j("#audio_btn").show();
				$j("#intro").unbind("click");			
			if( isiOs){level0.pause();level0.play();}
			
			}); 
			
		});


	
	
			
				
	
	