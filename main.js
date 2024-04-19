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

// function myHumberger() {
//     let myHumbergerBtn = document.querySelector('.hum-toggler ul');
//     myHumbergerBtn.style.display === 'none' ? myHumbergerBtn.style.display = 'inline' : myHumbergerBtn.style.display = 'none';
// }

// function myHumberger() {
//     let myHumbergerBtn = document.querySelector('.hum-toggler ul');
//     if (myHumbergerBtn) {
//         myHumbergerBtn.style.display = myHumbergerBtn.style.display === 'none' ? 'inline' : 'none';
//     }
// }

// function myHumberger() {
//     let myHumbergerBtn = document.querySelector('.hum-toggler ul');
//     if (myHumbergerBtn) {
//         myHumbergerBtn.style.display = myHumbergerBtn.style.display === 'none' ? 'inline' : 'none';
//     }
// }

// // Add event listener for window resize
// window.addEventListener('resize', function() {
//     // Check if window width is less than or equal to 650px
//     if (window.innerWidth <= 650) {
//         // Run your script
//         myHumberger();
//     }
// });
