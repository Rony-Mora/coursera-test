//step10: main script that uses helloSpeaker and byeSpeaker

(function() {
  var names = ["Yaakov","John","Jen","Jason","Paul","Frank","Larry","Paula","Laura","Jim"];

  //loop over the array of names
  for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase();

    // if first letter is 'j' -> say Goodbye, else Hello
    if (firstLetter === 'j') {
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }

})();

