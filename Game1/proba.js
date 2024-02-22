var i = 0;
var tableau = [];

document.getElementById("envoyer-1").addEventListener("click", function () {
  var taille = document.getElementById("taille").value;
  // voici comment recuperer la valeur d'un input en js

  document.getElementById("envoyer-2").addEventListener("click", function () {
    if (i <= taille) {
      var chiffre = document.getElementById("tab").value;
      tableau.push(chiffre);
      i++;
    } else {
      // signifie qu'on a toutes nos valeurs
      console.log(tableau);
      document.getElementById("envoyer-2").value = "Generate";
      document
        .getElementById("envoyer-2")
        .addEventListener("mouseover", function () {
          document.getElementById("moyenne").textContent = moyenne(tableau);
          document.getElementById("variance").textContent = variance(tableau);
          document.getElementById("ecart-type").textContent = ecartype(tableau);
        });
    }
  });
});

document.getElementById("reset-1").addEventListener("click", function () {
  document.location.reload(true);
});

document.getElementById("reset-2").addEventListener("click", function () {
  document.location.reload(true);
});

// fonction  calclul de moyenne
function moyenne(tableau) {
  var sum = 0;
  for (var i = 0; i < tableau.length; i++) {
    sum += parseInt(tableau[i]);
  }

  calcul = sum / tableau.length;
  return calcul;
}

// fonction calcul de variance
function variance(tableau) {
  var moy = moyenne(tableau);
  var sum = 0;
  for (var i = 0; i < tableau.length; i++) {
    sum = parseInt(tableau[i] - moy) * (parseInt(tableau[i]) - moy);
  }
  sum = sum / tableau.length;
  return sum;
}

// fonction ecart type*
function ecartype(tableau) {
  var a = variance(tableau);
  return Math.sqrt(a);
}
