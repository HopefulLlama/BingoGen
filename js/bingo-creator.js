function generateBingoCard(){
	shuffle(settings.input);
	var html = "";
	var counter = 0;

	html += '<table id="'+settings.id+'" class="table table-bordered">';
	for (var i = 0; i < settings.size; i++) {
		html += '<tr>';
		for (var j = 0; j < settings.size; j++) {
			if (counter === settings.freeSpaceIndex && settings.freeSpaceBoolean && settings.size % 2 == 1) {
				html += '<td class="bingoCell unclickable">';
		  		html += settings.input[counter];
				html += '<br /> <b>' + settings.freeSpaceName + '<b/>';
			} else {
				html += '<td class="bingoCell clickable">';
				html += settings.input[counter];
			}
			html += '</td>';
			counter++;
		}
		html += '</tr>';
	}
	html += '</table';

	$("#table").html(html);
	$("#cardTitle").html(settings.title);

	bindBingoCellFunctions();
	stats.findPossibleLines(settings.id, settings.size);
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