//import * as firebase from 'firebase';
/*
var firebase = require('firebase');
require(['require', 'firebase'], function (require) {
    var firebase = require('firebase');
});
*/
var amazonRef = firebase.database().ref('Lists/Amazon');

document.getElementById("addItem").addEventListener('click', function() {
	//if(event.which == 13 || event.keyCode ==13) {
		var itemName = document.getElementById("itemName").value.trim();
		if(itemName.length > 0) {
			saveToFB(itemName);
			var li = "<li>" + itemName + "<li>";
			document.getElementById("amazonList").innerHTML += li;
		}
		document.getElementById("itemName").value = "";
		alert(" " + itemName + " has been added!");
		location.reload();
	//}
}, false);

function saveToFB(itemName) {
	// save data to Amazon Firebase
	amazonRef.push({
		title: itemName
	});
};

function refreshList(list) {
	var ls = '';
	for (var i = 0; i < list.length; i++) {
		ls += '<li data-key="' + list[i].key + '">' + list[i].title + ' ' + genLinks(list[i].key, list[i].title) + '</li>';
	};
	document.getElementById('amazonList').innerHTML = ls;
};

function genLinks(key, itName) {
    var links = '';
    links += '<a id="editBtn" href="javascript:edit(\'' + key + '\',\'' + itName + '\')">Edit</a> | ';
    links += '<a id="deleteBtn" href="javascript:del(\'' + key + '\',\'' + itName + '\')">Delete</a>';
    return links;
};

function edit(key, itName) {
    var itemName = prompt("Update the item name", itName); // to keep things simple and old skool :D
    if (itemName && itemName.length > 0) {
        // build the FB endpoint to the item in movies collection
        var updateAmazonRef = buildEndPoint(key);
        updateAmazonRef.update({
            title: itemName
        });
    }
}

function del(key, itName) {
    var response = confirm("Remove \"" + itName + "\" from the list?");
    if (response == true) {
        // build the FB endpoint to the item in movies collection
        var deleteItemRef = buildEndPoint(key);
        deleteItemRef.remove();
    }
}

function buildEndPoint(key) {
	var amazonRef = firebase.database().ref('Lists/Amazon').child(key);
	location.reload();
	return amazonRef;
}

// this will get fired on inital load as well as when ever there is a change in the data
amazonRef.on("value", function(snapshot) {
	var data = snapshot.val();
  var list = [];
  for (var key in data) {
  	if (data.hasOwnProperty(key)) {
    	title = data[key].title ? data[key].title : '';
      if (title.trim().length > 0) {
      	list.push({
        	title: title,
          key: key
        })
      }
    }
  }
  // refresh the UI
  refreshList(list);
});
/*
var amazonRef = 'Lists/Amazon';
var itemsRef = firebase.database().ref(amazonRef);
itemsRef.on("value", function(snapshot){
	amazonList.innerText = snapshot;
	window.alert(snapshot);
});
*/
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

function setDate() {
	var date = new Date();
	document.getElementById("date").innerHTML = date.toLocaleString();//.toDateString();
	alert(date);
}
setDate();

function setAmazonFireBase() {
	var amazonRef = 'Lists/Amazon';
	var itemsRef = firebase.database().ref(amazonRef);
	itemsRef.on("value", function(snapshot){
		amazonList.innerText = snapshot;
		alert(snapshot);
	});

}
setAmazonFireBase();

var walmartClick = document.querySelector(".walmart");
walmartClick.onclick = function() {
	window.location.href = "Walmart/WalmartMain.html";
	alert("Walmart Clicked!");
	///home/john/ShoppingList_Web/Walmart/WalmartMain.html
}

function amazonClick() {
	var amazon = document.querySelector(".amazon");
	window.location.href = 'Amazon.html';
	alert("Amazon Clicked!");
}

/*
var amazonClick = document.querySelector(".amazon");
amazonClick.onclick = function() {
	window.location.href = "Amazon.html";
	alert("Amazon Clicked!");
	///home/john/ShoppingList_Web/Walmart/WalmartMain.html
}
*/

function rossClick() {

}

function costcoClick() {

}

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
