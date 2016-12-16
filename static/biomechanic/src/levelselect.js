levelSelect = {
    create: function() {
            document.getElementsByTagName('body')[0].style="background-color:#E1E1F5;"
            game.stage.backgroundColor = 'rgb(225, 225, 245)';
            bkgnd = game.add.image(0, h - 564, 'levelselectscreen');
            logo = game.add.sprite(750, 420, 'logo');
            
            
            tutorialButton = new LevelButton(100, 150, 0)
            levelOneButton = new LevelButton(280, 150, 1)
            levelTwoButton = new LevelButton(100, 250, 2)
            levelThreeButton = new LevelButton(280, 250, 3)
            levelFourButton = new LevelButton(100, 350, 4)
            levelFiveButton = new LevelButton(280, 350, 5)
            levelSixButton = new LevelButton(100, 450, 6)
            levelSevenButton = new LevelButton(280, 450, 7)
    
            
    
            textBoxOne = new Description(390, 100, "You are a biomechanical engineer creating a robotic cat. Adjust your cat’s speed precisely to catch the target mouse. Pay attention -- the mouse always gets a head start.")
            textBoxTwo = new Description(390, textBoxOne.bottom + 30, "If there are two players, one player controls the cat. The other player places their bet predicting what they think will happen.\nGood Hunting!")

        }
};