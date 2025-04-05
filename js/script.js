function init(){
  //add your javascrip between these two lines of code
  var button = document.getElementById('entrybutton'); 
  
  function showText() {
    var textbox = document.getElementById('entryinput');
    document.getElementById('textoutput').innerHTML = textbox.value;
    alert("Jakub Szymczak: " + textbox.value);
  }

  button.addEventListener('click', showText);
}
  window.addEventListener('load', init);