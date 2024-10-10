"use strict";
// 1. En el siguiente código, implementa un tipo enum llamado Season que represente las constantes «Otoño», «Invierno», «Primavera» y «Verano». A continuación, actualiza la función para que para que pueda introducir la estación haciendo referencia a un elemento del enum, por ejemplo Temporada.Otoño, en lugar de la cadena literal «Otoño».
/* function whichMonths(season) {
    let monthsInSeason: string;
    switch (season) {
        case "Fall":
            monthsInSeason = "September to November";
            break;
        case "Winter":
            monthsInSeason = "December to February";
            break;
        case "Spring":
            monthsInSeason = "March to May";
            break;
        case "Summer":
            monthsInSeason = "June to August";
    }
    return monthsInSeason;
}

console.log(whichMonths("Fall")); */
//! Respuesta
// tsc --init en la raiz de la carpeta para inicializar el tsconfig.json.
// En el archivo tsconfig.json, buscar la opción de destino y cambiar a "target": "es2016".
// tsc para compilar el archivo module02-4.tsc en module02-4.js.
// node module02-4.js para ejecutar el archivo y ver el resultado en consola.
var Season;
(function (Season) {
    Season["Fall"] = "Fall";
    Season["Winter"] = "Winter";
    Season["Spring"] = "Spring";
    Season["Summer"] = "Summer";
})(Season || (Season = {}));
function whichMonths(season) {
    let monthsInSeason;
    switch (season) {
        case Season.Fall:
            monthsInSeason = "September to November";
            break;
        case Season.Winter:
            monthsInSeason = "December to February";
            break;
        case Season.Spring:
            monthsInSeason = "March to May";
            break;
        case Season.Summer:
            monthsInSeason = "June to August";
    }
    return monthsInSeason;
}
console.log(whichMonths(Season.Fall));
