/*
const amazonRef = firebase.database().ref('Lists/Amazon');
const cannedRef = firebase.database().ref('Lists/Walmart/Canned');
const amazonList = document.getElementById("amazonList");
const cannedList = document.getElementById("cannedList");


document.getElementById("addItemAmazon").addEventListener('click', function() {
		var itemName = document.getElementById("itemName").value.trim();
		if(itemName.length > 0) {
			saveToFB(itemName);
			var li = "<li>" + itemName + "<li>";
			amazon.innerHTML += li;
		}
		document.getElementById("itemName").value = "";
		alert(" " + itemName + " has been added!");
		location.reload();
}, false);

function saveToFB(itemName) {
	// save data to Amazon Firebase
	amazonRef.push({
		title: itemName
	});
	cannedRef.push({
		title: itemName
	})
};

function refreshList(list, element) {
	var ls = '';
	for (var i = 0; i < list.length; i++) {
		ls += '<li data-key="' + list[i].key + '">' + list[i].title + ' ' + genLinks(list[i].key, list[i].title) + '</li>';
	};
	/*document.getElementById('amazonList').innerHTML = ls;*/
	/*document.getElementById('cannedList').innerHTML = ls;*/
	document.getElementById(element).innerHTML = ls;
};
/*
function genLinks(key, itName) {
    var links = '';
    links += '<a id="editBtn" href="javascript:edit(\'' + key + '\',\'' + itName + '\')">Edit</a> | ';
    links += '<a id="deleteBtn" href="javascript:del(\'' + key + '\',\'' + itName + '\')">Delete</a>';
    return links;
};

function edit(key, itName) {
    var itemName = prompt("Update the item name", itName);
    if (itemName && itemName.length > 0) {
        // Build the FireBase endpoint to the item
        /*var updateAmazonRef = buildEndPoint(key);
        updateAmazonRef.update({
            title: itemName
        });*/
				/*
				var updateRef = buildEndPoint(key);
				updateRef.update({
					title: itemName
				});
    }
}
*/
/*
function del(key, itName) {
    var response = confirm("Remove \"" + itName + "\" from the list?");
    if (response == true) {
        // build the FB endpoint to the item in movies collection
        var deleteItemRef = buildEndPoint(key);
        deleteItemRef.remove();
    }
}

function buildEndPoint(key, refName) {
	var amazonRef = firebase.databas().ref('Lists/Amazon');
	if(refName == amazonRef) {
		refName = firebase.database().ref('Lists/Amazon').child(key);
		return refName;
	}

	var cannedRef = firebase.database().ref('Lists/Walmart/Canned').child(key);
	location.reload();

	return cannedRef;
}

// this will get fired on inital load as well as when ever there is a change in the data
amazonRef.on("value", function(snapshot) {
	var data = snapshot.val();
  var list = [];
	var element = 'amazonList';
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
  refreshList(list, element);
});

cannedRef.on("value", function(snapshot) {
	var data = snapshot.val();
  var list = [];
	var element = 'cannedList';
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
  refreshList(list, element);
});


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
/*
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
*/


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
