//synchronous

// let fs = require('fs');

// console.log('first time')

// let fileData = fs.readFileSync('f1.txt');

// console.log('file 1 data' +  fileData)

// console.log('second time');

//program print  line wise this is sync

//async method

// let fs = require('fs');

// console.log('first time');

// fs.readFile('f1.txt', myFun)


// function myFun(err, fileData) {
//     if(err) {
//         console.log(err);
//     }
//     console.log('file data f1 ' + fileData);
// }



// console.log('second time');


// in output first time and second time print first and function file print in the last 

// <- Serial execution of async functions

// let fs = require('fs')

// console.log('First output')

// fs.readFile('f1.txt', myFun1)

// function myFun1(err, data) {
//     if(err){
//         console.log(err);
//     }

//     console.log('#' + data);
// }

// fs.readFile('f2.txt', myFun2)

// function myFun2(err, data) {
//     if(err){
//         console.log(err);
//     }

//     console.log('#' + data);
// }

// fs.readFile('f3.txt', myFun3)

// function myFun3(err, data) {
//     if(err){
//         console.log(err);
//     }

//     console.log('#' + data);
// }

// console.log('Second output');

// with this code we get random function execution of functions in asyc

// to organize the output we have call the function in inside one another according to our need

// let fs = require('fs')

// console.log('First output')

// fs.readFile('f1.txt', myFun1)

// function myFun1(err, data) {
//     if(err){
//         console.log(err);
//     }

//     console.log('#' + data);

//     fs.readFile('f2.txt', myFun2) //like this 
// }



// function myFun2(err, data) {
//     if(err){
//         console.log(err);
//     }

//     console.log('#' + data);

//     fs.readFile('f3.txt', myFun3)  // like this
// }



// function myFun3(err, data) {
//     if(err){
//         console.log(err);
//     }

//     console.log('#' + data);
// }

// console.log('Second output');

//now we always get organize output

//   <----   Promises  ---->

//A promise is a  javascript object that link producing code and consuming code



// let myPromise = new Promise(function(myResolve,myReject){
//     let x = 5;
//     let y = 6;

//     if(x === y) {
//         myResolve('the values are equal');
//     } else {
//         myReject('the values are not equal');
//     }
// })

// myPromise.then(function(result){
//     console.log(result);
// })

// myPromise.catch(function(result){
//      console.log(result);
// })
 
//second way

// function myfun(result){
//     console.log(result);
// }

// let myPromise = new Promise(function(myResolve,myReject){
//     let x = 5;
//     let y = 6;

//     setTimeout(() => {
//         if(x === y) {
//             myResolve('the values are equal');
//         } else {
//             myReject('the values are not equal');
//         }
//     }, 3000);
// });

// myPromise.then(
//     function(value){
//          myfun(value);
//     },
//     function(error){
//         myfun(error);
//     }
// );

//Asyc await

//they make promises easier to write

//example coffee order in coffee shop

// function placeOrder(drink){

//     return new Promise(function(resolve, reject){
//         if(drink === 'coffee'){
//             resolve('order for coffee')
//         }else {
//             reject('other orders rejected')
//         }
//     })
// }


// function processOrder(order){
//     return new Promise(function(resolve){
//         console.log('order is being processed')
//         resolve(`${order} and is served `)
//     })
// }

// //chaning promise

// placeOrder('coffee').then(function(orderPlaced){
//     console.log(orderPlaced)
//     let orderIsprocessed = processOrder(orderPlaced)
//     return orderIsprocessed
// }).then(function(processedOrder){
//     console.log(processedOrder)
// }).catch(function(err){
//     console.log(err)
// })

// like i see this is complicated we can simplyfied it by asyc await

//Asyc Await -keywords

// function placeOrder(drink){

//         return new Promise(function(resolve, reject){
//             if(drink === 'coffee'){
//                 resolve('order for coffee')
//             }else {
//                 reject('other orders rejected')
//             }
//         })
//     }
    
    
//     function processOrder(order){
//         return new Promise(function(resolve){
//             console.log('order is being processed')
//             resolve(`${order} and is served `)
//         })
//     }
    
//     //instead of promise chaning used asyc await

//    async function serveTheOrder() {
//         let orderPlaced = await placeOrder('coffee')
//         console.log(orderPlaced) 

//         let processedOrder = await processOrder(orderPlaced);
//         console.log(processedOrder)

    
//     }

//     serveTheOrder();

// async function f() {
//     let result = 'new!';
//     let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('done!'), 1000);
//     });
   
//    result = await promise;
   
//    console.log(result);
//    }
   
//    f();

// const myPromise = () => Promise.resolve('I have resolved!');

// function firstFunction() {
//     myPromise().then(res => console.log(res));
//     console.log('second');
//    }
   
//    async function secondFunction() {
//     console.log(await myPromise());
//     console.log('second');
//    }
   
//    firstFunction();
//    secondFunction();

// var p = new Promise((resolve, reject) => {
//     reject(Error('Promise Fails!'))
//     })
//     p.catch(error => console.log(error.message))
//     p.catch(error => console.log(error.message))

const firstPromise = new Promise((res, rej) => {
    setTimeout(res, 500, 'one');
   });
   
   const secondPromise = new Promise((res, rej) => {
    setTimeout(res, 100, 'two');
   });
   Promise.race([firstPromise, secondPromise]).then(res => console.log(res));