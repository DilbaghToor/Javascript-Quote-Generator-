// // Jquery fade
// $(document).ready(function(){

//     $("h1").on({
//         click : function(){
//             $("#test1").fadeIn();
//             $("#test2").fadeIn("slow");
//             $("#test3").fadeIn(3000);
//         }
//     })
// });

// $(document).ready(function(){

//     $("h1").on({
//         click : function(){
//             $("#test1").fadeToggle();
//             $("#test2").fadeToggle("slow");
//             $("#test3").fadeToggle(3000);
//         }
//     })
// });

// JQuery Slide 

// $(document).ready(function(){

    // $("h1").on({
    //     click : function(){
    //         $("#test1").slideUp();
    //         $("#test2").slideUp("slow");
    //         $("#test3").slideUp(3000);
            
    //     }
    // })
    // $("h1").on({
    //     click : function(){
    //         $("#test1").slideToggle();
    //         $("#test2").slideToggle("slow");
    //         $("#test3").slideToggle(3000);
            
    //     }
    // })
// });

// JQuery Animate

// $(document).ready(function(){
//     $("h1").on({
//         click : function(){
//             $("#test3").animate({
//                 top : '300px',
//                 // opacity : '0.2',
//                 height : '400px'
//             });
           
            
//         }
//     })



// });

// JQuery Callback

// $(document).ready(function(){
//     $("h1").on({
//         click : function(){
//             $("#test3").hide(5000,function(){
//                 alert("Now the text3 div is hidden");
//             });
           
            
//         }
//     })



// });

//without call back we will see error alert comes first and hiding

// $(document).ready(function(){
//     $("h1").on({
//         click : function(){
//             $("#test3").hide(5000);
//             alert("Now the text3 div is hidden");
           
            
//         }
//     })

// });

//JQuery Method Chaning

// $(document).ready(function(){

//     $("h1").click(function(){
//         $("#test1,#test2,test3").slideUp(1000).slideDown(1000);

//     })
// });


// JQuery Html

// value get krn da trika
// $(document).ready(function(){
//     $("h1").click(function(){
//         alert("My Name is " + $("#temp").val());
//     })
// })

// set value 


// $(document).ready(function(){
//     $("h1").click(function(){
//         $("h2").text("Toor singh");
//     })
// })

//attr() add atrribute method

// $(document).ready(function(){
//     $("h1").click(function(){
//         $("#link").attr("href","https://www.google.com/");
//     })
// })

// //set mulitple attr() at a time

// $(document).ready(function(){
//     $("h1").click(function(){
//         $("#link").attr({
//             "href" : "https://www.google.com/",
//             "target" : "_blank"
//         });
//     })
// })

// JQuery CSS Manipulation

// $(document).ready(function(){
//     $("h1").click(function(){
//         $("#test1, #test2, #test3").addClass("tempclass");
//     })
// })




