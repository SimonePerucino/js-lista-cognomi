//chiedi all'utente il cognome
var cognomeUtente = prompt("inserisci il tuo cognome");
// inseriscilo in un array con altri cognomi
var listaCognomi = ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'];
listaCognomi.push(cognomeUtente);
for (var i = 0; i < listaCognomi.length; i++) {
    listaCognomi[i] = listaCognomi[i].toLowerCase()
}
//stampa la lista ordinata alfabeticamente
listaCognomi.sort();
console.log(listaCognomi);
//stampa anche la posizone in cui l'utente si trova

var PosizioneUtente = 0
for (var i = 0; i < listaCognomi.length; i++) {
    if (listaCognomi[i] == cognomeUtente.toLowerCase()) {
        PosizioneUtente = i
    }
}

document.getElementById("lista").innerHTML = listaCognomi.join(", ")
document.getElementById("posizione").innerHTML = "la posizione del tuo cognome è " + PosizioneUtente
console.log("la posizione del tuo cognome è " + PosizioneUtente)