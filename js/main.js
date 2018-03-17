function getGifols(){
  var input = $("#searchtext").val()
  var xhr = $.get("http://api.giphy.com/v1/gifs/search?q="+input+"&api_key=88kKiQnK19xEgtfUi2JCfXPLlGYyOFEh&limit=30");
  xhr.done(function(response) {
    console.log("success got data", response);

    var gifols = response.data;

    for(i in gifols){
      $('.inner').append("<img src='"+gifols[i].images.original.url+"' style='height:350px; width:350px;'/>")
    }
  });
}
