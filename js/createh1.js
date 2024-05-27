const body = document.querySelector("body"); //il n y qu' une balise body
// // console.log(body);

// function createH1(titre) {
//   //titre est un parametre de la fonction
//   const h1 = document.createElement("h1");
//   h1.textContent = titre;
//   return h1;
// }
// // console.log(h1);

// body.appendChild(createH1("Titre")); //"titre" est un argument passé a la fonction
// body.appendChild(createH1("Titre 1"));
// body.appendChild(createH1("Titre 2"));

function mySection(titre, texte) {
  const h1 = document.createElement("h1");
  h1.textContent = titre;
  const p = document.createElement("p");
  p.textContent = texte;
  const section = document.createElement("section");
  section.appendChild(h1);
  section.appendChild(p);
  return section;
}

const uneSection = mySection("un titre", "un paragraphe...");
body.appendChild(uneSection);
console.log(uneSection);
