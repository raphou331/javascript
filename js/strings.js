// concatenation
const maChaine = "I love coding ";
console.log(maChaine, typeof maChaine);

const withJs = "with Javascript.";

let message = maChaine + withJs;
console.log(message, typeof message);

const year = "2024";

message = message + "since " + year;
console.log(message, typeof message);

const prenom = "Toto";
const age = 10;
const message2 = "je m 'appelle " + prenom + " et j' ai " + age + " ans ";
console.log(message2, typeof message2);
const message3 = `Je m'appelle ${prenom} et j'ai ${age} ans.`; // template string
console.log(message3, typeof message3);

const text = "How are you doing today ?";
const myArray = text.split(" ");
console.log(myArray, typeof myArray);
console.log(text.length);

const visit = "Visit Microsoft";
const visitReplace = visit.replace("Microsoft", "W3Schools");
console.log(visitReplace, typeof visitReplace);

console.log(visit.toUpperCase());
console.log(visit[6]);
