
var queryURL = "https://api.cryptonator.com/api/full/btc-usd"


$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    console.log(response.Runtime);
  });