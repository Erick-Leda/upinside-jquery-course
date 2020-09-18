$(function (){
    //Envolve todos os elementos parágrafos com uma div
    //$("p").wrap("<div>");
    
    //Envolve todos os elementos com uma div
    $("p").wrapAll("<div>");
    
    //Envolve todos os elementos internos de uma estrutura html com span
    $("p").wrapInner("<span>");
    
    //Remove as tags que estão envolvendo o elemento selecionado
    $("span").unwrap("p");
    
    $("span").wrap("<h2>");
});