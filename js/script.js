let firstName = prompt('Inserisci il tuo nome');
let lastName = prompt('Inserisci il tuo cognome');
let prefColor = prompt('Inserisci il tuo colore preferito');
let firstNumb = prompt('Inserisci un numero ad una cifra');
let secondNumb = prompt('Inserisci un altro numero ad una cifra');
let multiNumb = firstNumb * secondNumb;
let password = `${firstName}${lastName}${prefColor}${multiNumb}`;
document.getElementById('pass-gen').innerHTML = `La tua password generata è: <span class="text-primary">${password}</span>`;