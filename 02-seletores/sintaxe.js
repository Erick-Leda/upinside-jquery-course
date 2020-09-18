$(function(){
    var count=0;
    $(".class").on("click", function(e){
        console.info(event);
        console.info(this);
        console.info($(this));
        count++;
        console.info(count);
    });
    
    $(".clapass").on("click", function(e){
        var element = $(this);
        setTimeout(function(){
            element.fadeOut();
        }, 2000);
    }).text("Ok").css("color", "green");

//    var text= $(".class").text();
//    console.info(text);
    
//    $("#pertaqui").click(function(){
//        $("#jojo").fadeIn("slow", function(){
//            console.warn("Animation complete");
//        });
//    });
});

