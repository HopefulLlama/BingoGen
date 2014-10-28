var possibleLines = [];
var completedLines = 0;

function isFullHouse() {
	return possibleLines.length === completedLines;
}

function findCompletedLines() {
	completedLines = 0;
	possibleLines.forEach(function (line){
		if(isLineThrough(line)) {
			completedLines++;
		}
	});
	return completedLines;
}

function findPossibleLines(size) {
	possibleLines = findPossibleHorizontalLines(size).concat(findPossibleVerticalLines(size)).concat(findPossibleDiagonalLines(size));
	return possibleLines;
}

function findPossibleHorizontalLines(size) {
	var horizontalLines = [];
	for (var row = 0; row < size; row++) {
		var line = [];
		for (var column = 0; column < size; column++) {
			line.push($("#bingoCard tr:eq("+row+") td:eq("+column+")"));
		}
		horizontalLines.push(line);
	}
	return horizontalLines;
}

function findPossibleVerticalLines(size) {
	var verticalLines = [];
	for (var column = 0; column < size; column++) {
		var line = [];
		for (var row = 0; row < size; row++) {
			line.push($("#bingoCard tr:eq("+row+") td:eq("+column+")"));
		}
		verticalLines.push(line);
	}
	return verticalLines;
}

function findPossibleDiagonalLines(size){
	var diagonalLines = [];
	
	var line = [];
	for (var i = 0; i < size; i++) {
		line.push($("#bingoCard tr:eq("+i+") td:eq("+i+")"));
	}
	diagonalLines.push(line);

	line = [];
	j = size-1;
	for (i = 0; i < size; i++) {
		line.push($("#bingoCard tr:eq("+i+") td:eq("+j+")"));
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