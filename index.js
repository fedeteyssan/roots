function responsiveNav() {
  var x = document.getElementById("my-nav");
  if (x.className === "topnav") {
     x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
  

setInterval(function() {
  var words = ['Ready', 'Creativity', 'Design', 'Experience', 'Agility', 'Efficient']; // Array of words to rotate
  var changingWord = document.getElementById('changing-word');
  var currentWord = changingWord.textContent;
  var currentIndex = words.indexOf(currentWord);
  var nextIndex = (currentIndex + 1) % words.length; // Calculate the index of the next word. The modulo returns the value on the left until it reaches the words array lenght, returning 0 and starting again.
  changingWord.textContent = words[nextIndex];
}, 2000); // Update every 2 seconds (adjust the interval as needed)

