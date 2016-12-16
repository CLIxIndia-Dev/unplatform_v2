var w = 1024, h = 768;

var debug = false;

var game = new Phaser.Game(w, h, Phaser.CANVAS, '');

var playerone, playertwo, gem, gems, flags, button, betButton; //,buttonsprite;
var highlight, highlightframe
var cat, catspeech, mouse, mousespeech, tutorialbutton, tutorialtext, tutorialpointer, stage
var distance, indicator
var computerSpeed
var delay = 40

var leverBounds = new Array() //debug

var graphElement = document.getElementById('graphs')


game.prompt = new Array(7)

game.prompt[1] = "Make the cat reach the finish at the same time to catch the mouse. Move the Cat Throttle to adjust your cat's speed. Then click"
game.prompt[2] = "Look closely at the graphs to help you. Make the cat reach the finish at the same time to catch the mouse. Move the Cat Throttle to adjust your cat's speed. Then click"
game.prompt[3] = "Make the cat reach the finish at the same time to catch the mouse. Move the Cat Throttle to adjust your cat's speed. Then click"
game.prompt[4] = "Your cat’s speed is now fixed, but you can adjust your Cat Delay controller. Then click"
game.prompt[5] = "Make the cat reach the finish at the same time to catch the mouse. Adjust your cat's speed using the arrows. Then click"
game.prompt[6] = "Look closely at the velocity graph for clues to help your cat catch the mouse. Move the Cat Throttle to adjust your cat's speed. Then click"
game.prompt[7] = "Make the cat reach the target speed. Adjust the cat's line on the position graph. Then click"

game.loadJSONTilemap = function(url) {
            var request = new XMLHttpRequest();
            request.open('GET', url, false);  // `false` makes the request synchronous
            request.send(null);
            if (request.status === 200) {
              game.load.tilemap('MyTileMap', null, request.responseText, Phaser.Tilemap.TILED_JSON);
            }
        }

game.state.add("Loading", loading);
game.state.add("Tutorial", tutorial);
game.state.add("LevelSelect", levelSelect);
game.state.add("PlayLevel", playLevel);
game.state.add("Ending", ending);

game.state.start("Loading");