const leo = new Date();

const siku = ['Jumapili', 'Jumatatu', 'Jumanne', 'Jumatano', 'Alhamis', 'Ijumaa'];
const mwezi = ['January', 'February', 'March', 'April', 'May', 'June', 'Julay', 'Agoust', 'September', 'October', 'November', 'December'];

const tareheLeo = `${siku[leo.getDay()]}, ${leo.getDate()} ${mwezi[leo.getMonth()]} ${leo.getFullYear()}`;

document.getElementById('tarehe').innerText = 'Leo ni: ' +  tareheLeo;

const taarifaMpya = document.getElementById('taarifa-mpya');

setTimeout(() => {
    taarifaMpya.classList.remove('hidden');
}, 5000);

let slideIndex = 0;

function showSlides() {
    let slides = document.getElementByIdClassName("mySlides");
    for (let i = 0; i< slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex -1].style.display = "block";
    setTimeout(showSlides, 4000);
}

showSlides();

const tareheYaTukio = new Date("2025-07-04");

    function updateCountdown() {
      const leo = new Date();
      const tofauti = tareheYaTukio - leo;
      const sikuZimebaki = Math.ceil(tofauti / (1000 * 60 * 60 * 24));

      const countdownDiv = document.getElementById("countdown");

      if (sikuZimebaki > 0) {
        countdownDiv.innerText = `Zimebaki siku ${sikuZimebaki} hadi tukio.`;
      } else if (sikuZimebaki === 0) {
        countdownDiv.innerText = "Tukio ni leo!";
      } else {
        countdownDiv.innerText = "Tukio limeshapita.";
      }
    }

    updateCountdown();
    setInterval(updateCountdown, 1000 * 60 * 60 * 24);