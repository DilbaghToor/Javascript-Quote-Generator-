
// const isEven = (n) => {
//     return n%2 == 0 ? "yes" : "no" ;
// }

// let printR = (evenf, x) =>{
//     const ans = evenf(x);
//     console.log("the number is", ans);
// }

// printR(isEven, 7);

//map

// const rupess = [1000, 2000, 3000, 4000, 5000];

// const intoDollor = rupess.map(function myf(num) {
//    return num/80 + "$";
// } )

// console.log(rupess);
// console.log(intoDollor);

// const singer = ["karan", "ammy", "r nait", "khan bhani", "sidhu mossewala"];

// const ans = singer.find((singer) => singer === "sidhu mossewala");

// console.log(ans);

// const shortSerach = singer.filter((singer) => singer.length < 10);

// console.log(shortSerach);

// const obj = [
//     { name : "dilbagh", marks: 91 },
//     { name : "gurbhej", marks: 85 },
//     { name : "navi", marks: 75 },
//     { name : "harman", marks: 92 },
//     { name : "jassi", marks: 88 },
//     { name : "aman bomb", marks: 9 },
// ];


// const goodMarks = obj.filter((obj) => obj.marks > 90);

// console.log(goodMarks);

// const check = obj.every((obj) => obj.marks < 95);

// console.log(check);


// const check1 = obj.some((obj) => obj.marks > 95);

// console.log(check1);

//Reduce 

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let ans = num.reduce(function(acc, value){
//  return  acc * value;
// }, 1);

// console.log(ans);

// const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];

// let totalAmount = transactions.filter(function(obj){
//     return obj > 0;
// }).reduce(function(accu, value){
//     return accu + value;
// }, 0);

// console.log(totalAmount);

// let sum = 0;
// let arr = [10,15,20,30];  
// arr.forEach(function myFunction(element) {  sum = sum + element;  });  
// console.log(sum);

// console.log(this);

// function displayThis(){
//     console.log(this);
// }

// displayThis();

// let myObj1 = {
//     name : "diilbagh",
//     age : 23,
//     myFun1 : function(){
//         let a = 5;
//         console.log(this.myFun);
//     }
// }

// // myObj1.myFun1()

// let myObj2 = {
//     name : "diilbagh",
//     age : 23,
//     myFun2 : function(){
//         function myFn3(){
//              console.log(this)
//         }

//          myFn3();

//     }
// }


// myObj2.myFun2();

// 'use strict'

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

// let myObj2 = {
//     name : "diilbagh",
//     age : 23,
//     myFun2 : function(){
//         function myFn3(){
//              console.log(this)
//         }

//          myFn3();

//     }
// }

// myObj2.myFun2();

// console.log('hello');

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
