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
let prEtà = prompt("Scivi la tua età");
let età = prEtà;
if (età < 13) {
    alert("Puoi vedere solo film con classificazione PG.");
} else {
    if ((età = 13 && età < 17)) {
        alert("Puoi vedere film con classificazione PG e PG-13.");
    } else {
        alert("Puoi vedere tutti i film.");
    }
}
