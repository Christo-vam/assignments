(function(window) {
    var Sbye = new Object();
    var speakWord = "Good Bye";
    Sbye.speak = function speak(name) {
        console.log(speakWord + " " + name);
    };
    window.Sbye = Sbye;
})(window);