// You can use this for interactivity, like showing popups or form actions.
document.querySelector('.enquire-now').addEventListener('click', () => {
  alert("Redirecting to enquiry form...");
  // window.location.href = "enquiry.html";
});
// Array of background image URLs
const images = [
  'images bg1.jpg',
  'imagesbg2.jpg'
];

let current = 0;
const slideshow = document.querySelector('.slideshow');

function changeBackground() {
  slideshow.style.backgroundImage = `url('${images[current]}')`;
  current = (current + 1) % images.length;
}

// Initial call
changeBackground();
// Change every 5 seconds
setInterval(changeBackground, 5000);
