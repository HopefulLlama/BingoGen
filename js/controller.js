$(window).load(function (e) {
	bindInitialFunctions();
	createBingoCard();
});

function createBingoCard() {
	settings.title = $("#inputTitle").val();
	settings.input = $("#inputContent").val().split(",");
	settings.size = parseInt($("#inputSize").val());
	settings.freeSpaceBoolean = $("#inputFreeSpaceBoolean").prop("checked");
	settings.freeSpaceName = $("#inputFreeSpaceName").val();
	settings.freeSpaceIndex = Math.floor(Math.pow(settings.size, 2)/2);

	generateBingoCard();
	updateAndPublishStats(settings, stats);
}

function importBingoCard(string) {
	var importString = LZString.decompressFromBase64(string);
	settings = JSON.parse(importString);

	generateBingoCard();
	updateAndPublishStats(settings, stats);	
}

function updateAndPublishStats(settings) {
	stats.update(settings.id, settings.size);
	publishStats(settings, stats);

}