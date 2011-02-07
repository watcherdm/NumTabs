chrome.extension.onRequest.addListener(updateTitle);
var old_id;
function updateTitle(id){
	var title = document.title;
	console.log(id, old_id, title);
	if(id !== old_id){
		var len = 0;
		if(old_id){
			len = old_id.toString().length
		}
		title = id + " " + title.substr(len);
		console.log(title);
		document.title = title;
		old_id = id;
	}
}