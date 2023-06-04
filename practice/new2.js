
'use strict'

// console.log(this);

// function myFn(){
//     console.log(this);
// }

// myFn();

// let myObj = {
//     name : "diilbagh",
//     age : 23,
//     myFun1 : function(){
//         let a = 5;
//         console.log(this);
//     }
// }

// myObj.myFun1();

let myObj2 = {
    name : "diilbagh",
    age : 23,
    myFun2 : function(){
        function myFn3(){
             console.log(this)
        }

         myFn3();

    }
}

myObj2.myFun2();
