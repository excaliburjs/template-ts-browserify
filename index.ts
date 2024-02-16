import * as ex from 'excalibur';

const game = new ex.Engine({ width: 500, height: 500, displayMode: ex.DisplayMode.FitScreenAndFill });

const hello = new ex.Label({
    text: 'Hello Browserify! 🧙‍♂️🪄',
    pos: game.screen.center,
    color: ex.Color.White,
    font: new ex.Font({
        family: 'Segoe UI Light',
        size: 50,
        textAlign: ex.TextAlign.Center
    })
});

game.add(hello);

game.start();