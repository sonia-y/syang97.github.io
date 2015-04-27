$(document).ready(function() {

     $("#blog").hide();
    $("#contact").hide();
  $("#slideshow > div:gt(0)").hide();

 var x = setInterval(function() { 
    $('#slideshow > div:first')
      .fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo('#slideshow');
  },  3000);

  $("#slideshow").click(function() { 
    clearInterval(x);
    $('#slideshow > div:first')
      .fadeOut()
      .next()
      .fadeIn()
      .end()
      .appendTo('#slideshow');
      x = setInterval(function() { 
    $('#slideshow > div:first')
      .fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo('#slideshow');
  },  3000);

  });

  $("#facebook").hover(function(){
    $(this).css("height", "120px");
    $(this).css("width", "120px");
    $("#facebookpic").css("width", "120px");
    $("#facebookpic").css("height", "120px");
    $(this).css("top", "-10px");
    $(this).css("left", "-10px");
  }, function(){
    $(this).css("height", "100px");
    $(this).css("width", "100px");
    $("#facebookpic").css("width", "100px");
    $("#facebookpic").css("height", "100px");
    $(this).css("top", "0px");
    $(this).css("left", "0px");

  });

$("#twitter").hover(function(){
    $(this).css("height", "120px");
    $(this).css("width", "120px");
    $("#twitterpic").css("width", "120px");
    $("#twitterpic").css("height", "120px");
    $(this).css("top", "-10px");
    $(this).css("right", "-10px");
  }, function(){
    $(this).css("height", "100px");
    $(this).css("width", "100px");
    $("#twitterpic").css("width", "100px");
    $("#twitterpic").css("height", "100px");
    $(this).css("top", "0px");
    $(this).css("right", "0px");
});

$("#instagram").hover(function(){
    $(this).css("height", "120px");
    $(this).css("width", "120px");
    $("#instagrampic").css("width", "120px");
    $("#instagrampic").css("height", "120px");
    $(this).css("bottom", "-10px");
    $(this).css("right", "-10px");
  }, function(){
    $(this).css("height", "100px");
    $(this).css("width", "100px");
    $("#instagrampic").css("width", "100px");
    $("#instagrampic").css("height", "100px");
    $(this).css("bottom", "0px");
    $(this).css("right", "0px");
});

$("#linkedin").hover(function(){
    $(this).css("height", "120px");
    $(this).css("width", "120px");
    $("#linkedinpic").css("width", "120px");
    $("#linkedinpic").css("height", "120px");
    $(this).css("bottom", "-10px");
    $(this).css("left", "-10px");
  }, function(){
    $(this).css("height", "100px");
    $(this).css("width", "100px");
    $("#linkedinpic").css("width", "100px");
    $("#linkedinpic").css("height", "100px");
    $(this).css("bottom", "0px");
    $(this).css("left", "0px");
});


  $(".blogborder").hover(function(){
    // $(this).children(".blogborder").css("background", "rgba(0,0,0,0.85)");
    $(this).children(".overlay").show();
   
  }, function(){
     $(this).children(".overlay").hide();
    // $(this).children(".blogborder").css("background", "rgba(0,0,0,0)");
  });


  $("#blogtab").click(function(){
    $("#home").hide();
    $("#blog").show();
    $("#contact").hide();
     $("#blogtab").css("text-decoration", "underline");
     $("#blogtab").css("color", "rgba(176, 232, 250, 1)");
    $("#hometab").css("text-decoration", "none");
    $("#hometab").css("color", "white");
    $("#contacttab").css("text-decoration", "none");
    $("#contacttab").css("color", "white");
   window.scrollTo(0, 0);
  });

  $("#hometab").click(function(){
    $("#home").show();
    $("#blog").hide();
    $("#contact").hide();
    $("#hometab").css("text-decoration", "underline");
    $("#hometab").css("color", "rgba(176, 232, 250, 1)");
    $("#blogtab").css("text-decoration", "none");
    $("#contacttab").css("text-decoration", "none");
    $("#contacttab").css("color", "white");
     $("#blogtab").css("color", "white");

    window.scrollTo(0, 0);
  });
   $("#contacttab").click(function(){
    $("#home").hide();
    $("#blog").hide();
    $("#contact").show();
     $("#contacttab").css("text-decoration", "underline");
     $("#contacttab").css("color", "rgba(176, 232, 250, 1)");
    $("#hometab").css("text-decoration", "none");
     $("#hometab").css("color", "white");
    $("#blogtab").css("text-decoration", "none");
     $("#blogtab").css("color", "white");
    window.scrollTo(0, 0);
  });


  

});