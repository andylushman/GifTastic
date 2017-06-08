//=======================
//GLOBAL VARIABLES
//=======================


//1. User enters text into input and that value is used to create a button
//1.1 topic is added to an array of strings.
//2.The button is appended to the #topics div
//2.2 A loop that apends a button for each string in the array
//3. When User clicks on button, the value is used to conduct a search trough the API
//4. The results of the search are displayed in the #giphy-area
//4.1 Under every gif, display its rating (PG, G, so on).
//5.When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.
//5.1 When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.
//6. A reset button should be added to clear the results






//=======================
//FUNCTIONS
//=======================

function search() {
  var searchValue = $("#search").val().trim();
  var queryURL= "http://api.giphy.com/v1/gifs/search?q="+ searchValue +"&api_key=dc6zaTOxFJmzC";
  $.ajax({
    url: queryURL,
    method: 'GET'
  }).done((response) => {
    console.log(response);
    for(i = 0; i < response.data.length; i++){
      console.log(response.data[i].rating);
      $("#giphy-area").append("<div class= 'gif-div'>Raiting: " +response.data[i].rating+ '<br>'+ "<img src='"+response.data[i].images.downsized.url+"'class= 'gif-img'></div>");
    }; $("#search").val("")
  });
  createTopicBtn();
};

function createTopicBtn() {
  var topics = [];
  var searchText = $("#search").val().trim();
  topics = "<button class='btn-primary topic-btn'>" + searchText + "</button>";
  $("#topics").append(topics);
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
//When the Submit button is clicked the search function is called
$("#search-btn").on("click", search);

//$(".topic-btn").on("click", pressTopicBtn);
