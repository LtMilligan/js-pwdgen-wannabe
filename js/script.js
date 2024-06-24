// let firstName = prompt('Inserisci il tuo nome');
// let lastName = prompt('Inserisci il tuo cognome');
// let prefColor = prompt('Inserisci il tuo colore preferito');
// let firstNumb = prompt('Inserisci un numero ad una cifra');
// let secondNumb = prompt('Inserisci un altro numero ad una cifra');
// let multiNumb = firstNumb * secondNumb;
// let password = `${firstName}${lastName}${prefColor}${multiNumb}`;
// // document.getElementById('pass-gen').innerHTML = `La tua password generata è: <span class="text-primary">${password}</span>`;
// document.getElementById('pass-gen').innerHTML = password;


function askPrompt(message) {
    let data = prompt(message);
    if (data == '') {
        alert('Il campo non può essere vuoto');
        return askPrompt(message);
    }
    return data;
};

let generatePassword = () => {
    const firstName = askPrompt('Inserisci il tuo nome');
    if (!firstName) return false;
    const lastName = askPrompt('Inserisci il tuo cognome');
    if (!lastName) return false;
    const prefColor = askPrompt('Inserisci il tuo colore preferito');
    if (!prefColor) return false;
    const firstNumb = askPrompt('Inserisci un numero ad una cifra');
    if (!firstNumb) return false;
    const secondNumb = askPrompt('Inserisci un altro numero ad una cifra');
    if (!secondNumb) return false;
    const multiNumb = firstNumb * secondNumb;
    const password = `${firstName}${lastName}${prefColor}${multiNumb}`;
    document.getElementById('pass-gen').innerHTML = password;
}

