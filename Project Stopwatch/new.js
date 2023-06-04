function rep(fn){
  fn();
  fn();
  fn();
};

function printhello(){
  console.log("Hello");
}

rep(printhello);