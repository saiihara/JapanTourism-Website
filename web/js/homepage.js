
document.addEventListener('DOMContentLoaded', function() {

//MAKE IMAGES BIGGER TIMELINE
var images = document.querySelectorAll('.img-his');
images.forEach(function(img) {
    img.addEventListener('click', function(e) {
        var modal = document.createElement('div');
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        modal.style.display = 'flex';
        modal.style.justifyContent = 'center';
        modal.style.alignItems = 'center';
        modal.style.zIndex = '1000';
        modal.style.opacity = '0';
        modal.style.transition = 'opacity 0.5s ease';

        var modalImg = document.createElement('img');
        modalImg.src = window.getComputedStyle(e.target).backgroundImage.slice(5, -2); 
        modalImg.style.maxWidth = '90%';
        modalImg.style.maxHeight = '90%';

        var closeButton = document.createElement('button');
        closeButton.textContent = 'X';
        closeButton.style.position = 'absolute';
        closeButton.style.top = '20px';
        closeButton.style.right = '20px';
        closeButton.style.padding = '10px';
        closeButton.style.fontSize = '20px';
        closeButton.style.cursor = 'pointer';
        closeButton.style.transition = 'transform 0.3s ease';
        closeButton.style.backgroundColor = 'transparent';
        closeButton.style.color = 'white';
        closeButton.style.border = 'none';

        closeButton.onmouseover = function() {
            this.style.transform = 'scale(1.2)';
        }
        closeButton.onmouseout = function() {
            this.style.transform = 'scale(1)';
        }

        modal.appendChild(modalImg);
        modal.appendChild(closeButton);

        document.body.appendChild(modal);

        setTimeout(function() {
            modal.style.opacity = '1';
        }, 0);

        closeButton.addEventListener('click', function() {
            modal.style.opacity = '0';
            setTimeout(function() {
                modal.remove();
            }, 500);
        });
    });
});


// JS FOR THE GALLERY HEIGHT BECAUSE I BROKE IT SOMEHOW
window.addEventListener('resize', adjustGalleryContainerHeight);

function adjustGalleryContainerHeight() {
  if (window.innerWidth < 630) {
    var galleryContainer = document.querySelector('.gallery-container');
    var aspectRatio = window.innerWidth / window.innerHeight;

    var galleryHeight;
    if (aspectRatio <= 1.33) { // 4:3 screens
      galleryHeight = Math.max((800 - 30) * galleryContainer.children.length, 100);
    } else if (aspectRatio <= 1.5) { // 3:2 screens
      galleryHeight = Math.max((810 - 30) * galleryContainer.children.length, 100);
    } else if (aspectRatio <= 1.6) { // 16:10 screens
      galleryHeight = Math.max((810 - 30) * galleryContainer.children.length, 100);
    } else if (aspectRatio <= 1.77) { // 16:9 screens
      galleryHeight = Math.max((600 - 30) * galleryContainer.children.length, 100);
    } else if (aspectRatio <= 2.0) { // 18:9 screens
      galleryHeight = Math.max((600 - 30) * galleryContainer.children.length, 100);
    } else { // screens with aspect ratio greater than 2.0
      galleryHeight = Math.max((220 - 30) * galleryContainer.children.length, 100);
    }
    galleryContainer.style.height = galleryHeight + 'px';
  }
}

adjustGalleryContainerHeight();


});