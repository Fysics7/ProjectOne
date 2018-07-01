$(document).ready(function() {
    
    var queryURL = "https://api.coingecko.com/api/v3/coins?order=market_cap_&per_page=5";

    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(response) {

        console.log(response);

        var results = response;

        // $("#testDiv01").append(results);

        for(i = 0; i < results.length; i++) {

            var name = results[i].name;
            var id = results[i].id;
            var symbol = results[i].symbol;
            var image = results[i].image.small;
            var currentPrice = results[i].market_data.current_price.usd;
            var hourChange = results[i].market_data.price_change_percentage_24h

            var holder = $("<div>").text(id + " " + symbol + " " + name + " " + currentPrice + " " + hourChange);

            var imgHolder = $("<img src=\"" + image + "\">");

            $("#testDiv01").append(imgHolder);
            $("#testDiv01").append(holder);
            //$("#testDiv01").append("<br>");

            var a = $("<img>");
    
            a.addClass("crypto-btn");
            a.addClass("img-rounded");
            a.addClass("imagestyle");
            a.attr("src", image);
            a.attr("id", id);
            $("#crytoDiv").append(a);
             
        }
    });

    $(document).on("click", ".crypto-btn", function(event){
        event.preventDefault();

        console.log(this.id);
        var queryURL = "https://api.coingecko.com/api/v3/coins/" + this.id;

        $.ajax({
            url: queryURL,
            method: "GET"
        })
        .then(function(response) {
            console.log(response);
            var results = response;

            $("#dataDiv").html("");
            $("#dataDiv").append(JSON.stringify(results));
        }); 
    });
});