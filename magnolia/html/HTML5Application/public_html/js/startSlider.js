$(function(){
    init();
});

var init = function()
{
    var slider = new Slider("advertisement");
    slider.init({rows: 5, delay: 5000});

	slider.createSlider();
	slider.addElement("gfx/slider/2.jpg", "vk.com", "vk");
	slider.addElement("gfx/slider/main.jpg", "google.com", "google");

	slider.createSlider();
	slider.addElement("gfx/slider/6.jpg", "google.com", "google");
	slider.addElement("gfx/slider/7.jpg", "vk.com", "vk");

	slider.createSlider();
	slider.addElement("gfx/slider/9.jpg", "vk.com", "vk");
	slider.addElement("gfx/slider/10.jpg", "google.com", "google");

	slider.createSlider();
	slider.addElement("gfx/slider/5.jpg", "google.com", "google");
	slider.addElement("gfx/slider/8.jpg", "vk.com", "vk");

	slider.createSlider();
	slider.addElement("gfx/slider/4.jpg", "vk.com", "vk");
	slider.addElement("gfx/slider/3.jpg", "google.com", "google");

	slider.show();
};