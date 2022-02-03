let i =0;

let dian = setInterval(() =>{
  i++;
  if(i===8){
    clearInterval(dian);
  }
  console.log(i);
}, 1000);

setTimeout(() => {
  console.log('5s');
}, 5000);