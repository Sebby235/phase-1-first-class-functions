function runFiveMiles() {
    console.log("run");
}

function receivesAFunction(postRunActivity) {
    runFiveMiles();
    postRunActivity();
}

function returnsANamedFunction() {

function myNamedFunction() {

}
return myNamedFunction;
}

function returnsAnAnonymousFunction() {
    return function() {

    }
    }
