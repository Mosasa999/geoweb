const tareheYaTukio = new Date("2025-07-04");

function updateCountdown() {
  const leo = new Date();
  const tofauti = tareheYaTukio - leo;
  const sikuZimebaki = Math.ceil(tofauti / (1000 * 60 * 60 * 24));

  let ujumbe = "";

  if (sikuZimebaki > 0) {
    ujumbe = `Zimebaki siku ${sikuZimebaki} kufikia tarehe ya kuanza University Examintion kwa Semester ya pili`;
  } else if (sikuZimebaki === 0) {
    ujumbe = "Leo ndio tarehe ya kuanza University Examintion ";
  } else {
    ujumbe = "Tarehe ya kuanza University Examintion imeshapita.";
  }

  document.getElementById("movingText").innerText = ujumbe;
}

updateCountdown();
setInterval(updateCountdown, 1000 * 60 * 60 * 24); // Sasisha kila siku

let currentIndex =0;
const slides = document.querySelectorAll("slide");
const totalSlides  = slides.length;

function showSlides(index) {
  const slider = document.querySelector('.slider');
  const offset = -index*100;
  slider.style.transform = `translateX(${offset}%)`;
  
}

function nextSlide() {
  currentIndex = (currentIndex+1)% totalSlides;
  showSlide(currentIndex)
  
}

setInterval(nextSlide, 3000);
