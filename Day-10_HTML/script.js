const images = [
  "https://wallpapercave.com/wp/wp5203985.jpg",
  "https://i.redd.it/d2hd73xxwvaa1.jpg",
  "https://www.hdwallpapers.in/download/blue_city_view_bridge_lights_buildings_aesthetic_hd_blue_aesthetic-HD.jpg"
];

let currentIndex = 0;
const imageElement = document.getElementById("sliderImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const dotsContainer = document.getElementById("dotsContainer");

images.forEach((_, index) => {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  dot.addEventListener("click", () => showImage(index));
  dotsContainer.appendChild(dot);
});

const updateDots = () => {
  const dots = document.querySelectorAll(".dot");
  dots.forEach(dot => dot.classList.remove("active"));
  dots[currentIndex].classList.add("active");
};

const showImage = (index) => {
  currentIndex = index;
  imageElement.src = images[currentIndex];
  updateDots();
};

const nextImage = () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
};

const prevImage = () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
};

prevBtn.addEventListener("click", prevImage);
nextBtn.addEventListener("click", nextImage);

setInterval(nextImage, 4000);

showImage(currentIndex);
