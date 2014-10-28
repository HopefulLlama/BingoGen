function bindInitialFunctions() {
	$(".generateBingoCard").click(generateBingoCard);
	bindBingoCellFunctions();
}

function bindBingoCellFunctions(){
	$(".clickable").click(function (event){
		toggleBingoCellState($(this));
	});
}

function toggleBingoCellState(cell) {
	if (cell.css("text-decoration") !== "line-through") {
		cell.css("text-decoration", "line-through");
	} else {
		cell.css("text-decoration", "none");
	}
}