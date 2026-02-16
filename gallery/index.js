let images = document.querySelectorAll(".gallery img");
let lightbox = document.getElementById("lightbox");
let lightboxImg = document.getElementById("lightbox-img");
let currentIndex = 0;


function openLightbox(index) {
  currentIndex = index;
  lightbox.style.display = "flex";
  lightboxImg.src = images[index].src;
}

function closeLightbox() {
  lightbox.style.display = "none";
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  lightboxImg.src = images[currentIndex].src;
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  lightboxImg.src = images[currentIndex].src;
}


document.addEventListener("keydown", function(e) {
  if (lightbox.style.display === "flex") {
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "ArrowLeft") prevImage();
    if (e.key === "Escape") closeLightbox();
  }
});

function filterImages(category, btn) {
  let buttons = document.querySelectorAll(".filters button");
  buttons.forEach(b => b.classList.remove("active"));
  btn.classList.add("active");

  images.forEach(img => {
    if (category === "all" || img.classList.contains(category)) {
      img.classList.remove("hide");
    } else {
      img.classList.add("hide");
    }
  });
}


const darkBtn = document.getElementById("darkModeBtn");
darkBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
