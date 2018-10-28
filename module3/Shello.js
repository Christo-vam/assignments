(function(window) {
    var Shello = new Object();
    var speakWord = "Hello";
    Shello.speak = function(name) {
        console.log(speakWord + " " + name);
    };
    window.Shello = Shello;
})(window);