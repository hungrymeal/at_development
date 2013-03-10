function Slider()
{
}

/*
 width,// width of slider panel
 height,// height of slider panel
 spw,// squares per width
 sph,// squares per height
 delay,// delay between images in ms
 sDelay,// delay beetwen squares in ms
 opacity,// opacity of title and navigation
 titleSpeed,// speed of title appereance in ms
 effect,// random, swirl, rain, straight
 navigation,// prev next and buttons
 links,// show images as links 
 hoverPause*/
Slider.prototype.init = function(initObject)
{
    $("#slider").coinslider(initObject);
};

Slider.prototype.addElement = function(img, href, description)
{
    var hrefTag = document.createElement("a");
    $(hrefTag).attr("href",href ? href : "#");
    var image = new Image();
    image.src = img;
    var text = document.createElement("span");
    text.innerText = description ? description : "";
    hrefTag.appendChild(image);
    hrefTag.appendChild(text);
    $("#slider").append(hrefTag);
};