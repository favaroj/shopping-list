const nonFoodRef = firebase.database().ref('Lists/Walmart/Non Food');
const nonFoodList = document.getElementById("nonFoodList");


document.getElementById("addItemNonFood").addEventListener('click', function() {
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
	// save data to NonFood Firebase
	nonFoodRef.push({
		title: itemName
	})
};

function refreshList(list, element) {
	var ls = '';
	for (var i = 0; i < list.length; i++) {
		ls += '<li data-key="' + list[i].key + '">' + list[i].title + ' ' + genLinks(list[i].key, list[i].title) + '</li>';
	};
	/*document.getElementById('amazonList').innerHTML = ls;*/
	/*document.getElementById('nonFoodList').innerHTML = ls;*/
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
    if (itemName && itemName.length > 0) {
        // Build the FireBase endpoint to the item
        var updateNonFoodRef = buildEndPoint(key);
        updateNonFoodRef.update({
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
	var nonFoodRef = firebase.database().ref('Lists/Walmart/Non Food').child(key);
	location.reload();
	return nonFoodRef;
}

// This will get fired on inital load as well as whenever there is a change in the data.
nonFoodRef.on("value", function(snapshot) {
	var data = snapshot.val();
  var list = [];
	var element = 'nonFoodList';
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
