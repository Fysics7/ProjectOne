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

            var results = JSON.stringify(response.data);
            console.log(results);

            $("#testDiv01").text(results);

        });
});