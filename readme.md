Explication du projet :

Le projet s'appelle "Mon bureau tout propre" un simulateur de prix est via un formulaire qui permet le calcul d'un service de netoyage en fonction de plusisuers choix comme l'option vitre et la fréquence de nettoyage.
Pour ensuite afficher le prix ttc, la tva et le prix ht.

Déroulement du projet :

1er étape : Crée un repository sur github et avec visual studio le dossier contenant le projet.

J'ai commencer par créer les pages html css et js, l'html contient mon formulaire anisi que les liens vers le css et le javascript.

La strctutre du formulaire était imposé par le cahier des charges : - La surface devait être un champ de text avec remplissage manuel -> input type = "number" - La fréquence est au format d'une liste déroulante -> "select" - L'option est au format radio (case à cocher) -> input type = "radio"

Concernant le javascript :

Tout dabord il faut récuperer les champs renseigner dans le formulaire pour pouvoir les appliquer au calcul via leur Id -> document.getElementById("")

Ensuite nous allons passer au calcul, en créant les formules auquel s'appliquront les valeurs que nous avons saisie dans le formulaire et validé avec le boutton soumetre -> document.getElementById("calcul").addEventListener("")

Le reste permettra de verifier si l'option à était saisie et de faire le calcul de la tva pour ensuite être affiché via -> resultat.innerText = `Prix HT : ${ht.toFixed(2)} € | TVA : ${tva.toFixed(
    2
  )} € | Prix TTC : ${ttc.toFixed(2)} €`;
