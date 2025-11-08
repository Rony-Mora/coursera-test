(function(window) {
  //step7: create the byeSpeaker object
  var byeSpeaker = {};

  //do not attach the speakWord variable to the object
  var speakWord = "Good Bye";

  //step8: attach the speak function to the object
  byeSpeaker.speak = function(name) {
    console.log(speakWord + " " + name);
  };

  //step9: expose byeSpeaker to the global scope
  window.byeSpeaker = byeSpeaker;

})(window);
