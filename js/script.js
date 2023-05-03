// Initialize and add the map
let map;

async function initMap() {
  // The location of Uluru
  const position = { lat: -25.344, lng: 131.031 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("canvas"), {
    zoom: 4,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerView({
    map: map,
    position: position,
    title: "Uluru",
  });
}

initMap();

function init() {
    alert('it works');

    map = new Map(document.getElementById('canvas'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
      });

    let slides = document.getElementsByClassName("slider__slide");
    let navlinks = document.getElementsByClassName("slider__navlink");
    let currentSlide = 0;

    document.getElementById("nav-button--next").addEventListener("click", () => {
        changeSlide(currentSlide + 1)
    });
    document.getElementById("nav-button--prev").addEventListener("click", () => {
        changeSlide(currentSlide - 1)
    });

    function changeSlide(moveTo) {
        if (moveTo >= slides.length) {moveTo = 0;}
        if (moveTo < 0) {moveTo = slides.length - 1;}
        
        slides[currentSlide].classList.toggle("active");
        navlinks[currentSlide].classList.toggle("active");
        slides[moveTo].classList.toggle("active");
        navlinks[moveTo].classList.toggle("active");
        
        currentSlide = moveTo;
    }

    document.querySelectorAll('.slider__navlink').forEach((bullet, bulletIndex) => {
        bullet.addEventListener('click', () => {
            if (currentSlide !== bulletIndex) {
                changeSlide(bulletIndex);
            }
        })
    })
//Javascript code comes from https://alvarotrigo.com/blog/javascript-slider-how-to-make-one/
}