$(function(){
    
    $("article p").css("color", "red");
    
    $("body *").css({
       display: "block",
       'margin-bottom': "10px;"
    });
    
    
    $("article > p").css("color", "blue");
    
    
    $("div + *").css("background", "yellow");
    
    $("div ~ p").text("Irmão");
    
});


