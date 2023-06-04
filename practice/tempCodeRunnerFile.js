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