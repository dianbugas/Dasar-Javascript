function sum(x, y){
  // return x*y;
  return times(2,4);
  
//   it will naever return tidak dijalankan lagi setelah return
  return 'ancs';
}

function times(x, y){
  return x* y;
}

// sum(2*5);
sum();

// row funcuting
const returnSomething = () =>{
  return 'Something';
};

returnSomething();

// ketika untuk menunggu
setTimeout(function () {
  console.log('adasdasdas');
}, 300);


setTimeout(() => console.log("IT'S .3s", 300);
