// let kilometri;
// let i= 0;
// while(isNaN(kilometri)){
//   if ( i < 3){
//     kilometri =parseInt(prompt('Inserisci kilometri'));
//     i++;
//   }
//     else{
//     kilometri =parseInt(prompt('Testo sbagliato'));
//   }
// }

const kilometri =parseInt(prompt('inserisci kilometri'));
const eta = parseInt(prompt('inserisci eta'));


// if (!(isNaN(kilometri)) && !(isNaN(eta))) {
if (!((isNaN(kilometri)) || (isNaN(eta)))  && (kilometri != 0) && (eta != 0)) {

  let prezzoBiglietto= kilometri * 0.21;
// console.log(prezzoBiglietto);






if (eta <= 17 ) {

sconto = (prezzoBiglietto * 20) / 100 ;
// console.log(sconto);
prezzoBiglietto = (prezzoBiglietto - sconto).toFixed(2);
// console.log('Prezzo per minorenni ' + prezzoBiglietto + '€');
// document.writeln('Prezzo per minorenni ' + prezzoBiglietto + '€');

document.getElementById("my-id").innerHTML = "Il prezzo da pagare per minorenni è di " + prezzoBiglietto + ' €';

}
 else if (eta > 65) {
    sconto = (prezzoBiglietto * 40) / 100;
    // console.log(sconto);
    prezzoBiglietto = (prezzoBiglietto - sconto).toFixed(2);
    // console.log('Prezzo per over 65 ' + prezzoBiglietto + '€');
    // document.writeln('Prezzo per over 65 ' + prezzoBiglietto + '€');

    document.getElementById("my-id").innerHTML = "Il prezzo da pagare per over 65 è di " + prezzoBiglietto + ' €';

 }
  else{
      prezzoBiglietto = (prezzoBiglietto).toFixed(2);
    //   console.log('Paga prezzo intero ' + prezzoBiglietto + '€');
    //   document.writeln('Prezzo pieno' + prezzoBiglietto + '€');

      document.getElementById("my-id").innerHTML = "Il prezzo da pagare è di " + prezzoBiglietto + ' €';

  }

}
  else{
    document.getElementById("my-id").innerHTML = "I dati inseriti sono errati  " ;

}