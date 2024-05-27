const nombre = 10;
console.log(multiplier(3, nombre)); //3 est un argument
console.log(multiplier(10, 10)); //3 est un argument

//une fonction toute simple
function foisDeux() {
  console.log(nombre * 2);
}
// foisDeux();

//une fonction avec parametre
function multiplier(a, n) {
  //a est un parametre de la fonction
  //a = 3
  //n = nombre
  return a * n;
}
