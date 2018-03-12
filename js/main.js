

$(document).ready( function(){
  var count = 0;
  $("button").on("click", function(e){ //the event listener that allows my button to work

    $.ajax({
       url: "https://dog.ceo/api/breeds/image/random", //the method of exchanging data with the server
      success: function (response) {
        //console.log(response.pikachu); //server response
        //console.log(response.message);
         var img = $("img");
        img.attr("src", response.message);  //Gets the value for the element and changes the source

        //pokemon()

       },
     error: function(r) {
      console.log(r); //server response


      }

     });

     count += 1;
     $.ajax({
       //cache: false,
       url: "https://api.pokemontcg.io/v1/cards/",
     success: function(r){
       console.log(r.cards[count].name)
       // for (i = 0; i < r.cards[20].name; i++){
       // count += 1;
     $("#unique").html( "Dogs name: " +r.cards[count].name+ " !");

     },
     error: function(er){
       console.log(er)
     }
     });
   });

 });









 //var random = "https://dog.ceo/dog-api/breeds-image-random.jpeg"
 // function myData(data) {
 //
 //   $("img").append("src");
 // }
