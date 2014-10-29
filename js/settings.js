var settings = {
	id: "bingoCard",
	title: "",
	input: [],
	size: 0,
	freeSpaceBoolean: true,
	freeSpaceName: "Free Space",
	freeSpaceIndex: 0,
	exportString: function() {
		return LZString.compressToBase64(JSON.stringify(settings));
	}
};