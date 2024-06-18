$(() => {
  $(".slider").slick({
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  });
});

let map;

async function initMap() {
  const position = { lat: 40.680002, lng: -73.949997 };
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  map = new Map(document.getElementById("map"), {
    zoom: 13.7,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Brooklyn",
  });
}

initMap();
