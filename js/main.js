"use strict";

console.log("----------------------");
console.log("Kintamuju inicijavimas");
console.log("1 ----------------------");

const pirmas = 1;
const antras = 2;
const trecias = 3;

console.log(pirmas);
console.log(antras);
console.log(trecias);

console.log("2 ----------------------");

const ketvirtas = 'as';
const penktas = 'tu'
const sestas = 'mes'

console.log(ketvirtas);
console.log(penktas);
console.log(sestas);

console.log("3 ----------------------");

const septintas = [1, 2, 3, 4, 5];
const astuntas = [10, 11, 12, 13, 14];
const devintas = [10, 20, 30, 40, 50];

console.log(septintas);
console.log(astuntas);
console.log(devintas);

console.log("4 ----------------------");

const desimtas = ['pirmas', 'antras', 'trecias', 'ketvirtas', 'penktas'];
const vienuoliktas = ['as', 'tu', 'jis', 'ji', 'mes'];
const dvyliktas = ['zebras', 'zirafa', 'dramblys', 'liutas', 'antilope'];

console.log(desimtas);
console.log(vienuoliktas);
console.log(dvyliktas);

console.log("----------------------");
console.log("Veiksmai su kintamaisiais");
console.log("1 ----------------------");

const sumaSk = pirmas + antras + trecias;

console.log(sumaSk);

console.log("2 ----------------------");

const sumaZo = ketvirtas + ' ' + penktas + ' ' + sestas;

console.log(ketvirtas + ' ' + penktas + ' ' + sestas);
console.log(sumaZo);

console.log("3 ----------------------");

const tryliktas = [1, 2, 3, 4, 5];

let sumaTryl = tryliktas[0] - tryliktas[1] + tryliktas[2] - tryliktas[3] + tryliktas[4];

// Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką 1-2+3-4+5

console.log(sumaTryl);

let Tryl = 0;

console.log(tryliktas[Tryl] - tryliktas[Tryl++] + tryliktas[Tryl++] - tryliktas[Tryl++] + tryliktas[Tryl++]);

console.log("4 ----------------------");

//Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas

const keturioliktas = ['pirmas', 'antras', 'trecias', 'ketvirtas', 'penktas'];

console.log(keturioliktas);

console.log(keturioliktas[4],',',keturioliktas[3], ' ', keturioliktas[2], ' ', keturioliktas[1], ' ', keturioliktas[0])

let Ket = keturioliktas.length;

console.log(keturioliktas[--Ket], ' ', keturioliktas[--Ket], ' ', keturioliktas[--Ket], ' ', keturioliktas[--Ket], ' ', keturioliktas[--Ket])

Ket = 4;

console.log(keturioliktas[Ket], ' ', keturioliktas[--Ket], ' ', keturioliktas[--Ket], ' ', keturioliktas[--Ket], ' ', keturioliktas[--Ket]);

console.log("----------------------");
console.log("Kintamųjų palyginimas");
console.log("1 ----------------------");

//Tarpusavyje palyginti skaičiaus tipo kintamuosius:
// a kuris didesnis
// b kuris mažesnis
// c ar jie lygūs
// d ar jie nelygūs
// e kuris didesnis arba lygus
// f kuris mažesnis arba lygus

const penkioliktas = 9;
const sesioliktas = 10;

//const true = 'Pomidoras';
//const false = 'Bandykite kitą kartą'

//const a = penkioliktas > sesioliktas

if (penkioliktas > sesioliktas) {
    console.log('Pomidoras');
} else console.log('Bandykite kita karta');

if (penkioliktas < sesioliktas) {
    console.log('Pomidoras');
} else console.log('Bandykite kita karta');

if (penkioliktas == sesioliktas) {
    console.log('Pomidoras');
} else console.log('Bandykite kita karta');

if (penkioliktas != sesioliktas) {
    console.log('Pomidoras');
} else console.log('Bandykite kita karta');

if (penkioliktas >= sesioliktas) {
    console.log('Pomidoras');
} else console.log('Bandykite kita karta');

if (penkioliktas <= sesioliktas) {
    console.log('Pomidoras');
} else console.log('Bandykite kita karta');

//console.log(a);
//const b = penkioliktas > sesioliktas
//if (b = true) {c = 'Pomidoras'} else {c = 'Bandykite kita karta'}
//console.log(c);
//console.log(a);
//const c = penkioliktas > sesioliktas
//console.log(a);

console.log("2 ----------------------");

const septynioliktas = 'as';
const astuonioliktas = 'mes';

const septynLenght=septynioliktas.length;
console.log(septynLenght);

const astuonLenght=astuonioliktas.length;
console.log(astuonLenght);

console.log("3 ----------------------");











