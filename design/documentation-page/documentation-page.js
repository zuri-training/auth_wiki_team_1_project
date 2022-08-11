function load_getStarted() {
    window.location = "get-started.html"
}
function load_community(){
    window.location = "community.html"
}



//for the sub-pages navigation bar
$(document).ready(function () {
  
    $(".one").click(function (){
      $(this).addClass("active").siblings().removeClass("active");
    });
  });