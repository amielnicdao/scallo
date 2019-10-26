$(document).ready(function () {

    var topics = ["London", "Paris", "Phuket", "Bali", "Tokyo", "Singapore"];

    function displayInitialTopics() {
        $("#travel-buttons").empty();

        for (var i = 0; i < topics.length; i++) {

            var initialTopics = $("<button>");
            initialTopics.addClass("travel");
            initialTopics.attr("data-name", topics[i]);
            initialTopics.html(topics[i]);

            $("#travel-buttons").append(initialTopics);
        }
    };

    function displayTravelGifs() {
        var travel = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + travel +
            "&api_key=eFzG2a2AQjNm9AZTaKy8K34s5WGOC5CX&limit=10";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            $("#travel-view").empty();

            for (var i = 0; i < response.data.length; i++) {

                var gifDiv = $("<div class='gifDiv'>");
                var rating = response.data[i].rating;
                var ratingDiv = $("<p>").text("Rating: " + rating);
                var animated = response.data[i].images.fixed_height.url;
                var still = response.data[i].images.fixed_height_still.url;
                var gifImage = $("<img class='gifImage'>");

                gifImage.attr("src", still);
                gifImage.attr("data-still", still);
                gifImage.attr("data-animate", animated);
                gifImage.attr("data-state", "still");

                gifDiv.append(ratingDiv);
                gifDiv.prepend(gifImage);
                $("#travel-view").prepend(gifDiv);
            }
        });
    };

    $("#add-place").on("click", function (event) {
        event.preventDefault();
        var newTravelTopic = $("#travel-input").val().trim();
        topics.push(newTravelTopic);
        $("#travel-input").val("");
        displayInitialTopics();
    });

    $(document).on("click", ".travel", displayTravelGifs);
    displayInitialTopics();

    $("#travel-view").on("click", ".gifImage", function () {

        var state = $(this).attr("data-state");

        if (state === "still") {

            $(this).attr("src", $(this).data("animate"));
            $(this).attr("data-state", "animate");
        }

        else {

            $(this).attr("src", $(this).data("still"));
            $(this).attr("data-state", "still");
        }
    });
});