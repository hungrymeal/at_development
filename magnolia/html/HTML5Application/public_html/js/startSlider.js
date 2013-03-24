$(function(){
    init();
});

var init = function()
{
    var slider = new Slider("advertisement");
    slider.init({rows: 5, delay: 5000});

	slider.createSlider();
	slider.addElement("gfx/slider/1.jpg", "http://cosmetic.com.ua/care.html");
	slider.addElement("gfx/slider/2.jpg", "http://makeup.com.ua", "make up");

	slider.createSlider();
	slider.addElement("gfx/slider/3.jpg", "http://www.krasa-profi.com");
	slider.addElement("gfx/slider/4.jpg", "http://estel.in.ua");

	slider.createSlider();
	slider.addElement("gfx/slider/5.jpg", "http://rozetka.com.ua");
	slider.addElement("gfx/slider/6.jpg", "http://www.avon.com.ua");

	slider.createSlider();
	slider.addElement("gfx/slider/7.jpg", "http://rozetka.com.ua");
	slider.addElement("gfx/slider/8.jpg", "http://www.bonprix.ua");

	slider.createSlider();
	slider.addElement("gfx/slider/9.jpg", "http://milavitsa.biz/");
	slider.addElement("gfx/slider/10.jpg", "http://www.kuz.ua/");

	slider.show();
};