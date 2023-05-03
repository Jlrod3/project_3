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
    mapId: "Childhood",
    mapTypeId: google.maps.MapTypeId.SATELLITE,
  });

  new google.maps.Marker({
    map: map,
    position: highschool,
    title: "My old Highschool",
    Animation: google.maps.Animation.BOUNCE,
    icon: "images/hawk.png"

  });

  new google.maps.Marker({
    map: map,
    position: elemschool,
    title: "My Elementary School",
    label: "X",
    Animation: google.maps.Animation.DROP

  });
  
  new google.maps.Marker({
    map: map,
    position: oldhome,
    title: "My old home",
    Animation: google.maps.Animation.BOUNCE

  });
 
  // Making a triangle because why not.
  const triangleCoords = [
    { lat: 32.68576431453502, lng: -114.50596845588063},
    { lat: 32.68541313428333, lng: -114.51070997639545},
    { lat: 32.68001818322, lng: -114.5054809301819},
  ];

  const pointTriangle = new google.maps.Polygon({
    paths: triangleCoords,
    strokeColor: "#3CB043",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#1338BE",
    fillOpacity: 0.35,
  });

  pointTriangle.setMap(map);
}

function init() {
    alert('it works');

    let slides = document.getElementsByClassName("slider__slides");
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