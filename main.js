// 1. *Il Caffè*: Chiedi all'utente quante tazze di caffè ha venduto oggi. Calcola il totale dei guadagni per il giorno e visualizza un messaggio con il risultato.
// let caffèVenduto = prompt("Quante tazze di caffè hai venduto oggi?");
// let totVenduti = caffèVenduto;
// let costoCaffè = 2;
// let guadagni = caffèVenduto * costoCaffè;
// alert(guadagni);

// 2. *Il Calcolatore di Età*: Chiedi all'utente il loro anno di nascita e calcola la loro età. Visualizza un messaggio con il risultato.
// let annoNascita = prompt("In che anno sei nato?");
// let anno = annoNascita;
// let età = 2023 - anno;
// alert(età);

// 3. *Il Convertitore di Temperatura*: Chiedi all'utente una temperatura in Fahrenheit, convertila in Celsius e visualizza il risultato.

// let domandaTemperatura = prompt(
//     "Quanti gradi ci sono oggi? (rispondi in Fahrenheit)"
// );
// let temperaturaFahrenheit = domandaTemperatura;
// let conversioneCelsius = (temperaturaFahrenheit - 32) / 1.8;
// alert("La temperatura in Celsius è di: " + conversioneCelsius);

// 624. *Il Calcolatore di Voti*: Chiedi i voti del test di 3 studenti, calcola la media e visualizza il risultato.

// let domandaStudente1 = prompt(
//     "Che voto ai preso nel test di biologia? (studente 1)"
// );
// let domandaStudente2 = prompt(
//     "Che voto ai preso nel test di biologia? (studente 2)"
// );

// let domandaStudente3 = prompt(
//     "Che voto ai preso nel test di biologia? (studente 3)"
// );
// 22;
// let votoStud1 = parseInt(domandaStudente1);
// let votoStud2 = parseInt(domandaStudente2);
// let votoStud3 = parseInt(domandaStudente3);
// let mediaVoti = (votoStud1 + votoStud2 + votoStud3) / 3;
// alert("La media dei voti è: " + mediaVoti);

// 5. *Il Calcolatore di Mancia*: Chiedi all'utente il totale del conto e la percentuale di mancia. Calcola la mancia e visualizza il risultato.
// let domTotConto = prompt("Qual'è il totale del conto?");
// let domPercentualeMancia = prompt("Qual'è la percentuale della mancia?");
// let totaleConto = domTotConto;
// let percentualeMancia = (parseFloat(domPercentualeMancia6060) / 100) * 100;
// let mancia = (percentualeMancia / 100) * totaleConto;
// alert(mancia);

// 1. *La Serata al Cinema*: Chiedi all'utente la loro età. Se hanno meno di 13 anni, dì loro che possono vedere solo film con classificazione PG. Se hanno 13 anni o più ma meno di 17, dì loro che possono vedere film con classificazione PG e PG-13. Se hanno 17 anni o più, dì loro che possono vedere tutti i film.
// let prEtà = prompt("Scivi la tua età");
// let età = prEtà;
// if (età < 13) {
//     alert("Puoi vedere solo film con classificazione PG.");
// } else {
//     if ((età = 13 && età < 17)) {
//         alert("Puoi vedere film con classificazione PG e PG-13.");
//     } else {
//         alert("Puoi vedere tutti i film.");
//     }
// }

//2. *Il Calcolatore di Sconti*: Chiedi all'utente il prezzo originale di un articolo e la percentuale di sconto. Calcola l'importo dello sconto e il prezzo finale. Se la percentuale di sconto è superiore al 50, avvisa l'utente che si tratta di un ottimo affare.
// let domPrezOrig = prompt("Qual'è il prezzo originale di questo articolo?");
// let domPercArt = prompt("Qual'è la percentuale di sconto?");
// let prezzOriginale = domPrezOrig;
// let percentualeSconto = (parseFloat(domPercArt) / 100) * 100;
// let importoSconto = (prezzOriginale * percentualeSconto) / 100;
// let prezzoFinale = prezzOriginale - importoSconto;
// alert(prezzoFinale);
// if (percentualeSconto > 50) {
//     alert("è un ottimo affare");
// }
// 10;
//3. *Il Calcolatore di BMI*: Chiedi all'utente il loro peso (in chilogrammi) e la loro altezza (in metri). Calcola il loro BMI (peso / altezza^2). Se il loro BMI è inferiore a 18.5, dì loro che sono sottopeso. Se è tra 18.5 e 24.9, dì loro che hanno un peso normale. Se è 25 o superiore, dì loro che sono sovrappeso.
// let domPeso = prompt("Qual'è il tuo peso ? (in chilogrammi)");
// let domAltezza = prompt("Qual'è la tua altezza? (in metri)");
// let peso = parseFloat(domPeso);
// let altezza = parseFloat(domAltezza);
// let bmi = peso / (altezza * altezza);

// if (bmi < 18.5) {
//     alert("sei sottopeso");
// } else {
//     if (bmi >= 18.5 && bmi <= 24.9) {
//         alert("sei nella norma");
//     } else {
//         alert("sei sovrappeso");
//     }
// }

// 4. *Il Verificatore di Anno Bisestile*: Chiedi all'utente un anno. Se l'anno è divisibile per 4 e non è divisibile per 100, o se l'anno è divisibile per 400, allora è un anno bisestile. Altrimenti, non è un anno bisestile. Dì all'utente se l'anno che hanno inserito è un anno bisestile o no.

// let domAnno = prompt("Inserisci un anno");

// 5. *L'Assegnatore di Voti*: Chiedi all'utente il loro punteggio del test. Se il loro punteggio è 90 o superiore, assegna loro un 'A'. Se è 80 o superiore ma inferiore a 90, assegna loro un 'B'. Se è 70 o superiore ma inferiore a 80, assegna loro un 'C'. Se è 60 o superiore ma inferiore a 70, assegna loro un 'D'. Se è inferiore a 60, assegna loro un 'F'.
let domPunteggio = prompt("Qual'è stato il tuo punteggio sul test?");
let punteggio = Number(domPunteggio);

if (punteggio >= 90) {
    alert("A");
} else {
    if (punteggio >= 80 && punteggio < 90) {
        alert("B");
    }

    if (punteggio >= 70 && punteggio < 80) {
        alert("C");
    }

    if (punteggio >= 60 && punteggio < 70) {
        alert("D");
    } else {
        alert("E");
    }
}
