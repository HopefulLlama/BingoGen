var bingoCard = {};
bingoCard.id = "bingoCard";
function generateBingoCard(){
	bingoCard.title = $("#inputTitle").val();
	bingoCard.input = $("#inputContent").html().split(",");
	bingoCard.size = parseInt($("#inputSize").val());
	bingoCard.freeSpaceBoolean = $("#inputFreeSpaceBoolean").prop("checked");
	bingoCard.freeSpaceName = $("#inputFreeSpaceName").val();
	bingoCard.freeSpaceIndex = Math.floor(Math.pow(bingoCard.size, 2)/2);

	shuffle(bingoCard.input);
	var html = "";
	var counter = 0;

	html += '<table id="bingoCard" class="table table-bordered">';
	for (var i = 0; i < bingoCard.size; i++) {
		html += '<tr>';
		for (var j = 0; j < bingoCard.size; j++) {
			if (counter === bingoCard.freeSpaceIndex) {
				html += '<td class="bingoCell unclickable">';
		  		html += bingoCard.input[counter];
				html += '<br /> <b>FREE SPACE<b/>';
			} else {
			html += '<td class="bingoCell clickable">';
			html += bingoCard.input[counter];
			}
			html += '</td>';
			counter++;
		}
		html += '</tr>';
	}
	html += '</table';

	$("#table").html(html);
	$("#cardTitle").html(bingoCard.title);

	bindBingoCellFunctions();
	findPossibleLines("bingoCard", bingoCard.size);
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