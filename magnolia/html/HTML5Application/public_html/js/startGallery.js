$(function(){
	init();
});

var init = function()
{
	TopUp.addPresets({
		"#photos a": {
			title: "Галерея {alt} ({current} of {total})",
			group: "photos",
			readAltText: 1,
			shaded: 1
		}
	});
	console.log("init")
};