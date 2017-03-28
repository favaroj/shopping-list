/* Set text with js
var mainPageHeading = document.querySelector(".main-header");
mainPageHeading.textContent = "Shopping List";
*/

/*
document.querySelector(".main-header").onclick = function mainHeaderClick() {
	alert("Already at Main Menu!");
}
*/
/*
var createPortal = document.getElementById('createPortal');
*/
var setNameButton = document.querySelector('createPortal');
var selectHeader = document.querySelector('h1');

function goToCreatePortal() {
	var userName = prompt('Please enter name.');
	localStorage.setItem('name', userName);
	selectHeader.innerHTML = userName + "'s Shopping List";
	//window.location.href='create-portal.html';
}

if(!localStorage.getItem('name')) {
	goToCreatePortal();
} else {
	var storedName = localStorage.getItem('name');
	selectHeader.innerHTML = storedName + "'s Shopping List";
}

setNameButton.onclick = function() {
	goToCreatePortal();
}

/*
createPortal.addEventListener('click', function(event) {
	window.location.href='create-portal.html';
});
*/



// Image switcher code
/*
var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute ('src','images/firefox2.png');
	} else {
	  myImage.setAttribute ('src','images/firefox-icon.png');
	}
}

// Personalized welcome message code

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
*/
