const fs = require("fs");

// =================================================
// a) Text in blog1.txt ändern:
fs.readFile("blog1.txt", function(err, data) {
    // console.log(data.toString())
    const newText = "Ich bin ein Webdeveloper"
    
    fs.writeFile("blog1.txt", newText, function(err) {
        if(err) throw err;
        // console.log(newText)
    })
});

// =================================================
// b) Erstelle eine neue Datei blog2.txt mit beliebigem Text
fs.writeFile("blog2.txt", "Hier steht beliebiger Text", function (err) {
    if (err) throw err;
    console.log("blog2.txt wurde erstellt")
});


// =================================================
// c) Prüfen, ob Ordner "assets" existiert.
// Falls ja: Ordner löschen
const folderName = "assets";

// prüft, ob es den Ordner "assets" gibt
fs.access(folderName, fs.constants.F_OK, function (err) {
    // wenn er nicht exisitert, dann gib in der Konsole eine Meldung
    if (err) {
        console.log(`Der Ordner ${folderName} wurde nicht gefunden`);

        // ==========================================
        // d) erstelle einen neuen Ordner assets
        fs.mkdir(folderName, function (err) {
            if(err) return console.log("Fehler beim Erstlelen vom Ordner assets");
            console.log("assets-Ordner erfolgreich erstellt")
        })
    } else {
        // wenn der Ordner "assets" exisitert, lösche ihn
    fs.rmdir(folderName, function (err) {
    if (err) {
        // Fehlermeldung, wenn der Ordner nicht gelöscht werden kann
        return console.log(`Der Ordner ${folderName} kann nicht gelöscht werden, da er nicht existiert.`)
    };
    // Meldung, wenn der Ordner erfolgreich gelöscht wurde (und vorher existierte)
    console.log(`xxxxx Der Ordner ${folderName} wurde gelöscht xxxxx`);
});
    };
})

// =================================================
// e) Prüfe, ob Datei "delete.txt" existiert
// Wenn ja: lösche die Datei

fs.access("delete.txt", fs.constants.F_OK, function (err) {
    if (err) {
        console.log("!!! Die Datei delete.txt konnte nicht gefunden werden !!!");

        // f) Erstelle die Datei delete.txt
        fs.writeFile("delete.txt", "Das ist die delete-Datei", function (err) {
    
            // Wenn die Datei nicht erstellt werden kann, gib diese Meldung aus:
            if (err) return "!!! Die Datei delete.txt konnte nicht erstellt werden !!!";

            console.log("+++ delete.txt wurde erstellt! +++")
        })
    } else {
        // wenn Die Datei erstellt werdene kann, dann lösche die Datei
        fs.unlink("delete.txt", function (err) {
            // Wenn die Datei nicht gelöscht werden kann, gib diese Meldung aus:
                if(err) return "!!! Die Datei delete.txt konnte nicht gelöscht werden !!!"

            // Wenn die Datei gelöscht wurde, gib diese Meldung aus
            console.log("xxxxx Datei delete.txt wurde gelöscht! xxxxx")
            })
        }
})

// =================================================
// g) Erstelle eine Datei "hello.txt" mit einem beliebigen Text

fs.writeFile("hello.txt", "You say good bye and I say hello - hello, hello!", function (err) {
    if (err) return "!!! Die Datei hello.txt konnte nicht erstellt werden !!!"
    console.log("+++ Die Datei hello.txt wurde erstellt +++")
})

// h) Rename die Datei helloWorld.txt
fs.rename("hello.txt", "helloWorld.txt", function (err) {
    if (err) return "!!! Beim Umbenennen ist ein Fehler aufgetreten !!!";
    console.log("--> hello.txt wurde umbenannt")
})