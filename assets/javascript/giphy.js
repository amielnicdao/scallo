// eFzG2a2AQjNm9AZTaKy8K34s5WGOC5CX
//https://api.giphy.com/v1/gifs/search?api_key=eFzG2a2AQjNm9AZTaKy8K34s5WGOC5CX&q=travel&limit=10&offset=0&rating=G&lang=en

//create variables to store api, URL, search.
//create an array of strings for travel places
//append search results to html file
//create for loop for prepopulated topics (travel) buttons

// $(document).ready(function() {



// }); needed?

var topics = ["London", "Paris", "Phuket", "Bali", "Tokyo", "Singapore"];

// function displayTopics() {
//     var topic = $(this).attr("data-name");
//     var queryURL = https://api.giphy.com/v1/gifs/search?api_key=eFzG2a2AQjNm9AZTaKy8K34s5WGOC5CX
// }

function renderTopics() {
    $("#travel-button").empty();

    for (var i = 0; i < topics.length; i++) {

        var initialTopics = $("<button>");
        initialTopics.addClass("movie-btn");
        initialTopics.attr("data-name", topics[i]);
        initialTopics.text(topics[i]);
        $("#travel-button").append(initialTopics);
}


}