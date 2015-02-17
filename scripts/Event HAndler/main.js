var myHeading = document.querySelector('h1');
var myButton = document.querySelector('button');


myButton.onclick = function() {
  var myAge = prompt('Please enter your age.');
  localStorage.setItem('age', myAge);
  myHeading.innerHTML = 'Your Age is, ' + myAge;
  var obj = myAge;
  var lowval=18;
var hival=60;
  Validate(obj,lowval,hival);
}

 function Validate(obj,lowval,hival)
{
	if((obj<lowval)||(obj>hival))
	{
	alert("Invalid Value");
	}
}
var window = document.querySelector('body');
window.onfocus = function() {
   document.body.style.backgroundColor = 'white';
};
