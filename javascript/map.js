$.ajax({
  url:"https://maps.googleapis.com/maps/api/js?key=AIzaSyAIEVe6sKTgq2T9qLw3bS9cUf4bFY1hvOs&callback=initMap",
  method: "GET"
}).then(function(response) {
  console.log(response);
});