  
     $("#search").on("click", function(event){
      event.preventDefault();

      var beerSearch = $("#search-input").val();


     $.ajax({
       url: "https://api.punkapi.com/v2/beers/random",
       method: "GET"
     }).then(function(response) {
       console.log(response);
       
       var beerDiv = $("<div class='parallax1'>")
       var imageUrl = response[0].image_url;
       var image = $("<img>").attr("src", imageUrl);

       

       var name = response[0].name;
       var date = response[0].first_brewed;
       var description = response[0].description;
       var food = response[0].food_pairing;
       
       
       beerDiv.append(image, name, date, description, food)
       

       
       console.log(response[0].name);
       console.log(response[0].first_brewed)
       console.log(response[0].description);
       console.log(response[0].food_pairing)


       $("#stuff").html(beerDiv);
     //clickBtn();
     });
   })
   //$(document).on("click", "#search");


{/* <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script type="text/javascript"> */}




//This is the form we used to test the two ajaz calls and buttons for search and random
//These are the id we used to grab information adn place them on the page


{/* <form id="beer">
<label for="beer-input">Look for your beer</label>
<input type="text" id="search-input"><br>

<!-- This button will trigger our AJAX call -->

<input id="search" type="submit" value="Beer Search">

<span class="validity"></span>
</form>

<button id = "random">Random Search</button>
<!-- <button id = "search">Search</button> -->
<div id = "stuff" ></div> */}


var baseUrl = "https://api.punkapi.com/v2/beers"


function beerInfo(response){

 console.log(response);
 var results = response[0];
  console.log(results)
  
  var beerDiv = $("<div>")
  var imageUrl = results.image_url;
  var image = $("<img>").attr("src", imageUrl);

  
 
  var name = results.name;
  var date = results.first_brewed;
  var description = results.description;
  var food = results.food_pairing;
  
  // beerSearch.attr(image, name, date, description, food)
  beerDiv.append(image, name, date, description, food)
  // beerDiv.append(beerSearch);

  
  console.log(results.name);
  console.log(results.first_brewed)
  console.log(results.description);
  console.log(results.food_pairing)


  $("#stuff").html(beerDiv);
 }

$("#search").on("click", function(event){
 event.preventDefault();

 var  beerSearch = $("#search-input").val();
 

var url = baseUrl + "?beer_name=" + beerSearch;


$.ajax({
  url: url,
  method: "GET"
}).then(function(response){

  beerInfo(response);
}); 

})



$("#random").on("click", function(event){
 event.preventDefault();


randomUrl = "https://api.punkapi.com/v2/beers/random";
$.ajax({
  url: randomUrl,
  method: "GET"
}).then(function(response){
  beerInfo(response);
});     
})

