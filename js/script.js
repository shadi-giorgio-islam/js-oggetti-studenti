// Oggetti
// - Creare un oggetto che descriva uno studente
// con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso il for in tutte le
// proprietà.
// - Creare un array di oggetti di studenti. Ciclare su
// tutti gli studenti e stampare per ognuno nome e
// cognome
// - Dare la possibilità all’utente attraverso 3 prompt
// di aggiungere un nuovo oggetto studente
// inserendo nell’ordine: nome, cognome e età.

// OGGETTO STUDENTE
var studente = {
  nome : 'Mario',
  cognome : 'Rossi',
  eta : '18'
};
// STAMPARE TUTTE LE PROPRIETA
for (var k in studente) {
  console.log(k, ': ', studente[k]);
};
// ARRAY STUDENTI
var studenti = [
  {
    nome : 'Mario',
    cognome : 'Rossi',
    eta : '18'
  },
  {
    nome : 'Giuseppe',
    cognome : 'Verdi',
    eta : '18'
  },
  {
    nome : 'Andrea',
    cognome : 'Bianchi',
    eta : '18'
  }
];
// NOME E COGNOME DI OGNI STUDENTE
for (var i = 0; i < studenti.length; i++) {
  for (var k in studenti[i]) {
    if (k == 'nome' || k == 'cognome') {
      console.log(k, ': ', studenti[i][k]);
    }
  }
}
// INSERIMENTO NUOVO STUDENTE
var nomeInput = prompt('inserisci nome');
var cognomeInput = prompt('inserisci cognome');
var etaInput = prompt('inserisci età');

var studenteInput = {
  nome : nomeInput,
  cognome : cognomeInput,
  eta : etaInput
}
studenti.push(studenteInput);
