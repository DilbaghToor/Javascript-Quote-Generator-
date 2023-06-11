$(document).ready(function(){
    $("#test").css("color", "white");
    $("#test").css("background", "black");

    $("ul li").css("list-style","none");

    $("h2, p").css("font-size", "30px");
    
    $("li:eq(4)").css("font-size", "30px");

 //    $("#test").hover(function(){
 //      $(this).hide();
 //    },function(){
 //     $(this).show();
 //    });
     
 $('#test').click(function(){
     $("ul").toggle();
 })
 });
