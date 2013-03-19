$(function(){
    init();
});

var init = function()
{
    var slider = new Slider("advertisement");
    slider.init({width: 200, height: 200, delay: 3000, effect: "random", navigation: false});

	slider.createSlider({position: "relative"});
    slider.addElement("gfx/slider/1.jpg", "google.com", "google");
    slider.addElement("gfx/slider/2.jpg", "vk.com", "vk");

	slider.createSlider({position: "relative"});
	slider.addElement("gfx/slider/3.jpg", "google.com", "google");
	slider.addElement("gfx/slider/4.jpg", "vk.com", "vk");

	slider.createSlider({position: "relative"});
	slider.addElement("gfx/slider/1.jpg", "google.com", "google");
	slider.addElement("gfx/slider/2.jpg", "vk.com", "vk");

	slider.createSlider({position: "relative"});
	slider.addElement("gfx/slider/3.jpg", "google.com", "google");
	slider.addElement("gfx/slider/4.jpg", "vk.com", "vk");

	slider.createSlider({position: "relative"});
	slider.addElement("gfx/slider/3.jpg", "google.com", "google");
	slider.addElement("gfx/slider/4.jpg", "vk.com", "vk");

	slider.show();
};