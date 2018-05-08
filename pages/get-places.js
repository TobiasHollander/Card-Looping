$(document).ready(function(){

var visitedPlaces=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF2Q1xwFfde2oPYDiAu-EF-EmE7Nz7rsZg67QKCP0GxRKw7wB_", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxz-7LZ0sfGlGqwhN8xSLvggG226EyaB1rrZ2AItt9hA-mUKKS", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQle1m9hsdjXAIStBT-z63LhCaAb6xdW2g_A6-fZdwPE9G6_53n", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_8SZEPf1bIRSq1ZRaL6ctXsnpY9XDb_BLFlb7n_RW7PZg2trV", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDxA2AOp3mO_dmTJXU5lEryvXqsY8eCqMSrTyNWQpT2PjzIrZedA", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRcUBFBkPOqzRBf5pdP7qKrGhXMIs3IgyIppugCieAC0yuHrFb"];

var placesNames=["Dingle, Ireland", "Vik, Iceland", "Banff, Canada", "Paris, France", "London, UK", "Edinburgh, Scotland"];

var populatePlaces=function(){
  var htmlToBeInserted = "";

  // JQUERY FOR LOOP
  // $(placesNames).each(function(i){
  //   if(i==0) htmlToBeInserted += "<div class='row'>";
  //   if(i && i%3==0) htmlToBeInserted += "</div><div class='row'>";
  //   htmlToBeInserted += "<div class='col sm4'><div class='card'><img class='card-img-top'src='"+visitedPlaces[i]+"'/><div class='card-body'><h3 class='card-title'>"+placesNames[i]+"</h3></div></div></div>";
  // });

  for (var i=0; i < placesNames.length; i++){
    if(i==0) htmlToBeInserted += "<div class='row'>";
    if(i && i%3==0) htmlToBeInserted += "</div><div class='row'>";
    htmlToBeInserted += "<div class='col sm4'><div class='card'><img class='card-img-top'src='"+visitedPlaces[i]+"'/><div class='card-body'><h3 class='card-title'>"+placesNames[i]+"</h3></div></div></div>";
  }
  $("#output-places").append(htmlToBeInserted);
}

$("#see-places").click(populatePlaces);



});
