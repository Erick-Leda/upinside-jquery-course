$(function(){
    $(".jquery_essentials").html("jQuery Essentials!");
    
    console.group("Mensagens Gerais");
    console.log("jQuery Essentials");
    console.info("o jquery foi carregado com sucesso");
    console.warn("um alerta");
    console.error("Um erro");
    console.groupEnd();
    
    var cadastro = false;
    
    console.group("Cadastro de Usuários");
    console.info("Cadastro Iniciado");
    
    if  (cadastro === true){
        console.log("Cadastro Realizado");
    } else{
        console.warn("Erro ao cadastrar");
    }
    console.groupEnd();

});