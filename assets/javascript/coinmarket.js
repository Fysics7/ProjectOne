$(document).ready(function() {
    
    //CoinMarketCap Query URL
    var queryURL = "https://api.coinmarketcap.com/v2/listings/";

    //AJAX CoinMarketCap
    $.ajax({
        url: queryURL,
        method: "GET"
    })

        .then(function(response) {

            console.log(response);

            var results = response.data;
            console.log(results);

            $("#testDiv01").append(results);

            for (i = 0; i < results.length; i++) {

                
                var name = results[i].symbol;

                var holder = $("<div>").text(name);

                $("#testDiv01").append(holder);

            }
        });
});