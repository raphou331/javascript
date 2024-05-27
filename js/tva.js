// ecrire une fonction qui calcule le prix ttc connaissant le prix HT
// le prix TTC est egal a HT + HT*tva
// ex: prix HT = 5€
// TVA = 20% = 20/100 = 0.2
//TTC = HT + HT * TVA = 1.2*HT
//HT => HT * 1.2

const prixHt = 10;
const tauxTva = 1.2;

console.log(ttc(prixHt, tauxTva));

function ttc(prix, tva) {
  return prix * tva;
}
