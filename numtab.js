(function(){
	chrome.extension.onRequest.addListener(updateTitle);
	var old_id;
	function updateTitle(id){
		// maybe work catching and triggering after a 100 millis just to ensure proper setting
		setTimeout(function(){
			var title = document.title;
			if(id !== old_id){
				var len = 0;
				if(old_id && title.charAt(0) === old_id.charAt(0)){
					len = old_id.toString().length;
				}
				title = id + " " + title.substr(len);
				//console.log(title);
				document.title = title;
				old_id = id;
			}
		}, 100);
	}
})();