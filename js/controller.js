$(window).load(function (e) {
	bindInitialFunctions();
	createBingoCard();
});

function createBingoCard() {
	syncSettingsWithUIForm(settings);

	generateBingoCard();
	updateAndPublishStats(settings, stats);
}

function importBingoCard(string) {
	if(settings.importFromString(string)) {
		generateBingoCard();
		updateAndPublishStats(settings, stats);	
		$(document).trigger('show-alert', {
			priority: 'info',
			title: 'Successful Import!',
			message: 'The import was successful.',
			dismissable: true
		});
		syncUIFormWithSettings(settings);
	} else {
		$(document).trigger('show-alert', {
			priority: 'danger',
			title: 'Unsuccessful Import!',
			message: 'The import was unsuccessful.',
			dismissable: true
		});
	}
}

function updateAndPublishStats(settings) {
	stats.update(settings.properties.id, settings.properties.size);
	publishStats(settings, stats);
}

function syncSettingsWithUIForm(settings) {
	settings.properties.title = $("#inputTitle").val();
	settings.properties.input = $("#inputContent").val().split(",");
	settings.properties.size = parseInt($("#inputSize").val());
	settings.properties.freeSpaceBoolean = $("#inputFreeSpaceBoolean").prop("checked");
	settings.properties.freeSpaceName = $("#inputFreeSpaceName").val();
	settings.properties.freeSpaceIndex = Math.floor(Math.pow(settings.properties.size, 2)/2);
}

function syncUIFormWithSettings(settings) {
	$("#inputFreeSpaceName").val(settings.properties.freeSpaceName);
	$("#inputFreeSpaceBoolean").prop("checked", settings.properties.freeSpaceBoolean);
	$("#inputSize").val(settings.properties.size);
	$("#inputContent").val(settings.properties.input);
	$("#inputTitle").val(settings.properties.title);
}