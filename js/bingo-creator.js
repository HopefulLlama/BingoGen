function generateBingoCard(){
	shuffle(settings.properties.input);
	var html = "";
	var cellcounter = 0;
	var undefinedCellCounter = 0;

	html += '<table id="'+settings.properties.id+'" class="table table-bordered">';
	for (var i = 0; i < settings.properties.size; i++) {
		html += '<tr>';
		for (var j = 0; j < settings.properties.size; j++) {
			if (cellcounter === settings.properties.freeSpaceIndex && settings.properties.freeSpaceBoolean && settings.properties.size % 2 == 1) {
				html += '<td class="bingoCell unclickable">';
		  		createCell();
				html += '<br /> <b>' + settings.properties.freeSpaceName + '<b/>';
			} else {
				html += '<td class="bingoCell clickable">';
				createCell();
			}
			html += '</td>';
			cellcounter++;
		}
		html += '</tr>';
	}
	html += '</table';

	$("#table").html(html);
	$("#cardTitle").html(settings.properties.title);

	bindBingoCellFunctions();
	stats.findPossibleLines(settings.properties.id, settings.properties.size);
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

function createCell(){
	if (settings.properties.input[cellcounter] !== undefined) {
		html += settings.properties.input[cellcounter];
	} else {
		html += "Undefined Cell #"+undefinedCellCounter;
	}
}