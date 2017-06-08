//=======================
//GLOBAL VARIABLES
//=======================

var giphy = {
  searchValue: "",
  countries: ["Canada", "United States of America", "Switzerland", "China"]
}




//=======================
//FUNCTIONS
//=======================

function init() {
  for(i=0; i < giphy.countries.length; i++){
    console.log(giphy.countries[i]);
    $("#giphy-area").append("<button class='btn-primary topic-btn'>" + giphy.countries[i] + "</button>")
  };
};

function search() {
  $("#giphy-area").html("");
  giphy.searchValue = $("#search").val().trim();
  var queryURL= "http://api.giphy.com/v1/gifs/search?q="+ giphy.searchValue +"&api_key=dc6zaTOxFJmzC&limit=10";
  $.ajax({
    url: queryURL,
    method: 'GET',
  }).done((response) => {
    console.log(response);
    for(i = 0; i < response.data.length; i++){
      //console.log for debugging
      console.log(response.data[i].rating);
      //Add raiting and img to html
      $("#giphy-area").append("<div class= 'gif-div'>Raiting: " +response.data[i].rating+ '<br>'+ "<img src='"+response.data[i].images.downsized_still.url+"'class= 'gif-img'></div>");
    }; $("#search").val("")
  });
  //create button function
  createTopicBtn();
  init();
};

function createTopicBtn() {
  var searchText = $("#search").val().trim();
  giphy.countries.push(searchText);
};

// function pressTopicBtn () {
//   var topicBtnValue = $(this).text();
//   var queryURL= "http://api.giphy.com/v1/gifs/search?q="+ topicBtnValue +"&api_key=dc6zaTOxFJmzC";
//   $.ajax({
//     url: queryURL,
//     method: 'GET'
//   }).done((response) => {
//     console.log(response);
//     for(i = 0; i < response.data.length; i++){
//       console.log(response.data[i].rating);
//       $("#giphy-area").append(response.data[i].rating);
//       $("#giphy-area").append(response.data[i].url);
//     };
//   });
// };



//=======================
//MAIN PROCESS
//=======================
init();

//When the Submit button is clicked the search function is called
$("#search-btn").on("click", search);

//$(".topic-btn").on("click", pressTopicBtn);
