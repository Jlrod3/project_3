// Initialize and add the map
let map;

async function initMap() {
  // The location of places from my childhood
  const position = { lat: 32.686, lng: -114.511 };
  const elemschool = { lat: 32.68576431453502, lng: -114.50596845588063}
  const highschool = { lat: 32.68541313428333, lng: -114.51070997639545}
  const oldhome = { lat: 32.68001818322, lng: -114.5054809301819}

  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

  map = new Map(document.getElementById("canvas"), {
    zoom: 15,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  new google.maps.Marker({
    map: map,
    position: highschool,
    title: "My old Highschool",
    label: "A",

  });

  new google.maps.Marker({
    map: map,
    position: elemschool,
    title: "My Elementary School",
    label: "B",

  });
  
  new google.maps.Marker({
    map: map,
    position: oldhome,
    title: "My old home",
    label: "C",

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