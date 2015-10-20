function parse() {
	var data = new XMLHttpRequest();
	var url = "http://messagehub.herokuapp.com/messages.json";
	data.onreadystatechange = function() {
		if (data.readyState == 4 && data.status == 200) {
			var myArr = JSON.parse(data.responseText);
			format(myArr);
		}
	}

	data.open('GET', url, true);
	data.send();
}

function format(arr) {
	var output = "<ul>";
	var i;
	for (i=0; i < arr.length; i++) {
		output+="<li>" + arr[i].content + " " + 
		     arr[i].username + "</li>";
	}
	output+="</ul>";
	document.getElementById("messages").innerHTML = output;
}