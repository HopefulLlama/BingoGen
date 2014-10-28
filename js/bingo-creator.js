function generateBingoCard(){
	var html = "";

	var input = $("#inputContent").html().split(",");
	shuffle(input);

	var freeSpace = null;
	if ($("#inputFreeSpaceBoolean").prop("checked") === true){
		freeSpace = $("#inputFreeSpaceName").val();
	}
	var size = parseInt($("#inputSize").val());
	if (freeSpace !== null) {
		var freeSpaceIndex = Math.floor(Math.pow(size, 2)/2);
		input.splice(freeSpaceIndex, 0, freeSpace)
	}
	var counter = 0;

	html += '<table class="table table-bordered">';
	for (var i = 0; i < size; i++) {
		html += '<tr>';
		for (var j = 0; j < size; j++) {
			if (counter === freeSpaceIndex) {
				html += '<td class="unclickable">';
		  		html += input[counter];
				html += '<br /> <b>FREE SPACE<b/>';
			} else {
			html += '<td class="clickable">';
			html += input[counter];
			}
			html += '</td>';
			counter++;
		}
		html += '<tr>';
	}
	html += '</table';

	$("#table").html(html);
	$("#cardTitle").html($("#inputTitle").val());
	bindBingoCellFunctions();
}

function shuffle(array) {
	var currentIndex = array.length, temporaryValue, randomIndex ;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {

		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	return array;
}