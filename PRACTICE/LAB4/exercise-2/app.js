

const say = require('say')

// Use default system voice and speed 
say.speak('Hello! Tam')

// Stop the text currently being spoken 
say.stop()

// More complex example (with an OS X voice) and
// slow speed
say.speak("Hello?", null, 0.5) 

var sorryDave = function() {
    say.speak("I'm sorry, Dave.", null, 0.74);
}

setTimeout(sorryDave, 5000);