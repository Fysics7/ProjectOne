var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=c9fa72dafb6c489b8638928ad9262ac0';

$.ajax({
  url: url,
  method: 'GET',
}).then(function(response) {
   console.log(response);

  for (var i = 0; i < response.articles.length; i++) {

    article = response.articles[i].url;
    title = response.articles[i].title;
    articleImage = response.articles[i].urlToImage;

    console.log(article);
    console.log(title);
    console.log(articleImage);

    $("#image-carousel").attr("src", articleImage);
    $("#image-carousel").append(articleImage);

    // topArticles.attr("href", article);
  //   topArticles.addClass("articleclass");
  //   topArticles.attr("data-title", title);
  //   topArticles.attr("src", articleImage);

  //   topArticles.append(article);
  //   topArticles.append(articleImage)

  //   articleDiv.append(topArticles);
  //   $("#article-area").append(articleDiv);
  }
  
}).fail(function(err) {
  throw err;
});


// topArticles.attr("href", article);
  //   topArticles.addClass("articleclass");
  //   topArticles.attr("data-title", title);
  //   topArticles.attr("src", articleImage);

  //   topArticles.append(article);
  //   topArticles.append(articleImage)

  //   articleDiv.append(topArticles);
  //   $("#article-area").append(articleDiv);
  


