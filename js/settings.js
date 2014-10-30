var settings = {
	properties: { id: "bingoCard",
		title: "",
		input: [],
		size: 0,
		freeSpaceBoolean: true,
		freeSpaceName: "Free Space",
		freeSpaceIndex: 0
	},
	importFromString: function(string) {
		var importString = LZString.decompressFromBase64(string);
		if (JSON.parse(importString)){
			settings.properties = JSON.parse(importString);
			return true;
		} else {
			return false;
		}
	}, 
	exportString: function() {
		return LZString.compressToBase64(JSON.stringify(settings.properties));
	}
};