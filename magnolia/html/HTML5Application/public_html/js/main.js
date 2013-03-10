$(function(){
    init();
});

var init = function()
{
    var slider = new Slider();
    slider.addElement("gfx/slider/1.jpg", "google.com", "google");
    slider.addElement("gfx/slider/2.jpg");
    slider.addElement("gfx/slider/3.jpg");
    slider.addElement("gfx/slider/4.jpg", "vk.com", "vk");
    slider.init({width: 950, height: 370, delay: 2000, effect: "straight"});
};