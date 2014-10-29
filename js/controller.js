$(window).load(function (e) {
	bindInitialFunctions();
	createBingoCard();
});

function createBingoCard() {
	settings.title = $("#inputTitle").val();
	settings.input = $("#inputContent").html().split(",");
	settings.size = parseInt($("#inputSize").val());
	settings.freeSpaceBoolean = $("#inputFreeSpaceBoolean").prop("checked");
	settings.freeSpaceName = $("#inputFreeSpaceName").val();
	settings.freeSpaceIndex = Math.floor(Math.pow(settings.size, 2)/2);

	generateBingoCard();
	updateAndPublishStats(settings, stats);
}

function updateAndPublishStats(settings) {
	stats.update(settings.id, settings.size);
	publishStats(settings, stats);

}