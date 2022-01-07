let mathLib = require('./lib/math');
let jokesLib = require('./lib/jokes');


let app = {}

app.config = {
    'timeBtwnJokes' : 1000
}

app.printAjoke = function (){

    let jokes = jokesLib.allJokes();

    let numOfJokes = jokes.length;

    let randomNum = mathLib.getRandomNum(1, numOfJokes);

    let selecedJoke = jokes[ randomNum - 1];
    
    console.log(selecedJoke);
}

app.indefiniteLoop = function (){

    setInterval(app.printAjoke, app.config.timeBtwnJokes);
}

app.indefiniteLoop();