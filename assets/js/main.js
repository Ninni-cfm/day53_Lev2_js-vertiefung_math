/********************************************************************************************
JS Vertiefung CodeFlow Übung lev2_1: Math.round() toFixed() - Aufgabenstellung

Erstell eine Funktion roundTo(Zahl, Genauigkeit){...}, die eine Zahl auf genaue Dezimalstellen rundet.

Die folgenden Methoden könnten für Dich nützlich sein:
    * toFixed()
    * oder toPow(), für alle, die sich für Mathematik interessieren.

Um es zu testen, schreibe:
console.log(roundTo(3.1415926535, 5)); // 3.14159
*/
function roundTo(zahl, genauigkeit) {
    return zahl.toFixed(genauigkeit);
}
function toPow(zahl, exponent) {
    return Math.pow(zahl, exponent)
}
console.log(roundTo(Math.PI, 5)); // 3.14159;
console.log(roundTo(Math.E, 5)); // 2.71828;
console.log(toPow(5, 2)); // 25;
console.log(toPow(5, 4)); // 25;


/********************************************************************************************
JS Vertiefung CodeFlow Übung lev2_2: Math.random() Math.floor() Game - Aufgabenstellung

Schreibe ein kleines Spiel/Programm – das wie folgt funktioniert:

    * Das Programm “denkt” sich eine Zahl zwischen 1-10 mithilfe von Math.Random aus und Du musst sie erraten.
    * Nach Eingabe deiner Zahl sagt dir das Programm (in der Konsole), ob du richtig oder falsch geraten hast.

Hinweis: In der Ergebnisvorschau wird die Methode prompt() verwendet.
*/
function guessNumber() {
    let rnd = Math.floor(Math.random() * 10) + 1;
    let guess = Number(document.getElementById("numGuess"));
    document.getElementById("guessResult").innerHTML =
        (rnd == guess ? "Richtig geraten!" : `Falsch geraten! Die richtige Zahl war ${rnd}!`);
}

/********************************************************************************************
JS Vertiefung CodeFlow Übung lev2_3: Math.min Math.max - Aufgabenstellung

Vergleiche das Alter mit Math.min. Wer ist der Jüngste in jeder Gruppe?
    * Deklariere eine Funktion minimalWerte
    * Im Funktionskörper deklarieren wir 3 Variablen, z.B. let minEltern = Math.min(66, 55);
        o dasAlterDerEltern mit zwei Werten: dem Alter deiner Eltern z.B 66, 55
        o dasAlterDerGeschwister mit Werten: Dein Alter und das Deiner Geschwister. z.B 26, 16, 18
        o dasAlterDerFussballspieler mit Werten: Das Alter von Fußballspieler Cristiano Ronaldo, 
          Lionel Messi, Neymar da Silva Santos Júnior, Kevin de Bruyne, Harry Kane, Luka Modrić,
          Robert Lewandowski. Du musst die Daten vorher recherchieren.
    * Vergleiche zuletzt alle Variablen miteinander und gib das kleinste Alter in der Konsole aus.
*/
function minimalWerte() {
    let minEltern = Math.min(83, 69);
    let minGeschwister = Math.min(57, 55, 52, 50);
    let minFussballer = Math.min(
        36,  // Cristiano Ronaldo *05.02.1985
        34,  // Lionel Messi *24.06. 1987
        29,  // Neymar da Silva Santos Júnior *05.02.1992
        30,  // Kevin de Bruyne *28.06.1991
        28,  // Harry Kane *28.07.1993
        26,  // Luka Modrić *09.09.1985
        31   // Robert Lewandowski *21.08.1988
    );

    console.log({ minEltern });
    console.log({ minGeschwister });
    console.log({ minFussballer });
    console.log("minTotal: ", Math.min(minEltern, minGeschwister, minFussballer));
}
minimalWerte();

