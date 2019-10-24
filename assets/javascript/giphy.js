// eFzG2a2AQjNm9AZTaKy8K34s5WGOC5CX
//https://api.giphy.com/v1/gifs/search?api_key=eFzG2a2AQjNm9AZTaKy8K34s5WGOC5CX&q=travel&limit=10&offset=0&rating=G&lang=en

//create variables to store api, URL, search.
//create an array of strings for travel places
//append search results to html file
//create for loop for prepopulated topics (travel) buttons

$(document).ready(function () {

    var topics = ["London", "Paris", "Phuket", "Bali", "Tokyo", "Singapore"];


    function displayInitialTopics() {
        $("#travel-buttons").empty();

        for (var i = 0; i < topics.length; i++) {

            var initialTopics = $("<button>");
            initialTopics.addClass("travel-btn");
            initialTopics.attr("data-name", topics[i]);
            initialTopics.text(topics[i]);
            $("#travel-buttons").append(initialTopics);
        }
    }

    function displayTopics() {
        var travel = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + travel + "&api_key=eFzG2a2AQjNm9AZTaKy8K34s5WGOC5CX&limit=10";

        $.ajax({

            url: queryURL,
            method: "GET"

        }).then(function (response) {

            var topicsDiv = $("<div class='topics'>");
            var rating = response.rating; //.data
            var pRating = $("<p>").text("Rating: " + rating); 
            topicsDiv.append(pRating);
            $("#travel-view").prepend(topicsDiv);
            //add image

        })
    }

    $("#add-place").on("click", function(event) {
        event.preventDefault();

        var newTopics = $("#travel-input").val().trim();

        topics.push(newTopics);

        displayInitialTopics();
    });

    $(document).on("click", ".travel-btn", displayTopics);

        displayInitialTopics();

});

// add function for gif state