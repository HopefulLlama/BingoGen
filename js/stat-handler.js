var stats = {
	possibleLines: [],
	completedLines: 0,
	checkedCells: 0,
	isFullHouse: function() {
		return stats.possibleLines.length === stats.completedLines;
	},
	update: function(tableId, size) {
		stats.countCheckedCells(tableId, size);
		stats.countCompletedLines(tableId, size);
	},
	countCheckedCells: function(tableId, size) {
		stats.checkedCells = 0;
		for (var row = 0; row < size; row++) {
			for (var column = 0; column < size; column++) {
				if ($("#"+tableId+" tr:eq("+row+") td:eq("+column+")").css("text-decoration") === "line-through") {
					stats.checkedCells++;
				}
			}
		}
		return stats.checkedCells;	
	},
	countCompletedLines: function() {
		stats.completedLines = 0;
		stats.possibleLines.forEach(function (line){
			if(stats.isLineThrough(line)) {
				stats.completedLines++;
			}
		});
		return stats.completedLines;	
	},
	findPossibleLines: function(tableId, size) {
		stats.possibleLines = stats.findPossibleHorizontalLines(tableId, size).concat(stats.findPossibleVerticalLines(tableId, size)).concat(stats.findPossibleDiagonalLines(tableId, size));
		return stats.possibleLines;
	},
	findPossibleHorizontalLines: function(tableId, size) {
		var horizontalLines = [];
		for (var row = 0; row < size; row++) {
			var line = [];
			for (var column = 0; column < size; column++) {
				line.push($("#"+tableId+" tr:eq("+row+") td:eq("+column+")"));
			}
			horizontalLines.push(line);
		}
		return horizontalLines;
	},
	findPossibleVerticalLines: function(tableId, size) {
		var verticalLines = [];
		for (var column = 0; column < size; column++) {
			var line = [];
			for (var row = 0; row < size; row++) {
				line.push($("#"+tableId+" tr:eq("+row+") td:eq("+column+")"));
			}
			verticalLines.push(line);
		}
		return verticalLines;
	},
	findPossibleDiagonalLines: function (tableId, size) {
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
	},
	isLineThrough: function(arrayOfCells) {
		var allChecked = true;
		arrayOfCells.forEach(function (cell) {
			if (cell.css("text-decoration") !== "line-through") {
				allChecked = false;
			}
		});
		return allChecked;
	}
}