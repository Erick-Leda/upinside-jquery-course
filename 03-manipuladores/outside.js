$(function(){
    
    var title = $("title").text();
    
    //Encapsula um elemento para colocar um conteúdo
    $(".j").before("<h1>"+ title +"</h1>");
    
    //Encapsula o conteúdo para inserir em um elemento
    $("<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. \n\
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>").insertBefore($(".j"));
    
    var old_text = "<p>Lorem Ipsum has been the industry's standard <b>dummy text ever since the 1500s</b>, \n\
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived \n\
        not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. \n\
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and \n\
        more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>";
    
    //Insere o argumento após o seletor = after
    $(".j").after(old_text);
    $(".j").after("<a class='a' href='#'>Continue Lendo...</a>");
    
    //Insere o seletor após o argumento = insertAfter
    $(".a").insertAfter("p:last");
});
