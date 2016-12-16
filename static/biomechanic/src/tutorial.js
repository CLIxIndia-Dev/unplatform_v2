tutorial = {
    preload: function() {

        game.stage.backgroundColor = '0x889';
        game.scale.setUserScale(.85, .85, 0, 0)
        game.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
        
    },
  
    create: function() {
        
        stage = game.add.image(0, 0, 'stage');
        cat = game.add.sprite(113, 242, 'cat')
        cat.animations.add('run');
        // catspeech = game.add.sprite(cat.x + 50, cat.y  , 'speech')
        // catspeech.anchor.set(0.02, .75)
        // catspeech
        
        mouse = game.add.sprite(113, 178, 'mouse')
        mouse.animations.add('run');
        // mousespeech = game.add.sprite(mouse.x + 50, mouse.y, 'speech')
        mouse.animations.play('run', 8, true);
        setTimeout(function() {
            mousespeech = new SpeechBubble(mouse.x, mouse.y, "You can't catch me!")
            
            
            setTimeout(function(){
                    mousespeech.toggle()
                    
                    var mouserun = setInterval(function(){
                        mouse.x += 3
                        if (mouse.x > 710) {
                            clearInterval(mouserun)
                            mouse.animations.stop(null, true);
                            catspeech = new SpeechBubble(cat.x, cat.y, "Hmmmmm")
                            tutorialbutton = new LabelButton(game, w/2 + 150, h*4/5, 'buttons', "Next", 
                                steptwo, this, 2, 1, 0);                            
                        }
                    }, 2)
                }, 3000);
        }, 2000);
        // tutorial.input.onDown.add(function() {
        //     game.state.start("LevelSelect")
        // }, tutorial)
        var steptwo = function() {
            // stage.destroy()
            // cat.destroy()
            // mouse.destroy()
            tutorialbutton.destroy()
            catspeech.destroy()
            mousespeech.destroy()
            tutorialtext = new TextBox(w*2/5,h*3/5, 0, 1.4, 0.3, "Help your cat catch the mouse...", {
                font: "25px Arial",
                fill: "#ffffff",
            })
            tutorialtext.tint = 0x0b4f6c
            
            tutorialbutton = new LabelButton(game,  w/2 + 150, h*4/5, 'buttons', "Next", 
                            stepthree, this, 2, 1, 0); 
        }
        var stepthree = function() {
            tutorialbutton.destroy()
            stage.visible = false;
            cat.visible = false;
            mouse.visible = false;
            mouse.x = cat.x
            tutorialtext.destroy()
            tutorialtext.text.text.destroy()
            
            // game.state.start("LevelSelect")
            var tutoriallever = game.add.sprite(w/5, h*2/3 - 50, 'tutorial_lever')
            tutoriallever.anchor.set(.5)
            tutoriallever.scale.set(1.1)
            tutoriallever.animations.add('animate')
            tutoriallever.animations.play('animate', 2, true)

            tutorialtext = new TextBox( tutoriallever.centerX , tutoriallever.centerY - 300, 0, 1.2, 0.4, "You can change her velocity", {
                font: "25px Arial",
                fill: "#ffffff",
            })
            tutorialtext.tint = 0x0b4f6c
            tutorialpointer = new Pointer({'x':tutorialtext.x,'y':tutorialtext.y + 240} )
            tutorialpointer.angle = 0
            
            tutorialbutton = new LabelButton(game, w/2 + 150, h*4/5, 'buttons', "Next", 
                function(){
                    tutoriallever.animations.stop(null, true);
                    stepfour()
                }, this, 2, 1, 0); 
            }
        var stepfour = function() {
            tutorialbutton.destroy()
            tutorialtext.destroy()
            tutorialtext.text.text.destroy()
            var tutorialdelay = game.add.sprite(w*2/5 + 20, h*2/3 - 100, 'tutorial_delay')
            tutorialdelay.scale.set(1.1)
            tutorialdelay.anchor.set(.5)
            tutorialdelay.animations.add('animate')
            tutorialdelay.animations.play('animate', 2, true)
            
            tutorialtext = new TextBox(tutorialdelay.centerX , tutorialdelay.centerY - 300, 0, 1.2, 0.4, "Adjust her delay", {
                font: "25px Arial",
                fill: "#ffffff",
            })
            tutorialtext.tint = 0x0b4f6c
            tutorialpointer.destroy()
            tutorialpointer = new Pointer({'x':tutorialtext.x,'y':tutorialtext.y + 240} )
            tutorialpointer.angle = 0
            
            tutorialbutton = new LabelButton(game, w/2 + 150, h*4/5, 'buttons', "Next", 
                function(){
                    tutorialdelay.animations.stop(null, true);
                    stepfive()
                }, this, 2, 1, 0); 
            
        }
        var stepfive = function() {
            tutorialbutton.destroy()
            tutorialtext.destroy()
            tutorialtext.text.text.destroy()
            var tutorialgraph = game.add.sprite(w*3/5 + 180, h*2/3 - 80, 'tutorial_graph')
            tutorialgraph.anchor.set(.5)
            tutorialgraph.scale.set(1.1)
            tutorialgraph.animations.add('animate')
            tutorialgraph.animations.play('animate', 2, true)
            tutorialtext = new TextBox(tutorialgraph.centerX , tutorialgraph.centerY - 300, 0, 1.2, 0.4, "Use graphs to help", {
                font: "25px Arial",
                fill: "#ffffff",
            })
            tutorialtext.tint = 0x0b4f6c
            tutorialpointer.destroy()
            tutorialpointer = new Pointer({'x':tutorialtext.x,'y':tutorialtext.y + 240} )
            tutorialpointer.angle = 0
            
            tutorialbutton = new LabelButton(game,  w/2 + 150, h*4/5, 'buttons', "Next", 
                function(){
                    tutorialgraph.animations.stop(null, true);
                    stepsix()
                }, this, 2, 1, 0); 
            
        }
        var stepsix = function() {
            tutorialbutton.destroy()
            stage.visible = true;
            game.world.bringToTop(stage)
            game.world.bringToTop(cat)
            game.world.bringToTop(mouse)
            cat.visible = true
            mouse.visible = true
            
            var tutorialbet = game.add.sprite(700, 50, 'tutorial_bet')
            tutorialbet.anchor.set(.5)
            tutorialtext.destroy()
            tutorialtext.text.text.destroy()
            tutorialtext = new TextBox(w/5 + 40, 70, 0, 1.2, 0.4, "And player 2:\nDon't forget to make a bet!", {
                font: "25px Arial",
                fill: "#ffffff",
            })
            tutorialtext.tint = 0x0b4f6c
            tutorialpointer.destroy()
            tutorialpointer = new Pointer({'x':tutorialtext.x + 250,'y':tutorialtext.y + 100} )
            tutorialpointer.angle = 270
            tutorialbutton = new LabelButton(game,  w/2 + 150, h*4/5, 'buttons', "Next", 
                stepseven, this, 2, 1, 0); 
        }
        var stepseven = function() {
            tutorialbutton.destroy()
            tutorialtext.destroy()
            tutorialtext.text.text.destroy()
            tutorialpointer.destroy()
            tutorialtext = new TextBox(w*2/5,h*2/3, 0, 2.3, 0.6, 
            "Each time the cat catches the mouse, you earn a star. 21 stars to be won - 3 in each level.\nNow let’s play! To continue, click", {
                font: "25px Arial",
                fill: "#ffffff",
            })
            tutorialtext.tint = 0x0b4f6c
            
            var stars = game.add.sprite(w/2, h/2, 'stars')
            stars.animations.add('animate')
            stars.animations.play('animate', 3, true)
            stars.anchor.set(.5)
            
            tutorialbutton = new LabelButton(game, w*2/5 + 170, h*2/3 + 48, 'buttons', "Go!", 
                function(){game.state.start("LevelSelect")}, this, 2, 1, 0); 
        }
    },
    
    update: function() {    
       
    }
      
};















