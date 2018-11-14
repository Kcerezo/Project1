var config = {
  apiKey: "AIzaSyBiJq9sJSLN5FClhkkDqTo-fi9j4PxGykQ",
  authDomain: "thirsty-project1.firebaseapp.com",
  databaseURL: "https://thirsty-project1.firebaseio.com",
  projectId: "thirsty-project1",
  storageBucket: "thirsty-project1.appspot.com",
  messagingSenderId: "762189077339"
};
firebase.initializeApp(config);

   var database = firebase.database();
  console.log(database);




$("#search").on("click", function(event){
  event.preventDefault();

  window.location.href = "beer.html";
  
  beerSearch = $("#search-input").val();
  
  console.log(beerSearch);
  
  database.ref().child("search").set({
     search: beerSearch,  
   });
 });



 $("#random").on("click", function(event){
  event.preventDefault();

  // window.location.href = "test2.html";

  window.open("beer.html");
 randomUrl = "https://api.punkapi.com/v2/beers/random";

 $.ajax({
   url: randomUrl,
   method: "GET"
 }).then(function(response){
   console.log(response);
   

    database.ref().child("search").set({
      random: response,  

      
      });
      
    })




});
