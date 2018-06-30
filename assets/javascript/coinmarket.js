$(document).ready(function() {
    
    /*//CoinMarketCap Query URL
    var queryURL = "https://api.coinmarketcap.com/v2/listings/";

    //AJAX CoinMarketCap
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function(response) {

            //console.log(response);

            var results = response.data;
            //console.log(results);

            $("#testDiv01").append(results);

            for (i = 0; i < results.length; i++) {

                
                var name = results[i].symbol;

                var holder = $("<div>").text(name);

                $("#testDiv01").append(holder);

            }
        });*/

    
    var queryURL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc";

    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(response) {

        console.log(response);

        var results = response;

        $("#testDiv01").append(results);

        for (i = 0; i < results.length; i++) {

            var name = results[i].name;
            var id = results[i].id;
            var symbol = results[i].symbol;
            var image = results[i].image;
            var currentPrice = results[i].current_price

            var holder = $("<div>").text(id + " " + symbol + " " + name + " " + currentPrice);

            var imgHolder = $("<img src=\"" + image + "\">");

            $("#testDiv01").append(imgHolder);
            $("#testDiv01").append(holder);
        }
    });
});