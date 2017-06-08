//=======================
//GLOBAL VARIABLES
//=======================

var giphy = {
  searchValue: "",
  countries: ["Canada", "United States of America", "Switzerland", "China", ]
}




//=======================
//FUNCTIONS
//=======================

function init() {
  for(i=0; i < giphy.countries.length; i++){
    console.log(giphy.countries[i]);
    $("#topics").append("<button class='btn-primary topic-btn'>" + giphy.countries[i] + "</button>")
  };
};

function search() {
  //Empty the html giphy-area after each search
  $("#giphy-area").html("");
  giphy.searchValue = $("#search").val().trim();
  //Set queryURL for AJAX Request
  var queryURL= "http://api.giphy.com/v1/gifs/search?q="+ giphy.searchValue +"&api_key=dc6zaTOxFJmzC&limit=10";

  //AJAX Request
  $.ajax({
    url: queryURL,
    method: 'GET',
  }).done((response) => {
    console.log(response);
    for(i = 0; i < response.data.length; i++){
      //Add raiting and img to html
      $("#giphy-area").append("<div class= 'gif-div'>Raiting: " +response.data[i].rating+ '<br>'+ "<img src='"+response.data[i].images.downsized_still.url+"'class= 'gif-img'></div>");
    }; $("#search").val("")
  });
  //create button function
  createTopicBtn();
};

function createTopicBtn() {
  var searchText = $("#search").val().trim();
  //Empty the countries array
  giphy.countries= [];
  //Add new country to the array
  giphy.countries.push(searchText);
  //Run init()
  init();
};

function pressTopicBtn () {
  $("#giphy-area").html("");
  var topicBtnValue = $(this).text();
  var queryURL= "http://api.giphy.com/v1/gifs/search?q="+ topicBtnValue +"&api_key=dc6zaTOxFJmzC&limit=10";
  $.ajax({
    url: queryURL,
    method: 'GET'
  }).done((response) => {
    console.log(response);
    for(i = 0; i < response.data.length; i++){
      //Add raiting and img to html
      $("#giphy-area").append("<div class= 'gif-div'>Raiting: " +response.data[i].rating+ '<br>'+ "<img src='"+response.data[i].images.downsized_still.url+"'class= 'gif-img'></div>");
    };
  });
};



//=======================
//MAIN PROCESS
//=======================
//Initialize on start
init();

//When the Submit button is clicked the search function is called
$("#search-btn").on("click", search);

$(".topic-btn").on("click", pressTopicBtn);
