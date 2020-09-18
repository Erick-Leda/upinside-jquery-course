$(function (){
    var text= $(".j").text();
    var html= $(".j").html();
    
    //Insere conteúdos especificados pelo parâmetro ao fim de cada elemento
    $(".e").append("<p>"+ text +"</p>");
    $(".e").append("<p>"+ html +"</p>");
    
    //Move conteúdos e ao final da ordem = appendTo
    $(".a").appendTo($(".e"));
    $("<p><b>#BoraProgramar!</b></p>").appendTo($(".e"));
    
    //Insere conteúdos especificados pelo parâmetro ao começo de cada elemento
    $(".e").prepend("<h2>Resultados:</h2>");
    
    //Move conteúdos e ao começo da ordem = prependTo
    $("<p>Exemplos:</p>").prependTo($(".e p:first"));
});

