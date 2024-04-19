let myDashHeading = document.querySelector("h2");
myDashHeading.innerText = "ICT Student Dashboard";

let myMainContHeading = document.querySelector("h3");
myMainContHeading.innerText = "Transforming Urban Poverty into Urban promise";

// Get all images

const images = document.querySelectorAll('.image-slider img');

let currentImageIndex = 0;

function showNextImage() {

// Hide the current image

images[currentImageIndex].style.display = 'none';

// Move to the next image

currentImageIndex = (currentImageIndex + 1) % images.length;

// Display the next image

images[currentImageIndex].style.display = 'block';

}


// Show the next image every 5 seconds

setInterval(showNextImage, 5000);

function myPrevFunction() {
    images[currentImageIndex].style.display = 'none';

    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;

    images[currentImageIndex].style.display = 'block';
}

function myNextFunction() {
    images[currentImageIndex].style.display = 'none';

    currentImageIndex = (currentImageIndex + 1) % images.length;

    images[currentImageIndex].style.display = 'block';
}

