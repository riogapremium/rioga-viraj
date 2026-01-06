const desktopImages = [
  "img/banner/banner-1big.webp",
  // "img/banner/banner2big.webp"
];

const mobileImages = [
  "img/banner/banner-1.webp",
  // "img/banner/banner-2.webp"
];

let currentIndex = 0;
const bannerImage = document.getElementById("bannerImage");

// Detect mobile
function isMobile() {
  return window.innerWidth <= 900;
}

// Update image with fade
function updateImage() {
  const imagesToUse = isMobile() ? mobileImages : desktopImages;
  if (imagesToUse.length <= 1) return; // Only update if more than 1 image

  bannerImage.style.opacity = 0;
  setTimeout(() => {
    bannerImage.src = imagesToUse[currentIndex];
    bannerImage.style.opacity = 1;
  }, 200);

  // Prepare index for next slide
  currentIndex = (currentIndex + 1) % imagesToUse.length;
}

// --- INITIAL LOAD: show first image immediately ---
bannerImage.src = isMobile() ? mobileImages[0] : desktopImages[0];
bannerImage.style.opacity = 1;

// --- START SLIDE ROTATION IF MORE THAN 1 IMAGE ---
const initialImages = isMobile() ? mobileImages : desktopImages;
if (initialImages.length > 1) {
  setInterval(updateImage, 4000);
}

// --- UPDATE ON RESIZE ---
window.addEventListener("resize", () => {
  currentIndex = 0;
  const imagesToUse = isMobile() ? mobileImages : desktopImages;
  bannerImage.src = imagesToUse[0];
  bannerImage.style.opacity = 1;
});



/* HIGHLIGHTS */

