playLevel = {
    create: function () {

        // game.fpsProblemNotifier.add(function() {
        //     game.time.desiredFps = game.time.suggestedFps - 8;
        //     console.log('fps problem')
        // }, this);


        // Set up the html elements
        document.getElementsByTagName('body')[0].style = "background-color:#989;";
        document.getElementById('graphs').style.display = "inline";
        document.getElementById('posgraph-ctr').style.display = "inline";
        document.getElementById('velgraph-ctr').style.display = "inline";

        game.stage.backgroundColor = '0x989';

        // game.physics.startSystem(Phaser.Physics.ARCADE);
        map = game.add.tilemap('MyTileMap');
        map.addTilesetImage('road', 'road');
        map.addTilesetImage('robot', 'robot');
        map.addTilesetImage('buttons', 'buttons');
        map.addTilesetImage('finish', 'finish');
        map.addTilesetImage('handle', 'handle');
        map.addTilesetImage('slider', 'slider');


        layer = map.createLayer('RoadTiles');
        layer.resizeWorld();
        if (debug) { layer.debug = true; }


        // At this point all the objects in the scene are setup
        levelIndicator = new LevelIndicator(100, 60);
        logo = game.add.sprite(306, 20, 'logo');
        logo.scale.setTo(1);

        signLocations = this.findObjectsByType('sign', map, 'Objects');
        startSign = new Sign(signLocations[0], "0m")
        startSign.markerone = game.add.sprite(signLocations[0].x, signLocations[0].y, 'whiteroadmarker')
        startSign.markertwo = game.add.sprite(signLocations[0].x, signLocations[0].y + 64, 'whiteroadmarker')
        signOne = new Sign(signLocations[2], "20m");
        signTwo = new Sign(signLocations[3], "40m");
        endSign = new Sign(signLocations[1], "60m");
        distance = (endSign.x - startSign.x) // in pixels

        finishline = game.add.group()
        finishLocations = this.findObjectsByType('finish', map, 'Objects');
        finishLocations.forEach(function (location) {
            new Finish(location, finishline)
        })


        playerLocations = this.findObjectsByType('robot', map, 'Objects');
        players = game.add.group()
        playerone = new Computer(playerLocations[0], players, 0x554444, 'mouse')
        playertwo = new Player(playerLocations[1], players, 0xADD8E6, 'cat')
        playertwo.checkSolution()


        // CPU's throttle was originally visible
        handleLocation = this.findObjectsByType('handle', map, 'Objects');
        playerone.lever = new Lever(handleLocation[1], playerone)  // computer
        // playerone.lever.toggleEnabled()
        playerone.lever.visible = false;
        playerone.lever.slider.visible = false;
        playerone.lever.text.visible = false;
        playertwo.lever = new Lever(handleLocation[0], playertwo)  // player

        betButton = new BetBox(700, 60)

        // This let's us reposition the velocity graph
        // document.getElementById('graphs').style.display = "inline";
        if (game.level == 6) {
            document.getElementById('velgraph-ctr').style="position:absolute; left:-365px;"
            console.log('left')
        }
        posgraph = new Graph("position (m)", playerone, playertwo, 'posgraph')
        velgraph = new Graph("velocity (m/s)", playerone, playertwo, 'velgraph')

        posgraph.redraw()
        velgraph.redraw()

        if (game.level < 6) {
            legend = new Legend(950, 350)
        } else { legend = new Legend(530, 350)   }

        // This sucks. It was shoehorned in because too many pieces need to be done in a certain order.
        pointerloc = {} // for corrections
        if (game.level === 1 ){
            document.getElementById('graphs').style.display = "none";
            legend.toggleHide()


            pointerloc.x = playertwo.lever.slider.x
            pointerloc.y = playertwo.lever.slider.y
            pointerloc.y += 168
            pointerloc.x += 40
            pointer = new Pointer(pointerloc)

        } else if (game.level === 2) {

            posgraph.fullGraph()
            velgraph.fullGraph()

            pointerloc.x = playertwo.lever.slider.x
            pointerloc.y = playertwo.lever.slider.y
            pointerloc.y += 168
            pointerloc.x += 40
            pointer = new Pointer(pointerloc)


        } else if (game.level === 3 ) {
            document.getElementById('graphs').style.display = "none";
            legend.toggleHide()

            pointerloc.x = playertwo.lever.slider.x
            pointerloc.y = playertwo.lever.slider.y
            pointerloc.y += 168
            pointerloc.x += 40
            pointer = new Pointer(pointerloc)

        } else if (game.level === 4 ) {
            document.getElementById('graphs').style.display = "none";
            legend.toggleHide()
            
            playertwo.lever.inputEnabled = false
            playertwo.lever.toggleEnabled()
            playertwo.enableChangeDelay()

            pointerloc.x = playertwo.delayController.x
            pointerloc.x += 50
            pointerloc.y = playertwo.delayController.y
            pointerloc.y += 64
            pointer = new Pointer(pointerloc)


        } else if (game.level === 5 ) {
            posgraph.fullGraph()
            velgraph.fullGraph()
            playertwo.lever.inputEnabled = false
            playertwo.lever.toggleEnabled()
            playertwo.lever.visible = false;
            playertwo.lever.slider.visible = false;
            playertwo.lever.text.visible = false;

            graphControl = new GraphControl(20, 340)


            pointerloc.x = graphControl.x
            pointerloc.y = graphControl.y
            pointerloc.y += 95
            pointerloc.x += 50
            pointer = new Pointer(pointerloc)
        } else if (game.level === 6 ) {
            posgraph.fullGraph()
            velgraph.fullGraph()
            // playertwo.lever.inputEnabled = false
            playertwo.lever.toggleEnabled()

            // playertwo.lever.visible = false;
            // playertwo.lever.slider.visible = false;
            playertwo.lever.text.visible = false;
            // playertwo.lever.label.visible = false

            // graphControl = new GraphControl(50, 340)
            document.getElementById('posgraph-ctr').style.display = "none";

            // pointerloc.x = graphControl.x
            // pointerloc.y = graphControl.y
            // pointerloc.y += 118
            // pointer = new Pointer(pointerloc)
            pointerloc.x = playertwo.lever.slider.x
            pointerloc.y = playertwo.lever.slider.y
            pointerloc.y += 168
            pointerloc.x += 40
            pointer = new Pointer(pointerloc)

        } else if (game.level === 7 ) {
            // playertwo.lever.inputEnabled = false
            posgraph.fullGraph()
            velgraph.fullGraph()
            document.getElementById('velgraph-ctr').style.display = "none";
            playertwo.lever.text.visible = false;
            
            legend.minimouse.visible = false;
            legend.mouseline.visible = false

            pointerloc.x = playertwo.lever.slider.x
            pointerloc.y = playertwo.lever.slider.y
            pointerloc.y += 168
            pointerloc.x += 40
            pointer = new Pointer(pointerloc)

        }

        promptBox = new Prompt(430,600)

        // game.time.desiredFps = game.time.suggestedFps - 5;

    },

    update: function() {

        // console.log(game.input.x)
        // console.log(game.input.y)

        if (game.input.mousePointer.x > betButton.betButton.left && game.input.mousePointer.x < betButton.betButton.right 
            && game.input.mousePointer.y < betButton.betButton.bottom && game.input.mousePointer.y > betButton.betButton.top) {
                // console.log("hi")
                var highlightpos = Math.ceil((game.input.mousePointer.x - betButton.betButton.left) / (betButton.betButton.width/3));
                if (highlight != null && highlightframe != null && highlightframe != highlightpos) {
                    highlight.destroy()
                    highlight = null
                }
                if  (highlight == null) {
                    highlight = game.add.sprite(0, betButton.betButton.boxone.centerY, "graybox")
                    highlight.alpha = .2
                    highlight.anchor.set(.5)
                    highlight.scale.setTo(1.1, 0.5 )
                    if (highlightpos == 1) {
                        highlight.x = betButton.betButton.boxone.centerX - 4 // ?
                    } else if (highlightpos == 2) {
                        highlight.x = betButton.betButton.boxtwo.centerX
                    } else if (highlightpos == 3) {
                        highlight.x = betButton.betButton.boxthree.centerX
                    }
                    highlightframe = highlightpos
                }
            } else if (highlight != null) {
                highlight.destroy()
                highlight = null
                highlightframe == null
            }

    },



	findObjectsByType: function(type, map, layer) {
		var result = new Array();
		map.objects[layer].forEach(function(element) {
			if (element.type === type) {
				//Put all of the specifed objects in an array.
				//Phaser uses top left, Tiled bottom left so we have to adjust
				//so they might not be placed in the exact position as in Tiled
				result.push(element);
			}
		});
		return result;
	},

    render: function() {
        
        // Debugging stuff, less important since physics was stripped out
//		if (debug) {
//			players.forEachAlive(this.renderGroup, this);
//            finishline.forEachAlive(this.renderGroup, this);
//			game.debug.text(game.time.fps || '--', 2, 14, "#00ff00");
//            game.debug.geom( leverBounds[0], 'rgba(255,255,0,.4)' ) ;
//            game.debug.geom( leverBounds[1], 'rgba(255,255,0,.4)' ) ;
//		}
	},
    // rendergroup lets you add debug to ever member of a group
	renderGroup: function(member) {
		game.debug.body(member);
	},


};

