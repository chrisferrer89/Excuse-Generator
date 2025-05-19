window.onload = function() {
  var who = ['a one-eyed Cuban', 'Your mom', 'Don Francisco', 'Scarlett Johansson'];
  var action = ['squeezed', 'destroyed', 'milked', 'spit on'];
  var what = ['my sweet cat', 'my toilet', 'my nose', 'my knee'];
  var when = ['in my bathroom', 'while I was doing this project', 'during my morning affirmations', 'as I baked warm bagels'];

  function generateExcuse() {
    var w = who[parseInt(Math.random() * who.length)];
    var a = action[parseInt(Math.random() * action.length)];
    var wh = what[parseInt(Math.random() * what.length)];
    var wn = when[parseInt(Math.random() * when.length)];
    
    var sentence =  w + " " + a + " " + wh + " " + wn + ".";
    return sentence;
  }

  var excuse = generateExcuse();
  document.getElementById("excuse").innerHTML = "<strong>" + excuse + "</strong>";
};