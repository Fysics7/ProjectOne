var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=c9fa72dafb6c489b8638928ad9262ac0';

$.ajax({
  url: url,
  method: 'GET'
}).then(function(response) {
   console.log(response);

  for (var i = 0; i < response.articles.length; i++) {

    var article = response.articles[i].url;
    var title = response.articles[i].title;
    var articleDiv = $("<div>");
    var articleImage = $("<img>");

    articleDiv.addClass("carousel-item")
    articleImage.addClass("image-carousel")
    articleImage.attr("src", response.articles[i].urlToImage);

    articleDiv.append(articleImage);
    $(".carousel-inner").append(articleDiv);

    console.log(article);
    console.log(title);
    console.log(articleImage);

    // $(".image-carousel").attr("src", articleImage);
    // $(".carousel-item").append(articleImage);
  }
  $('.carousel').show();
  
}).fail(function(err) {
  throw err;
});
  


