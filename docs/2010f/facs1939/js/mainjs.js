// Will ignore if using worse than netscape 3

// ---------------loadImage performs a rollover.
// imageName is the NAME attribute of the old image.
// imageLocation is the URL/HREF of the new image.

function loadImage(imageName, imageLocation)
{
if (document.images) document.images[imageName].src = imageLocation;
return true;
}

// ---------------openWindow opens a popup window.
// winName is the NAME attribute of the new window.
// features include scrollbars, width, height.

function openWindow(theURL,winName,features)
{
  window.open(theURL,winName,features);
}

