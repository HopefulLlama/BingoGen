function bindInitialFunctions() {
	$(".generateBingoCard").click(createBingoCard);
	bindBingoCellFunctions();

	$("#export-nav-item").click(function (event){
		$("#inputExport").val(settings.exportString());
	})
}

function bindBingoCellFunctions() {
	$(".clickable").click(function (event){
		toggleBingoCellState($(this));
		updateAndPublishStats(settings, stats);
	});
}

function toggleBingoCellState(cell) {
	if (cell.css("text-decoration") !== "line-through") {
		cell.css("text-decoration", "line-through");
	} else {
		cell.css("text-decoration", "none");
	}
}

function publishStats(settings, stats) {
	var progress = 0;
	if (settings.size > 0 ) {
		progress = ((stats.checkedCells / Math.pow(settings.size, 2)) * 100).toFixed(2);
	}

	$("#completion-bar").attr("aria-valuenow", progress*100);
	$("#completion-bar").css("width", progress+"%");
	$("#completion-bar").html(progress+"%");

	$("#cells-stats").html(stats.checkedCells + "/" + Math.pow(settings.size, 2));
	$("#lines-stats").html(stats.completedLines + "/" + stats.possibleLines.length);
	
	if(stats.isFullHouse()) {
		$("#full-house-stats").html("Full House!");
	} else {
		$("#full-house-stats").html("No.");
	}
}