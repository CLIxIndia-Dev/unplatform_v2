 
ending = {
    create: function() {
        document.getElementById('graphs').style.display = "none"
        stage = game.add.image(0, 0, 'ending');
        stage.alpha = .9
        this.header = game.add.text(w/2, h*5/7, 'Biomechanic!',{
            font: '70px Arial',
            fill: 'green',
            fontWeight: 'bold',
        })
        this.header.anchor.set(.5)
        this.header.angle = -13
        this.header.stroke = "#000";
        this.header.strokeThickness = 10;
        
		this.text = game.add.text(w/2, h*3/5, 'Nice work! You have completed the game.',{
            font: '44px Arial',
            fill: 'green',
        })
		this.text.anchor.set(.5)
        this.text.stroke = "#000";
        this.text.strokeThickness = 8;
        
        
		this.input.onDown.add(function () {
                game.state.start("LevelSelect");
            }, this)
    }
    
}