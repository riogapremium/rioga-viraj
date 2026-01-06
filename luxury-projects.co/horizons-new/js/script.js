const images = [
  "img/banner/banner1big.webp",
  "img/banner/banner2big.webp",
  
];

let currentIndex = 0;
const bannerImage = document.getElementById("bannerImage");

setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  bannerImage.style.opacity = 0;
  setTimeout(() => {
    bannerImage.src = images[currentIndex];
    bannerImage.style.opacity = 1;
  }, 300);
}, 4000); // Change every 4 seconds
