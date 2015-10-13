function init() {
	
	var c = document.getElementById('game_canvas');
	var ctx = c.getContext("2d");
	var img = new Image();
	var img2 = new Image();
	img.addEventListener("load", function() {
			ctx.drawImage(img, 256, 240);
			ctx.drawImage(img2, 35, 118, 42, 26, 320, 300, 42, 26);
			ctx.drawImage(img2, 125, 118, 44, 29, 400, 280, 44, 29);
	}, false);
	img.src = "duckhunt-background.gif";
	img2.src = "duckhunt_various_sheet.png";
}