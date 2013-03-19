function Slider(rootTag)
{
	this.root = rootTag;
	this.currentSlider = 0;
	this.initObject = {};
}

Slider.prototype.init = function(initObject)
{
	this.initObject = initObject;
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
	$("#" + this.root + this.currentSlider).append(hrefTag);
};

Slider.prototype.show = function()
{
	for(var sliderId = 1; sliderId <= this.currentSlider; sliderId++)
	{
		$("#" + this.root + sliderId).coinslider(this.initObject);
	}
};

Slider.prototype.createSlider = function(sliderObject)
{
	this.currentSlider++;
	var slider = document.createElement("div");
	$(slider).attr("position",sliderObject.position);
	$(slider).attr("id",this.root + this.currentSlider);
	$(slider).attr("class","advertisement");
	$("#" + this.root).append(slider);
};