var items = [
	"'In any Case/Event'",
	"Everyone is present",
	"Someone is absent",
	"Issue is debated for more than 10 minutes",
	"Stand Up takes longer than 30 minutes",
	"Someone is sat down",
	"Everyone is stood up",
	"Technical Failure",
	"'Do you wanna kick off?'",
	"'Do you wanna drop out?'",
	"Mantis number is read out",
	"Mantis issue priority is disputed",
	"Stand Up takes between 15 and 30 minutes",
	"Someone's phone goes off",
	"Someone is lying down",
	"Someone is drinking",
	"No-one is drinking",
	"Someone laughs at non-stand up content",
	"Someone is spoken to/about who isn't there",
	"Stand up takes less 15 minutes",
	"An agreement about an issue is reached",
	"Someone is spinning on their chair",
	"Someone mentions a product name",
	"Someone mentions a customer",
];
var settings = {
	properties: { id: "bingoCard",
		title: "",
		multiBox: new MultiBox({name: 'inputContent', items: items}),
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