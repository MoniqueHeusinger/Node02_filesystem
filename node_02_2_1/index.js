// node filesystem importieren
const fs = require("fs");

// Daten aus data.json importieren
const data = require("./data.json");

// Daten formatieren in gewünschtes Format und in neue const speichern
const dataRendered = data.map((elt) => elt.id + " - " + elt.title + "\n" + elt.description + "\n\n").join("");

console.log(dataRendered);

// Name der neuen Datei
const newFile = "new.txt";

// Erstellt neue Datei mit oben definiertem Namen und Inhalt aus const dataRendered
fs.writeFile(`./${newFile}`, dataRendered, function (err) {
    if (err) {
        return console.log("Die Datei " + newFile + "konnte nicht erstellt werden!");
    }
    console.log("Erfolg! Datei wurde erstellt.");
})