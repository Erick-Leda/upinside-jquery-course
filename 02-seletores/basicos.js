$(function(){
    //SELETOR DE ELEMENTO
    $("b").text("jQuery Essentials");

    //SELETOR DE CLASSES
    $(".jquery").css("color", "red");
    
    //SELETOR DE ID
    $("#jquery").text("Id = jQuery");
    
    //SELETOR UNIVERSAL
    $("*").css("border", "1px solid #ccc");
    
    //SELETOR MÚLTIPLO 1
    $(".jquery, b").css({
        background: "blue",
        color: "red",
        'border-radius': "4px",
        padding: "10px",
        'font-size': "1.4em"
    });
    
    //SELETOR MÚLTIPLO 2
    $("b").add("p").css("font-size", "2em");
});


