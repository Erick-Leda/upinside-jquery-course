$(function(){
    
    $("[class]").css("background", "#ccc");
    
    $("[data-upinside='true']").css("background", "#006699");
    
    
    $("a[title!='UpInside']").css("background", "red");
    
    $("[class^='jquery']").css("background", "#0099ff");
    
    
    $("[class$='div']").css("color", "#fff");
    
    //qualquer classe que possua atributo com a letra r
    $("[class*='r']").css("font-weight", "bold");
    
    
    $("[class~='jquery']").css("text-transform", "uppercase");
    
    
    $("[class|='jquery-essentials']").css("border-bottom", "5px solid red");
    
    //Combinação de filtros
    $("[class*='jquery'][data-upinside]").css("color", "pink");
});

