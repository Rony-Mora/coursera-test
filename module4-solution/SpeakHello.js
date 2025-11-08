// STEPs 2-5: Hello Speaker Module
(function(window) {
  //step3: create the helloSpeaker object
  var helloSpeaker = {};

  // do not attach the speakWord variable to the object
  var speakWord = "Hello";

  //step4: attach the speak function to the object
  helloSpeaker.speak = function(name) {
    console.log(speakWord + " " + name);
  };

  //step5: expose helloSpeaker to the global scope
  window.helloSpeaker = helloSpeaker;

})(window);

  
