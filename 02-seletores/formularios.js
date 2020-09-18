$(function(){
    
   //button selector
   var input = $(":button").css({
      background:"yellow",
      border: "3px red solid"
   });
   
   //checkbox selector
   var input = $("form input:checkbox").wrap("<span></span>").parent().css({
       background: "yellow",
       border: "3px red solid"
   });
   
   //checked selector
//   var countChecked = function(){
//     var n = $("input:checked").length;
//     $("div:checado").text(n+(n === 1 ? " is" : " are") + " checked!");
//   };
//   countChecked();
   
   //disabled selector
   //$("input:disabled").val("this is it");
   
   //enabled selector
   //$("input:enabled").val("this is not it");
   
   //file selector
   var input = $("input:file").css({
      background: "yellow",
      border: "3px red solid"
   });
   
   //focus selector
   $("#content").delegate("*", "focus blur", function(){
      var elem = $(this);
      setTimeout(function(){
          elem.toggleClass("focused", elem.is(":focus"));
      }, 0);
   });
   
   //image selector
   var input = $("input:image").css({
      background:"yellow",
      border: "3px red solid"
   });
   
   //input selector
   var allInputs = $(":input");
   var formChildren = $("form > *");
   $("#messages").text("Found "+allInputs.length + " inputs and the form has " +
           formChildren.length + " children." );
   
   //password selector
   var input = $("input:password").css({
      background:"yellow",
      border: "3px red solid"
   });
   
   //radio selector
   var input = $("form input:radio").wrap("<span></span>")
           .parent().css({
            background:"yellow",
            border: "3px red solid"   
   });
   
   var input = $("input:reset").css({
      background:"yellow",
      border: "3px red solid"
   });
   
//   $("input[type=checkbox]" ).on( "click", countChecked);
   
   //$("div").text("Para esse tipo, jQuery achou " + input.length + ".");
   
   $("form").submit(function(event){
       event.preventDefault();
   });
});