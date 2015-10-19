function parse() {
	var data = new XMLHttpRequest();
	data.overrideMimeType("application/json");
	data.open('GET', 'data.json', true);

	var output = "<ul>";
	for (var i in data.id) {
		output+="<li>" + data.id[i].content + " " + 
										data.id[i].username + "</li>";
	}
	output+="</ul>";
	document.getElementById("messages").innerHTML = output;
}