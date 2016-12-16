// All the objects used in biomechanic


// Used in the tutorial for the toons to talk to each other
class SpeechBubble  {
    constructor(x, y, text) {
        // super(game, obj.x + 50, obj.y, "speech")
        this.speech = game.add.sprite(x + 48, y - 112, "speech")
        this.speech.tint = 0xffccff
               
        this.text =  game.add.text(0, 0, text, {
            font: "23px Arial",
            fill: "#000",
            align: "center",
            // wordWrap: true,
            // wordWrapWidth: 200,
		});
        
        // this.speech.addChild(this.text);
        this.speech.scale.set(.8)
        this.text.scale.set(.8)
        this.text.anchor.set(.5)
        this.text.y = this.speech.centerY - 5
        this.text.x = this.speech.centerX + 6
        // this.text.setText(text)
        // game.add.existing(this.text);
        
    }
    toggle() {
        this.speech.visible =! this.speech.visible
        this.text.visible =! this.text.visible
    }
    destroy() {
        this.speech.destroy()
        this.text.destroy()
    }
}

// Most buttons which "do" something use this class
class LabelButton extends Phaser.Button {
    constructor(game, x, y, key, label, callback, callbackContext, overFrame, outFrame, downFrame, upFrame) {
        super(game, x, y, key, callback, callbackContext, overFrame, outFrame, downFrame, upFrame);
        this.style = {
          'font': '30px Arial',
          'fill': 'black'
        };
        this.anchor.setTo(0.5);
        this.label = new Phaser.Text(game, 0, 0, label, this.style);
        //puts the label in the center of the button
        this.label.anchor.setTo(0.5, 0.5);
        this.addChild(this.label);
        this.setLabel(label); //adds button to game
        game.add.existing(this);
        this.events.onInputOver.add(function(){
            this.tint = 0xEEEEDD
        }, this);
        
        this.events.onInputOut.add(function(){
            this.tint = 0xFFFFFF
        }, this);
    }
    setLabel(label) {
        this.label.setText(label);
    }
};

// Used on the level select screen to describe the game
class Description extends Phaser.Sprite {
    constructor(x,y, text){     
        super(game, x, y, 'rectangle');
        game.add.existing(this);
        this.xScale = 2.0
        this.yScale = 0.7
        
        this.scale.setTo(this.xScale, 1)

        this.tint = '0x0b4f6c'
        this.alpha = 0.8
        
        this.textwidth = 228*this.xScale,
        
        this.style = {
                font: "20px Arial",
                fill: "white",
                wordWrap: true,
                wordWrapWidth: this.textwidth,
                align: "center",
            };
        this.text = game.add.text(this.left + 31 , y + (10*this.yScale), text, this.style)

        this.scale.setTo(this.xScale, this.text.height/(230))
    }
}

// Used on the level select screen to create level navigation  uttons
class LevelButton extends Phaser.Sprite {
    constructor(x,y,levelnum){     
        super(game, x, y, 'levelbutton');
        game.add.existing(this);
        this.style = {
            'font': '18px Arial',
            'fill': 'white'
        };
        if (levelnum == 0) {
            this.label = "TUTORIAL"
        } else {
            this.label = "LEVEL " + levelnum
        }
        this.anchor.setTo(0.5, 0.5)
        
        this.text = game.add.text(this.x, this.y + 3, this.label, this.style)
        this.text.anchor.setTo(0.5, 0.5)
        // this.text.setShadow(2, 2, 'rgba(0,0,0,0.5)', 5);
        
        this.child = this.addChild(this.text);
        game.add.existing(this.child);
        
        // this.text.setText(this.label)
        
        this.levelnum = levelnum
        this.inputEnabled = true;
        this.input.useHandCursor = true;
        this.events.onInputDown.add(function(e){
            game.level = levelnum
            game.report("level_selected", {'level': game.level})
            if (levelnum == 0) {
                game.state.start("Tutorial")
            } else {
                game.state.start("PlayLevel")
            }
        })
        this.alpha = 0.9
        this.tint = 0x999999
        this.scale.setTo(2.5, 1)
        // this.wiggle()
        this.inputEnabled = true;
        this.events.onInputOver.add(function(){
            this.scale.setTo(2.75, 1.1)
            this.tint = 0xdddddd
        }, this);
        
        this.events.onInputOut.add(function(){
            this.scale.setTo(2.5, 1)
            this.tint = 0x999999
        }, this);
    }
    // wiggle() {
    //     var _this = this
    //     _this.angleIncrement = .15
    //     _this.angleValue = Math.random()*2.5
    //     _this.wiggler = setInterval(function(){
    //             _this.angleValue += _this.angleIncrement
    //             _this.angle = _this.angleValue
    //             if (_this.angle > 2.5) {
    //             _this.angleIncrement *= -1
    //             } else if (_this.angle < -2.5) {
    //                 _this.angleIncrement *= -1
    //             }

    //         }, 50)
    // }
}


// Creates text centered on a sprite
class CenteredText {
    constructor(sprite, yoffset, txt, style) {
        if (style.wordWrap) {
            style.wordWrapWidth = style.wordWrapWidth || (sprite.width - 10)
        } else if (style.wordWrap == null ) {
            style.wordWrap = true
            style.wordWrapWidth = sprite.width - 12
        }
        console.log(style.wordWrapWidth)
        console.log(sprite.width)
        this.text = game.add.text(0, 0, txt, style)
        this.text.anchor.set(0.5);
        this.text.x = Math.ceil((sprite.left + sprite.right) / 2);
        this.text.y = Math.ceil((sprite.top + sprite.bottom) / 2) + yoffset;
        this.lines = this.text.precalculateWordWrap(txt.toString())
    }
}

// Creates a box with text centered and interior to it
class TextBox extends Phaser.Sprite {
    constructor(x,y, yoffset, xScale, yScale, txt, style) {
        super(game,x,y,'rectangle');
        game.add.existing(this);

        this.scale.set(xScale, yScale)
        this.anchor.set(0.5);

        this.text = new CenteredText(this, yoffset, txt, style)
    }
}


// This is a human player
class Player extends Phaser.Sprite {
    constructor(location, group, color, sprite) {
        super(game, location.x+3 - 18, location.y - 64 - 14, sprite, 8);
        this.delays = [1, 2, 3, 4, 5, 6 , 8, 9, 10, 12, 15];
        this.speeds = [3, 4, 5, 6, 7.5, 10, 12, 15, 20, 30, 60];
        this.speed = this.speeds[0]; // initial speed
        // game.physics.enable(this);
        // this.body.enable = true;
        // this.body.setSize(6,32, -2, 32);
        game.world.bringToTop(this)
        // this.body.velocity.x = 0;
        this.animations.add('run');
        game.add.existing(this);
        this.color = color
        if (game.level == 7 ) {
            this.delay = 0
        } else {
            this.delay = this.randomValue(this.delays.slice(0,computerSpeed+1));
        }


        group.add(this);
        this.labelDelay(this.delay)
        this.text.visible = true
    }
    // move() {
    //     var _this = this
    //     this.movement = setTimeout(function() {
    //         _this.vel = distance * _this.speed / 60
    //         _this.body.velocity.x = _this.vel
    //         _this.animations.play('run', 8, true);
    //         _this.lever.toggleEnabled();
    //     }, this.delay * 1000); // in milliseconds
    //     if (game.level != 4) {
    //         this.countdown()
    //     } else if (game.level == 4) {

    //     }
    // }

    // Added to eliminate real physics from the game
    fakeMove() {
        var _this = this
        this.rate = distance * this.speed / 60
        this.movement = setTimeout(function() {
            _this.motion = setInterval(function() {
                _this.x += _this.rate * 30 / 1000
                if (_this.x > 704 ) {

                    if (_this.x > 704 + _this.speed*2 ) {
                        clearInterval(_this.motion)
                        _this.animations.stop(null, true);
                    }
                    betButton.showResult(playerone,playertwo);
                    // if (Math.abs(playerone.x - playertwo.x) < 63) {
                    if ( playertwo.speed*(60 - playerone.speed * playertwo.delay) == 60*playerone.speed ) {
                        game.ontime = true
                        promptBox.indicator.updateProgress()

                    } else {
                        game.ontime = false
                        promptBox.updatePrompt() // will this fire multiple times.?
                    }


                }
                },30)
            _this.animations.play('run', 8, true);
        }, this.delay * 1000); // in milliseconds
        if (game.level != 4) {
            this.countdown()
        } else if (game.level == 4) {

        }
    }

    // stop() {
    //     var _this = this;
    //     setTimeout(function(e) {
    //         _this.animations.stop(null, true);
    //         // _this.body.velocity.x = 0;
    //     }, 1000); // in milliseconds
    //     // promptBox.next_button.visible = true;
    // }
    labelDelay(label) {

        this.backplate = game.add.sprite(this.x - 132 + 18, this.y +14,'rectangle')
        this.backplate.scale.set(.35,.25)
        this.backplate.tint = this.color


        if (game.level == 4) {
            this.flair = game.add.sprite(this.x - 128 + 18, this.y + 20,'speedometer')
        } else {
            this.flair = game.add.sprite(this.x - 128+ 18, this.y + 20,'hourglass')
        }

        this.flair.scale.set(.8)

        this.sprite = game.add.sprite(this.x - 128 + 18, this.y + 44,'minicat')
        this.sprite.scale.set(1.3)




        this.text = game.add.text(this.x - 96 + 18, this.y + 18, "Delay:\n" + label + " s", {
            font: "18px Arial",
            fill: "#000",
            align: "left"
		});
    }
    // blinkDelay() {
    //     var _this = this
    //     _this.blink = setInterval(function(){
    //             _this.text.visible = !_this.text.visible;
    //         }, 500)

    // }


    // Invokes a new delay controller and hides the lever
    enableChangeDelay() {
        if (game.level == 4) {
            // var _this = this
            // this.text.inputEnabled = true;

            // this.text.events.onInputUp.add(function(e){
            //     _this.index = _this.delays.indexOf(_this.delay)
            //     _this.delay = _this.delays[(_this.index + 1) % _this.delays.length ]
            //     _this.text.destroy()
            //     _this.labelDelay(_this.delay)
            //     _this.enableChangeDelay()
            //     clearInterval(_this.blink)
            // })

            this.text.destroy()
            this.lever.visible = false;
            this.lever.slider.visible = false;
            this.lever.text.visible = false;

            this.delayController = new DelayController(60, 400)


        }
    }


    randomValue(arr) {
        return arr[Math.floor(Math.random()*arr.length)]
    };
    countdown() {
        var _this = this;
        this.counter = this.delay
        if (this.counter > 0) {
            this.timer = setInterval(function(e) {
                _this.text.destroy()
                _this.counter -= 1
                _this.labelDelay(_this.counter)
                if (_this.counter == 0) { clearInterval(_this.timer) }
            }, 1000)
        }
    }
    resetDelay() {
        clearInterval(this.timer)
        clearInterval(this.movement)
        clearInterval(this.motion)
    }

    checkSolution() {
        var _this = this
        var speed = playerone.speeds[computerSpeed]
        _this.solvable = false;
        if (game.level != 4) {
            while ( !_this.solvable  ){
                _this.speeds.forEach(function(playerSpeed){

                    if ( playerSpeed*(60/speed - _this.delay) == 60 ) {
                        _this.solvable = true;
                    }
                })
                if (!_this.solvable) {
                    _this.delay = _this.randomValue(_this.delays);
                    console.log('new delay: ' + _this.delay)
                }
            }
            _this.text.destroy()
            _this.labelDelay(_this.delay)
        } else if (game.level == 4) {

            while ( !_this.solvable  ){
                _this.delays.forEach(function(playerDelay){

                    if ( _this.speed*(60/speed - playerDelay) == 60 ) {
                        _this.solvable = true;
                    }
                })
                if (!_this.solvable) {
                    _this.speed = _this.randomValue(_this.speeds);
                    console.log('new speed: ' + _this.speed)
                }
            }
            _this.text.destroy()
            _this.labelDelay(_this.speed)


        }
    }
};

// This creates a computer controlled player
class Computer extends Player {
    constructor(location, group, color, sprite) {
        super(location, group, color, sprite);
        this.delay = 0
        // this.speeds = [2, 3, 4, 5, 6, 10, 12, 15, 30]
        this.speeds = [30, 15, 12, 10, 6, 5, 4, 3]
        this.speed = this.randomValue(this.speeds)
        this.labelSpeed(this.speed)
        computerSpeed = this.speeds.indexOf(this.speed)
    }
    fakeMove() {
        super.fakeMove()
        this.lever.toggleEnabled();
    }
    labelSpeed(label) {
        this.text.destroy()
        this.sprite.destroy()

        this.backplate = game.add.sprite(this.x - 132 + 18, this.y +14,'rectangle')
        this.backplate.scale.set(.35,.25)
        this.backplate.tint = this.color


        this.sprite = game.add.sprite(this.x - 128 + 18, this.y + 44,'minimouse')
        this.sprite.scale.set(1.3)

        this.flair = game.add.sprite(this.x - 128 + 18, this.y + 20,'speedometer')
        this.flair.scale.set(.8)

        this.text = game.add.text(this.x - 96 + 18, this.y + 18, "Speed:\n" + label + " m/s", {
            font: "18px Arial",
            fill: "#FFF",
            align: "left"
		});
    }
}

// The finish line
class Finish extends Phaser.Sprite {
    constructor(location, group) {
        super(game, location.x, location.y-64, 'finish');
        // game.physics.enable(this)
        // this.body.enable = true;
		// this.body.setSize(10, 64);
        game.add.existing(this)
        group.add(this)
    }
}

// The controller for a player's speed
class Lever extends Phaser.Sprite {
    constructor(location, player) {
        location.y += 14
        location.x -= 178
        super(game, location.x, location.y+32, 'handle');
        this.slider = game.add.sprite(location.x, location.y-128, 'slider')
        // this.slider.tint = player.tint
        this.y -= 64;
        game.add.existing(this)
        game.world.bringToTop(this)

        if (game.level != 4 && game.level != 5 ) {
//            this.label = game.add.text(this.x + 32, this.y - 92, "Cat Throttle", {
//                font: "14px Arial",
//                fill: "black",
//                align: "center"
//            });
//            
//            this.labelChild = this.addChild(this.label)
//            game.add.existing(this.labelChild)
//            this.labelChild.anchor.set(.5)
            this.minicat = game.add.sprite(this.centerX, this.y - 99,'minicat')
            this.minicat.anchor.set(.5)
        }
        
        this.increments = 128 / player.speeds.length

        // Controls
        this.inputEnabled = true;
        this.input.useHandCursor = true;
        var _this = this.slider
        this.events.onInputUp.add(function(e){
            // solve for % of the input bounds
            var previous_speed = player.speed
            player.speed = player.speeds[10 - Math.floor((e.y - _this.y)/9)] // improve this
            e.updateText(player);
            if (game.level == 2 || game.level == 3 || game.level == 6 || game.level == 7) {
                posgraph.fullGraph()
                velgraph.fullGraph()
            }
            game.report('throttle_input', {
                    'previous_cat_speed': previous_speed,
                    'level': game.level,
                    'new_cat_speed': playertwo.speed,
                    'cat_delay': playertwo.delay,
                    'mouse_speed': playerone.speed,
                    'mouse_delay': playerone.delay,
                    'level_progress': game.progress,
                })
        })


        this.input.enableDrag();
        this.input.useHandCursor = true;
        this.bounds = new Phaser.Rectangle(this.x, this.y - 92, 64, 127);
        this.input.boundsRect = this.bounds;
        if (debug) { leverBounds.push(this.bounds) }


        this.input.enableSnap(64, 9, true, true, 14, 0);


        if (game.level == 4) {
            while (playertwo.speed < playerone.speed) {
                console.log(playertwo.speed)
                playertwo.speed = playertwo.randomValue(playertwo.speeds)
                console.log(playertwo.speed)
            }
        }

        this.textcolor = '#fff'
        this.text = game.add.text(this.slider.x - 10 + 4, this.slider.y + 130, "Speed:\n" + player.speed + " m/s", {
            font: "28px Arial",
            fill: this.textcolor,
            align: "center"
		});
        // this.child = this.addChild(this.text)
        // game.add.existing(this.child)
        // this.text.anchor.set(.5)
    }
    toggleEnabled() {
        if (game.level <= 3) {
            this.inputEnabled =! this.inputEnabled;
        }
    }
    updateText(player) {
        this.text.destroy();
        this.text = game.add.text(this.slider.x - 10 + 4, this.slider.y + 130, "Speed:\n" + player.speed + " m/s", {
            font: "28px Arial",
            fill: this.textcolor,
            align: "center"
		});
        if (game.level === 6 || game.level === 7) { this.text.visible = false; }
    }
};


// This handles the betting
class BetBox extends TextBox {
    constructor(x,y) {
        super(x, y, -25, 1.3, 0.5, "Make Your Bet!",{
            font: "18px Arial",
            align: "center",
            fill: "white",
        });
        this.tint = '0x0b4f6c'
        this.alpha = 0.7
        // this.scale.setTo(1.3, 0.4) //dims ~340x77

        this.text = new CenteredText(this, -5, "Tap to predict if your cat will arrive...", {
            font: "16px Arial",
            align: "center",
            fill: "white",
        })


        this.betButton = new BetButton(
            Math.round((this.left + this.right)/2),
            Math.round((this.top + this.bottom)/2) + 30
            );
        this.betButton.anchor.set(0.5)

        this.visible = false
        
        var _this = this
        playLevel.input.onDown.add(_this.makePointer, 
            playLevel)
        
    }
    check(comp,player) {
        this.betButton.check(comp,player)
    }
    showResult(comp,player) {
        this.betButton.showResult(comp,player)
    }
    toggleEnabled() {
        this.betButton.toggleEnabled()
    }
    makePointer() {
        this.pointer = new Pointer(this)
        this.pointer.y = 70
        this.pointer.x = 540
        this.pointer.angle = 260
        playLevel.input.onDown.remove(betButton.makePointer, playLevel)
    }

}


class BetButton extends Phaser.Sprite {
    constructor(x,y){
        super(game, x, y, 'bet');
        game.add.existing(this);
        this.xScale = 1.1
        this.scale.setTo(this.xScale, 0.5 )
        this.frame = 0
        this.inputEnabled = true;
        this.input.useHandCursor = true;
        var _this = this
        this.events.onInputDown.add(function(e){
            // Get the position of the mouse and determine which box was clicked
            e.frame = Math.ceil((game.input.mousePointer.x - _this.left) / (_this.xScale * 64));
            console.log(e.frame)

            game.report("bet_chosen", {
                'level': game.level,
                'bet': ['too_soon','on_time','too_late'][e.frame - 1],

                })
            })

        this.style = {
                'font': '14px Arial',
            };

        this.boxone = game.add.text(this.x, this.y + 1, "too soon", this.style)
        this.boxone.x = Math.ceil((this.left + this.right) / 2) - 128 - 64*this.xScale;
        // this.boxone.y = Math.ceil((this.top + this.bottom) / 2);
        this.boxone.anchor.set(0, .5)


        this.boxtwo = game.add.text((this.x + 64*this.xScale), this.y+ 1, "on time", this.style)
        this.boxtwo.x = Math.ceil((this.left + this.right) / 2) - 128;
        // this.boxtwo.y = Math.ceil((this.top + this.bottom) / 2);
        this.boxtwo.anchor.set(0, .5)

        this.boxthree = game.add.text(this.x + 128*this.xScale, this.y+ 1, "too late", this.style)
        this.boxthree.x = Math.ceil((this.left + this.right) / 2) - 128 + 64*this.xScale;
        // this.boxthree.y = Math.ceil((this.top + this.bottom) / 2);
        this.boxthree.anchor.set(0, .5)

        // this.events.onInputOver.add(function(e){
        //     _this.highlightpos = Math.ceil((game.input.mousePointer.x - _this.left) / (_this.xScale * 64));
        //     _this.highlight = game.add.sprite(0, _this.boxone.centerY, "graybox")
        //     _this.highlight.alpha = .1
        //     _this.highlight.anchor.set(.5)
        //     _this.highlight.scale.setTo(2, 1 )
        //     if (_this.highlightpos == 1) {
        //         _this.highlight.x = _this.boxone.centerX
        //     } else if (_this.highlightpos == 2) {
        //         _this.highlight.x = _this.boxtwo.centerX
        //     } else if (_this.highlightpos == 3) {
        //         _this.highlight.x = _this.boxthree.centerX
        //     }
                       
            
        // }, this);
        
        // this.events.onInputOut.add(function(){
        //     _this.highlight.destroy()
        // }, this);




        this.finished = false

    }
    
    check(comp,player) {
        // console.log(player.x)
        // console.log(comp.x)
        if ( playertwo.speed*(60  - playerone.speed * playertwo.delay) == 60 *playerone.speed ) { // on time
            game.ontime = true
            return 2; // the frame it should be
        } else if (player.speed*60/(60+player.speed*player.delay) < comp.speed) { // too slow
            game.slow = true
            return 3;
        } else { // too soon
            game.fast = true
            return 1;
        }
    }
    showResult(comp,player) {
        var label;
        if (!this.finished) {
            if (this.frame) {
                console.log('test2')
                this.feedbackFrame = game.add.sprite(this.x, this.y - 26, 'rectangle')
                this.feedbackFrame.tint = 0xADD8E6
                this.feedbackFrame.anchor.set(.5)
                this.feedbackFrame.scale.setTo(this.xScale, 0.35 )

                this.style = {
                    'font': '23px Arial',
                };
                console.log(this.check(comp,player))
                if (this.frame == this.check(comp,player)) {
                    this.style.fill = "green";
                    label = "Yes, you bet right.\nThe cat was "
                    this.result = 'correct'
                } else {
                    this.style.fill = "red";
                    label = "No, you bet wrong.\nThe cat was "}
                    this.result = 'incorrect'
                if (game.ontime) {
                    label += 'on time.'
                    this.guess = 'on_time'
                } else if (game.slow) {
                    label += 'late.'
                    this.guess = 'too_slow'
                } else if (game.fast) {
                    label += 'early.'
                    this.guess = 'too_fast'
                }

                game.report('bet_results', {
                    'result': this.result,
                    'guess': this.guess,
                    'level': game.level,
                    'cat_speed': playertwo.speed,
                    'cat_delay': playertwo.delay,
                    'mouse_speed': playerone.speed,
                    'mouse_delay': playerone.delay,
                    'level_progress': game.progress,

                })

                this.label = game.add.text(this.x, this.y - 26, label, this.style)
                this.label.anchor.set(.5)



            }
            this.finished = true;
        }
    }
    toggleEnabled() {
        // if (this.lock == null) {
        //     this.lock = game.add.sprite(this.x + 64, this.y, 'lock')
        //     this.lock.alpha = 0.6
        // }
        this.inputEnabled =! this.inputEnabled;
    }
}

// Roadsigns
class Sign extends Phaser.Sprite {
    constructor(location, label){
        super(game,  location.x + 32, location.y - 54, 'sign');
        this.style = {
          'font': '20px Arial',
          'fill': 'black'
        };
        this.anchor.setTo(0.5, 0);
        this.label = new Phaser.Text(game, 0, 0, label, this.style);
        //puts the label in the center of the button
        this.label.anchor.setTo(0.5, -0.7);
        this.addChild(this.label);
        this.setLabel(label); //adds button to game
        game.add.existing(this);
        this.scale.set(1, .75)

        this.markerone = game.add.sprite(location.x, location.y, 'roadmarker')
        this.markertwo = game.add.sprite(location.x, location.y + 64, 'roadmarker')
    }
    setLabel(label) {
        this.label.setText(label);
    }
}

// The graphs
class Graph extends RGraph.Line {
    constructor(ylabel, playerone, playertwo, id) {

        var data = [new Array(30), new Array(30)]
        if (id == "posgraph") {
            var graphdata = [positionData(playerone), positionData(playertwo)];
            var stepped = false;
        } else if (id == "velgraph") {
            var graphdata = [velocityData(playerone), velocityData(playertwo)];
            var stepped = true;
            enableArrows()
        } else {};

        var background = new RGraph.Drawing.Background({
            id: id,
            options: {
                gutterLeft: 30,
                // gutterRight: 35,
                // gutterTop: 35,
                gutterBottom: 30,
                backgroundGridAutofitNumvlines: 6,
                backgroundGridAutofitNumhlines: 12,
                // backgroundGridColor: '#eee',
                backgroundGridDotted: true,
                backgroundColor: '#88c',
            }
        }).draw();

        var line = super({
            id: id,
            data: data,
            options: {
                colors: ['#'+playerone.color.toString(16), '#'+playertwo.color.toString(16)],
                linewidth: 2,
                // colorsAlternate: true,
                // tickmarks: 'tick',
                shadow: false,
                adjustable: false,
                outofbounds: false,
                ylabelsCount: 6,
                // xlabelsCount: 6,
                // backgroundColor: '#88c',
                labels: ['0', '5', '10','15','20' ,'25', '30'],
                numxticks: 30,
                numyticks: 6,
                ymax: 60,
                ymin: 0,
                titleXaxis: "Time (s)",
                titleXaxisSize: 11,
                titleYaxis: ylabel,
                titleYaxisSize: 8,
                titleYaxisX: 4,
                ylabelsOffsetx: 2,
                gutterLeft: 30,
                stepped: stepped,
                backgroundGridAutofitNumhlines: 6,
                // numticks: 2
                // adjustable: true
            }
        })

        this.line = line
        this.id = id
        this.data = data
        this.graphdata = graphdata
        this.background = background

        this.line.draw();
        

        function positionData(player) {
            var posdata = []
            for (var i = 0; i <= player.delay; i++) {
                posdata.push(0);
            }
            var position = 0
            for (var i = player.delay + 1; i <= 30; i++) {
                position += player.speed
                posdata.push(position);
                if (position >= 60) {
                    var arr = new Array(30-i);
                    // arr.fill(60)
                    posdata = posdata.concat(arr);
                    player.maxTime = i
                    i = 31;
                    // console.log(player.maxTime)
                    }
            }
            return posdata;
        }
        this.positionData = positionData
        function velocityData(player) {
            var veldata = []
            for (var i = 0; i < player.delay; i++) {
                veldata.push(0);
            }
            // for (var i = player.delay; i <= 30; i++) {
            //     veldata.push(player.speed);
            // }

            for (var i = player.delay; i <= player.maxTime; i++) {
                veldata.push(player.speed);
            }
            for (var i = player.maxTime; i <= 30; i++) {
                veldata.push(null);
            }

            return veldata;
        }
        this.velocityData = velocityData
        this.counter = 0

        function enableArrows() {

        }

    }

    fullGraph() {
        if (this.id == "posgraph") {
            if (game.level  == 7) {
                this.graphdata = [new Array(30),
                this.positionData(playertwo),];
            } else {
                this.graphdata = [this.positionData(playerone),
                this.positionData(playertwo)];
            }
        }
        else if (this.id == "velgraph") {
            this.graphdata = [this.velocityData(playerone),
            this.velocityData(playertwo)];
        } else { console.log('graph error') };

        if (game.level != 3 && game.level != 4) {
            this.line.original_data[0] = this.graphdata[0]
            this.line.original_data[1] = this.graphdata[1]
            this.redraw()
        } else {
            this.line.original_data[0] = new Array(30)
            this.line.original_data[1] = new Array(30)
            this.redraw()
        }
    }

    liveGraph() {
        
        this.updateLine(); // once for t=0
        this.updateLine(); // once because setinterval doesn't fire until the delay
        this.plotter = setInterval(this.updateLine.bind(this), 1000)
        }
        

    updateLine() {
            if (this.counter <= 30) {
                this.line.original_data[0][this.counter] = this.graphdata[0][this.counter]
                this.line.original_data[1][this.counter] = this.graphdata[1][this.counter]
                this.redraw()
                this.counter++;
            }
        }


    redraw() {
            RGraph.clear(this.line.canvas)
            this.background.draw()
            this.line.draw()
        }

     resetGraph() {
        clearInterval(this.plotter)
        RGraph.clear(this.line.canvas)

    }
}


// The up/down arrows which allow control of the graph
class GraphControl extends Phaser.Sprite {
    constructor(x,y){
        super(game, x, y - 6, 'arrows');
        game.add.existing(this);

        this.inputEnabled = true;
        this.input.useHandCursor = true;
        var _this = this
        this.events.onInputDown.add(function(e){
            // Get the position of the mouse and determine which arrow was clicked
            var arrow = Math.floor((game.input.mousePointer.y - y) / 64);
            if (arrow) {
                _this.index = playertwo.speeds.indexOf(playertwo.speed)
                playertwo.speed = playertwo.speeds[(((_this.index - 1) % playertwo.speeds.length) + playertwo.speeds.length) % playertwo.speeds.length ]
            } else {
                _this.index = playertwo.speeds.indexOf(playertwo.speed)
                playertwo.speed = playertwo.speeds[(_this.index + 1) % playertwo.speeds.length ]
            }

            velgraph.fullGraph()
            posgraph.fullGraph()
            playertwo.lever.updateText(playertwo)
        })
    }
}

// Upper left button which shows level and allows level nagivation
class LevelIndicator {
    constructor(x,y) {

        this.text = new TextBox(x,y, -30, 0.9, 0.5, "Level: " + game.level, {
                font: "19px Arial",
                fill: "#ffffff",
            })
        this.text.visible = false; // makes the backplate invisible

        this.button = new TextBox(
            Math.ceil(this.text.centerX),
            Math.ceil(this.text.centerY + 10),
            1, .7,.2, 'Change Your Level', {
            font: '16px Arial',
            fill: '#000',
            });
        this.button.tint = 0xADD8E6
        this.button.alpha = 0.7

        this.button.inputEnabled = true;
        this.button.input.useHandCursor = true;
        this.button.events.onInputUp.add(function () {
            posgraph.resetGraph()
            velgraph.resetGraph()
            playerone.resetDelay()
            playertwo.resetDelay()
            clearInterval(promptBox.wiggler)
            game.progress = 0
            if (game.level == 6) { document.getElementById('velgraph-ctr').style="position:absolute; left:0px;"}
            document.getElementById('graphs').style.display = "none"
            game.state.start("LevelSelect");
        });
        this.button.events.onInputOver.add(function(){
            // this.button.scale.setTo(1.1, 0.55)
            this.button.tint = 0x8aacb8
        }, this);
        
        this.button.events.onInputOut.add(function(){
            // this.button.scale.setTo(1, 0.5)
            this.button.tint = 0xADD8E6
        }, this);
        
    }
}


class ProgressIndicator extends Phaser.Sprite {
    constructor(x,y){
        super(game,x,y,'stars');
        game.add.existing(this);

        if (typeof game.progress === 'undefined') {
            game.progress = 0
        }

        this.scale.set(.5)

        this.frame = game.progress
        this.finished = false
    }

    updateProgress() {
        if (!this.finished) {
            var _this = this
            if (game.progress < 2) {
                game.progress++
                this.frame = game.progress
                this.flipper = -1
                this.blink = setInterval(function(){
                    _this.frame += _this.flipper
                    _this.flipper *= -1
                }, 150)
                setTimeout(function(){
                    clearInterval(_this.blink)
                    _this.frame = game.progress
                }, 1500)


            } else {
                this.frame = 3
                game.progress = 0
                
                game.level++
            }
            
            promptBox.updatePrompt()
            this.finished = true;
        }

    }

}

// Little picture of a player avatars & colors
class Legend {
    constructor(x,y){
        this.minimouse = game.add.sprite(x, y, 'minimouse')
        this.minimouse.scale.set(1.7)
        this.mouseline = this.draw(x + 40, y, '#544', false)

        this.minicat = game.add.sprite(x, y+30,'minicat')
        this.minicat.scale.set(1.7)
        this.catline = this.draw(x + 40, y + 30, '#ADD8E6', true)

    }
    toggleHide() {
        this.minicat.visible = !this.minicat.visible
        this.catline.visible = !this.catline.visible
        this.minimouse.visible = !this.minimouse.visible
        this.mouseline.visible = !this.mouseline.visible

    }
    draw(x, y, color, dashed) {
          var bmd = game.add.bitmapData(30,30);
          bmd.ctx.beginPath();
          bmd.ctx.lineWidth = "2";
          bmd.ctx.strokeStyle = color;
          if (dashed) {bmd.ctx.setLineDash([3])}
          bmd.ctx.moveTo(0, 15);
          bmd.ctx.lineTo(30 , 15);
          bmd.ctx.stroke();
          bmd.ctx.closePath();
          return game.add.sprite(x, y, bmd);
    }
}

class Prompt extends TextBox{
    constructor(x,y) {
        super(x,y, 0, 3, .5, game.prompt[game.level], {
          'font': '20px Arial',
          'fill': 'white',
          'wordWrap': true,
          'wordWrapWidth': 620,
        })
        this.tint = '0x0b4f6c'

        this.makeGoButton(x,y)
        // this.replay_button = new LabelButton(game, 200, 150, 'buttons', "Replay",  this.resetGame, this, 2, 1, 0)


        this.indicator = new ProgressIndicator(x+245,y+25)
        this.indicator.visible = false

    }
    doBtnStartHandler() {  //when the game starts
        levelIndicator.button.inputEnabled = false;
        if (game.level == 3 || game.level == 4) {
            document.getElementById('graphs').style.display = "inline";
            legend.toggleHide()
            posgraph.liveGraph()
            velgraph.liveGraph()
        }
        if (game.level == 4) {
            playertwo.delayController.plus.inputEnabled = false
            playertwo.delayController.minus.inputEnabled = false
        }
		playerone.fakeMove();
        playertwo.fakeMove();
        betButton.inputEnabled = false;
        betButton.toggleEnabled()
        console.log(this.wiggler)
        clearInterval(this.wiggler)
		this.go_button.visible = false;
        if (game.level != 4 && game.level != 5) { 
            playertwo.lever.inputEnabled = false
        } else if (game.level == 5) {
            graphControl.inputEnabled = false
        }
	}

    makeGoButton(x,y) {
        // if (this.text.lines.length == 1 ) {
        //     this.goXScale = this.text.lines[0].length/70
        // } else {
        //     this.text.lines = this.text.lines.sort(function(a, b){
        //         return a.length - b.length;
        //     });
        //     this.goXScale = this.text.lines[0].length/this.text.lines[this.text.lines.length - 1].length
        // }
        // console.log(this.text.lines)
        // if (this.text.lines.length)
        // y += 10 * (this.text.lines.length - 1)
        this.go_button = new LabelButton(game, this.centerX, y+37, 'buttons', "Go!", this.doBtnStartHandler, this, 2, 1, 0); // button frames 1=over, 0=off, 2=down
        this.go_button.scale.set(.7)
        // this.go_button.x = this.left + this.width*this.goXScale + 10
        // this.go_button.x += (this.centerX - this.go_button.x)*.05
        // if (this.go_button.x < this.centerX ) { this.go_button.x *= 1.5}
        this.wiggle()
    }
    wiggle() {
        var _this = this
            // console.log(this)
        _this.angleIncrement = .15
        _this.angleValue = 0
        _this.wiggler = setInterval(function(){
                _this.angleValue += _this.angleIncrement
                promptBox.go_button.angle = _this.angleValue
                if (promptBox.go_button.angle > 2.5) {
                _this.angleIncrement *= -1
                } else if (promptBox.go_button.angle < -2.5) {
                    _this.angleIncrement *= -1
                }

            }, 50)

    }



    nextGame() {
        document.getElementById('graphs').style.display = "none";
        if (game.level == 5 && game.progress > 2) {
            document.getElementById('velgraph-ctr').style="position:absolute; left:-430px;"
        } else if (game.level == 6 && game.progress > 2) {
            document.getElementById('velgraph-ctr').style="position:absolute; left:0px;"
        }
        if (game.level >= 8) {
            
            game.state.start("Ending");
        } else {
            posgraph.resetGraph()
            velgraph.resetGraph()
            playerone.resetDelay()
            playertwo.resetDelay()
            // this.indicator.finished = false;
            game.ontime = null
            game.slow = null
            game.fast = null
            game.state.restart(true, false)
        }
    }

    resetGame() { //reset delay too asdf
        this.reset_button.visible = false

        this.indicator.visible = false

        resetPlayer(playerone)
        resetPlayer(playertwo)

        posgraph.counter = 0
        clearInterval(posgraph.plotter)
        velgraph.counter = 0
        clearInterval(velgraph.plotter)

        betButton.finished = false;
        betButton.betButton.inputEnabled = true;
        betButton.betButton.finished = false;
        betButton.betButton.frame = 0;
        this.alsofinished = false
        if (betButton.betButton.label != null) {
            betButton.betButton.label.destroy()
            betButton.betButton.feedbackFrame.destroy()
        }

        game.ontime = null
        game.slow = null
        game.fast = null

        promptBox.text.text.destroy()

        if (game.level == 4 ) {
            playertwo.delayController.plus.inputEnabled = true
            playertwo.delayController.minus.inputEnabled = true
        }

            
        if (game.level != 4) {
            playertwo.text.destroy()
            playertwo.text = game.add.text(playertwo.x - 96 + 18, playertwo.y + 16, "Delay:\n" + playertwo.delay + " s", {
                font: "18px Arial",
                fill: "#000",
                align: "left"
            });
        }

        if (game.level == 3) {
            document.getElementById('graphs').style.display = "none";
            legend.toggleHide()


        }


        this.text = new CenteredText(this, 0, game.prompt[game.level], {
          'font': '20px Arial',
          'fill': 'white',
          'wordWrap': true,
        })
        clearInterval(promptBox.wiggler)
        this.makeGoButton(this.x,this.y)
        if (game.level != 4 && game.level != 5 ) { playertwo.lever.inputEnabled = true }
        if (game.level == 5 ) { graphControl.inputEnabled = false }


        function resetPlayer(player) {
            player.animations.stop(null, true);
            // player.body.velocity.x = 0;
            clearInterval(player.motion)
            player.resetDelay()
            player.x = 113
        }

    }

    blinkIndicator() {
        var _this = this
        _this.blink = setInterval(function(){
                _this.indicator.visible =! _this.indicator.visible;
            }, 500)

    }

    updatePrompt() {

        if (!this.alsofinished) {
            this.text.text.destroy()
            // this.go_button.visibile = false
            levelIndicator.button.inputEnabled = true;
            if (game.ontime) {
                this.feedback = 'You caught the mouse!'
                this.next_button = new LabelButton(game, this.x+100, this.y + 30, 'buttons', "Next", this.nextGame, this, 2, 1, 0);
                this.next_button.scale.set(.7)
                this.result = 'correct'
            } else {
                this.feedback = 'Hmmm…the Cat didn’t finish at the same time as the mouse. Try again. Click'
                this.reset_button = new LabelButton(game, this.x+100, this.y + 30, 'buttons', "Reset", this.resetGame, this, 2, 1, 0);
                this.reset_button.scale.set(.7)
                this.result = 'incorrect'
            }

            game.report('go_click_result', {
                    'result': this.result,
                    'level': game.level,
                    'cat_speed': playertwo.speed,
                    'cat_delay': playertwo.delay,
                    'mouse_speed': playerone.speed,
                    'mouse_delay': playerone.delay,
                    'level_progress': game.progress,
                })

            this.text = new CenteredText(this, 0, this.feedback, {
            'font': '20px Arial',
            'fill': 'white',
            'wordWrap': true,
            })

            if (game.progress == 0 && promptBox.indicator.frame == 0) {

            } else {
                this.indicator.visible = true
            }

        }
        this.alsofinished = true


    }
}


class DelayController extends TextBox {
    constructor(x,y) {
        super(x,y, -15, .45, .35, 'Cat Delay Controller', {
          'font': '15px Arial',
          'fill': 'white',
          'wordWrap': true,
        })
        this.tint = '0xc04a6c'
        this.minicat = game.add.sprite(x+30, y-40, 'minicat')
        // this.hourglass = game.add.sprite(x-50, y-40,'hourglass')
        // this.hourglass.scale.set(.5)
        this.displayStyle = {
                'font': '15px Arial',
                'fill': 'black',
                'wordWrap': false,
            }
        this.delayDisplay = new TextBox(x,y+15, 0, .22, .10,  playertwo.delay + ' sec', this.displayStyle )
        this.delayDisplay.tint = '0xc0f06d'

        this.minus = game.add.sprite(x-40,y + 15,'minus')
        this.minus.anchor.set(.5)
        this.minus.scale.set(.8)
        this.plus = game.add.sprite(x+40,y + 15,'plus')
        this.plus.anchor.set(.5)
        this.plus.scale.set(.8)

        var _this = this
        this.minus.inputEnabled = true;
        this.plus.inputEnabled = true

        this.plus.events.onInputUp.add(function(){
            playertwo.index = playertwo.delays.indexOf(playertwo.delay)
            if (playertwo.delay == playertwo.delays[playertwo.delays.length - 1]) {
                
            } else {
                playertwo.delay = playertwo.delays[(playertwo.index + 1) % playertwo.delays.length ]
            }
            _this.delayDisplay.text.text.destroy()
            _this.delayDisplay.text = new CenteredText(_this.delayDisplay, 0, playertwo.delay + ' sec', _this.displayStyle)
            posgraph.fullGraph()
            velgraph.fullGraph()
        })

        this.minus.events.onInputUp.add(function(){
            playertwo.index = playertwo.delays.indexOf(playertwo.delay)
            if (playertwo.delay == playertwo.delays[0]) {

            } else {
                playertwo.delay = playertwo.delays[(playertwo.index - 1) % playertwo.delays.length ]
            }
            _this.delayDisplay.text.text.destroy()
            _this.delayDisplay.text = new CenteredText(_this.delayDisplay, 0, playertwo.delay + ' sec', _this.displayStyle)
            posgraph.fullGraph()
            velgraph.fullGraph()
        })

        // this.sprite = game.add.sprite(playertwo.x - 105, playertwo.y + 16,'minicat')
        // this.sprite.scale.set(1.3)
        this.text = game.add.text(playertwo.x - 80, playertwo.y + 18, "Speed:\n" + playertwo.speed + " m/s", {
            font: "18px Arial",
            fill: "#FFF",
            align: "left"
		});


     }
}



class Pointer extends Phaser.Sprite {
    constructor(obj) {
        super(game,obj.x,obj.y-100,'pointer');
        game.add.existing(this);
        this.anchor.set(.5)
        this.angle = 20;
        game.world.bringToTop(this)
        this.getAttention()
        this.state = game.state.getCurrentState()
        if ( this.state.key == "PlayLevel") {
            var _this = this;
            playLevel.input.onDown.add(function() {
                    clearInterval(_this.blink)
                    clearInterval(_this.grow)
                    _this.destroy()
                }, playLevel)
        }

    }

    getAttention() {
        var _this = this
        // _this.blink = setInterval(function(){
        //         _this.visible = !_this.visible;
        //     }, 500)

        _this.scaleIncrement = .01
        _this.scaleValue = 1
        _this.grow = setInterval(function(){
                _this.scaleValue += _this.scaleIncrement
                _this.scale.set(_this.scaleValue)
                if (_this.scale.x > 1.09) {
                   _this.scaleIncrement *= -1
                } else if (_this.scale.x < 0.91) {
                    _this.scaleIncrement *= -1
                }
            }, 50)
        _this.flipper = true
        _this.blink = setInterval(function(){
            if (_this.flipper) {
                _this.tint = 0xFF9999
            } else { 
                _this.tint = 0xFFFFFF 
            }
            // console.log(_this.tint)
            _this.flipper =! _this.flipper
            
        }, 220)

    }

} 
