
var config = {
  apiKey: "AIzaSyBiJq9sJSLN5FClhkkDqTo-fi9j4PxGykQ",
  authDomain: "thirsty-project1.firebaseapp.com",
  databaseURL: "https://thirsty-project1.firebaseio.com",
  projectId: "thirsty-project1",
  storageBucket: "thirsty-project1.appspot.com",
  messagingSenderId: "762189077339"
};

var pullFire;
var pullRandom;
var fireReview;
var results;
//Initializing FireBase
firebase.initializeApp(config);

//setting our information from firebase into variable
var database = firebase.database();




//grabbing the value from firebase     
database.ref().on("value", function (snapshot) {
  if (!pullFire) {
    //$("h1").empty();
    //defining the snapshot value from firebase and setting it into a variable

    pullFire = snapshot.val().search.search;
    //console.log(pullFire)
    //we are define our API url so we can use it later 

    baseUrl = "https://api.punkapi.com/v2/beers"

    //set our api and paramater in a variable
    url = baseUrl + "?beer_name=" + pullFire

    //making the ajax call to get response from our api
    $.ajax({
      url: url,
      method: "GET"
    }).then(function (response) {
      //console.log(response);
      //this variable holds our response from the api and the where it is located 
      var results = response[0];
      //console.log(results)

      // var beerDiv = $("<div>")
      //
      var imageUrl = results.image_url;
      var image = $("<img>").attr("src", imageUrl);



      name = results.name;
      var date = results.first_brewed;
      var description = results.description;
      var food = results.food_pairing;




      console.log(food);

      //$("pullFire").attr(image, name, date, description, food);

      // $().empty();    

      $("h1").append(name);
      $(".parallax2").append(image);
      $("#aboutBeer").append(description);
      $("#dateBrewed").append(date);
      for (var i = 0; i < food.length; i++) {
        $("#foodMerge").append(food[i] + "<br>");
      }




      //  $("#foodMerge").append(food);
      // document.getElementById("foodMerge").innerHTML = food;


      // beerDiv.append(image, name, date, description, food);
      // beerDiv.append(pullFire);


      // console.log(results.name);
      // console.log(results.first_brewed)
      // console.log(results.description);
      // console.log(results.food_pairing)


      // $("#more-stuff").html(beerDiv);
      //results.length < 1 or == 0
      // if(response.length < 1 )//this is not right will need to change soon =)) 
      // { 
      //   console.log("world");
      //   $("#search-input").val( " " );
      //    //dalert("beer not found");
      //    //break;
      // }
      // else{
      //   console.log("hi")

      // //figure this if else site
      // }   
      //beerInfo(response);
      // 

    });
  }
});


database.ref().on("value", function (snapshot) {
  if (!pullRandom) {
    pullRandom = snapshot.val().search.random;
    //console.log(pullRandom)

    var results = pullRandom[0];
    console.log(results)


    //   //var beerDiv = $("<div>")
    var imageUrl = results.image_url;
    var image = $("<img>").attr("src", imageUrl);




    name = results.name;
    var date = results.first_brewed;
    var description = results.description;
    var food = results.food_pairing;






    //$("pullRandom").attr(image, name, date, description, food);
    // beerDiv.append(image, name, date, description, food);
    // beerDiv.append(pullRandom);

    //  $("h1").append(name);
    //  $(".parallax2").append(image);
    //  $("#aboutBeer").append(description);
    //  $("#dateBrewed").append(date);
    // //  $("#details").append(details);
    //  $("#foodMerge").append(food);

    $("h1").append(name);
    $(".parallax2").append(image);
    $("#aboutBeer").append(description);
    $("#dateBrewed").append(date);
    for (var i = 0; i < food.length; i++){
     $("#foodMerge").append(food[i] + "<br>");
    }

    console.log(name);
    console.log(date)
    console.log(description);
    console.log(food)

    // $("h1").append(name);
    // $(".parallax2").append(image);

    // $("#more-stuff").html(beerDiv);
  }
});




$("#review-btn").on("click", function (event) {
  event.preventDefault();


  newReview = $("#review-input").val();





  database.ref().child("reviews").push({
    reviews: newReview,
  });




});






database.ref("reviews").on("child_added", function (snapshot) {
  fireReview = snapshot.val().reviews;
  console.log(fireReview);





  var newRow = $("<tr>").append(

    $("<td>").html(name + "<br> " + "<br>" + fireReview + "<hr><br>"),
  );

  $("#review-table").prepend(newRow);
});


