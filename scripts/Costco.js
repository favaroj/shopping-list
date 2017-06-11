var costcoRef = firebase.database().ref('Lists/Costco');
var costcoList = document.getElementById("costcoList");

document.getElementById("addItemCostco").addEventListener('click', function() {
		var itemName = document.getElementById("itemName").value.trim();
		if(itemName.length > 0) {
			saveToFB(itemName);
			var li = "<li>" + itemName + "<li>";
			costco.innerHTML += li;
		}
		document.getElementById("itemName").value = "";
		alert(" " + itemName + " has been added!");
		location.reload();
}, false);

function saveToFB(itemName) {
	// save data to Costco Firebase
	costcoRef.push({
		title: itemName
	});
	document.getElementById("itemName").value = "";
};

function refreshList(list, element) {
	var ls = '';
	for (var i = 0; i < list.length; i++) {
		ls += '<li data-key="' + list[i].key + '">' + list[i].title + ' ' + genLinks(list[i].key, list[i].title) + '</li>';
	};
	/*document.getElementById('costcoList').innerHTML = ls;*/
	/*document.getElementById('cannedList').innerHTML = ls;*/
	document.getElementById(element).innerHTML = ls;
};

function genLinks(key, itName) {
    var links = '';
    links += '<a id="editBtn" href="javascript:edit(\'' + key + '\',\'' + itName + '\')">Edit</a> | ';
    links += '<a id="deleteBtn" href="javascript:del(\'' + key + '\',\'' + itName + '\')">Delete</a>';
    return links;
};

function edit(key, itName) {
    var itemName = prompt("Update the item name", itName);
    if (itName && itemName.length > 0) {
        // Build the FireBase endpoint to the item
        var updateCostcoRef = buildEndPoint(key);
        updateCostcoRef.update({
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
	var costcoEnd = firebase.database().ref('Lists/Costco').child(key);
	location.reload();
	return costcoEnd;
}

// this will get fired on inital load as well as when ever there is a change in the data
costcoRef.on("value", function(snapshot) {
	var data = snapshot.val();
  var list = [];
	var element = 'costcoList';
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
