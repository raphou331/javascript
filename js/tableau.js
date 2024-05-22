console.log("ok");

const table = ["pierre", "paul", "jacques"];
console.log(table, typeof table);
console.log(table[0], typeof table); //pierre
console.log(table[1], typeof table); //paul
console.log(table[2], typeof table); //jacques
console.log(table[3]); // undefined pas de valeurs 3 on commence a 0
console.log(table.length);

//ajoute avant le premier nom
table.unshift("guy");
console.log(table, typeof table);

//ajoute apres le dernier nom
table.push("marcel");
console.log(table, typeof table);

//enleve le dernier nom
table.pop();
console.log(table, typeof table);

//enleve le premier nom
table.shift();
console.log(table, typeof table);
//supprime un nom
// delete table[0];
// console.log(table, typeof table);

//ajoute en concatenation
const filles = ["josiane", "germaine"];
const toutLeMonde = filles.concat(table);
console.log(toutLeMonde, typeof toutLeMonde);

//ajoute un nom entre pierre et paul
table.splice(1, 0, "guy");
console.log(table, typeof table);
