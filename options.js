function save() {
	console.debug("save");
	var redmine = document.getElementById("redmine").value;
	var taskit = document.getElementById("taskit").value;

	chrome.storage.sync.set({
		redmine : redmine,
		taskit : taskit
	}, function() {
		var status = document.getElementById("status");
		status.textContent = "saved...";
		setTimeout(function() {
			status.textContent = "";
		}, 1000);
	});
}

function restore_options() {
	chrome.storage.sync.get({
		redmine : "",
		taskit : ""
	}, function(items) {
		document.getElementById("redmine").value = items.redmine;
		document.getElementById("taskit").value = items.taskit;
	});
}
document.addEventListener("DOMContentLoaded", restore_options);
document.getElementById("save").addEventListener("click", save);