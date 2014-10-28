var possibleLines = [];
var completedLines = 0;
var checkedCells = 0;

function updateStats(tableId, size) {
	countCheckedCells(tableId, size);
	countCompletedLines(tableId, size);
}

function isFullHouse() {
	return possibleLines.length === completedLines;
}

function countCheckedCells(tableId, size) {
	checkedCells = 0;
	for (var row = 0; row < size; row++) {
		for (var column = 0; column < size; column++) {
			if ($("#"+tableId+" tr:eq("+row+") td:eq("+column+")").css("text-decoration") === "line-through") {
				checkedCells++;
			}
		}
	}
	return checkedCells;
}

function countCompletedLines() {
	completedLines = 0;
	possibleLines.forEach(function (line){
		if(isLineThrough(line)) {
			completedLines++;
		}
	});
	return completedLines;
}

function findPossibleLines(tableId, size) {
	possibleLines = findPossibleHorizontalLines(tableId, size).concat(findPossibleVerticalLines(tableId, size)).concat(findPossibleDiagonalLines(tableId, size));
	return possibleLines;
}

function findPossibleHorizontalLines(tableId, size) {
	var horizontalLines = [];
	for (var row = 0; row < size; row++) {
		var line = [];
		for (var column = 0; column < size; column++) {
			line.push($("#"+tableId+" tr:eq("+row+") td:eq("+column+")"));
		}
		horizontalLines.push(line);
	}
	return horizontalLines;
}

function findPossibleVerticalLines(tableId, size) {
	var verticalLines = [];
	for (var column = 0; column < size; column++) {
		var line = [];
		for (var row = 0; row < size; row++) {
			line.push($("#"+tableId+" tr:eq("+row+") td:eq("+column+")"));
		}
		verticalLines.push(line);
	}
	return verticalLines;
}

function findPossibleDiagonalLines(tableId, size){
	var diagonalLines = [];
	
	var line = [];
	for (var i = 0; i < size; i++) {
		line.push($("#"+tableId+" tr:eq("+i+") td:eq("+i+")"));
	}
	diagonalLines.push(line);

	line = [];
	j = size-1;
	for (i = 0; i < size; i++) {
		line.push($("#"+tableId+" tr:eq("+i+") td:eq("+j+")"));
		j--;
	}
	diagonalLines.push(line);	

	return diagonalLines;
}

function isLineThrough(arrayOfCells) {
	var allChecked = true;
	arrayOfCells.forEach(function (cell) {
		if (cell.css("text-decoration") !== "line-through") {
			allChecked = false;
		}
	});
	return allChecked;
}