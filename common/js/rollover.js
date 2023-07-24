function smartRollover() {
	if(document.getElementsByTagName) {
		
		var anchors = document.getElementsByTagName("a");
		
		for(var i=0; i < anchors.length; i++) {
			
			anchors[i].onmouseover = function() {
				var images = this.getElementsByTagName("img");
				for(var j=0; j < images.length; j++) {
					if(images[j].getAttribute("src").match("_out."))
					{
						images[j].setAttribute("src", images[j].getAttribute("src").replace("_out.", "_over."));
					}
				}
			}
			anchors[i].onmouseout = function() {
				var images = this.getElementsByTagName("img");
				for(var j=0; j < images.length; j++) {
					if(images[j].getAttribute("src").match("_over."))
					{
						images[j].setAttribute("src", images[j].getAttribute("src").replace("_over.", "_out."));
					}
				}
			}
		}
		
	}
}

if(window.addEventListener) {
	window.addEventListener("load", smartRollover, false);
}
else if(window.attachEvent) {
	window.attachEvent("onload", smartRollover);
}