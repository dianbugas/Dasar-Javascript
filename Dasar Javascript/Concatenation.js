let firstname = 'dian';
let number = 1;
let yes = true;
let isNull = null;
let people = [
  {username: 'dian'},
  {username: 'bugas'},
  {username: 'wajok'},
];

let person = {username : 'dian bugas', age:25, name: 'nailah'};
console.log(person.name);
person.age = 78;
console.log(person);

people[2].username = 'rajalai';
console.log(people);
// ================================
people.unshift({username: 'dedi'}); /* push, unshift */
console.log(people); 


console.log(people.length);
console.log(people.pop()); 

console.log(Array.isArray(people));