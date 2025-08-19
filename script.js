let surfaceEl = document.getElementById("surface");
let nettoyageEl = document.getElementById("nettoyage");
let resultat = document.getElementById("resultat");

function prixHt(surface, nettoyage, optionVitre) {
  // 1. Prix de base
  let prixBase = surface * 1.5;

  // 2. Majoration selon la fréquence
  let prixFrequence = prixBase * nettoyage;

  // 3. Option vitres (+10%)
  let prixOption = optionVitre === 1 ? prixFrequence * 1.1 : prixFrequence;

  return prixOption; // prix HT
}

document.getElementById("calcul").addEventListener("click", () => {
  let surface = Number(surfaceEl.value);
  let nettoyage = Number(nettoyageEl.value);

  let optionRadio = document.querySelector(
    "input[name='option_vitre']:checked"
  );
  let optionVitre = optionRadio ? Number(optionRadio.value) : 0;

  let ht = prixHt(surface, nettoyage, optionVitre);
  let tva = ht * 0.2; // Calcul de la TVA (20%)
  let ttc = ht + tva; // Prix TTC = HT + TVA

  resultat.innerText = `Prix HT : ${ht.toFixed(2)} € | TVA : ${tva.toFixed(
    2
  )} € | Prix TTC : ${ttc.toFixed(2)} €`;
});
