let nombre = 10;
console.log("la valeur de la variable est : ", nombre);

// let foisdeux = nombre * 2;

// console.log("la valeur de la variable foisDeux est : " ,foisdeux);

let message = "une chaine de caractere";
console.log(message);

// un booléen
let vraiFaux = true;
console.log(vraiFaux);

// tableau d'entiers
let tableauEntiers = [1, 2, 3, 4, 5];
console.log(tableauEntiers);

// tableau chaines (string)
let tableauChaine = ["Pierre", "Paul", "Jacques"];
console.log(tableauChaine);

// tableau mélangé
let tableauMelange = ["Toto", "12", "Truc"];
console.log(tableauMelange);

// declaration + affectation
let n = 2;
// affectation
n = 3;
console.log(n);

if (true) {
  var tata = "tata";
}
console.log(tata);

console.log(typeof nombre); //number
console.log(typeof message); //string
console.log(typeof vraiFaux); //boolean
console.log(typeof tableauEntiers); //object

let muche;
console.log(typeof muche); //undefined

if (true) {
  // la variable toto n est accessible que dans le bloc if
  let toto = "toto";
}
console.log(toto);
