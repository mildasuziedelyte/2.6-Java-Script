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

console.log(desimtas);
console.log(vienuoliktas);

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
console.log(septynioliktas.length);


const astuonLenght=astuonioliktas.length;
console.log(astuonLenght);
console.log(astuonioliktas.length);

console.log("3 ----------------------");

if (septynioliktas.length > astuonioliktas.length) {
    console.log('sep didesnis');    
} else if (septynioliktas.length < astuonioliktas.length){
    console.log('ast didesnis');
} else if (septynioliktas.length === astuonioliktas.length){
    console.log('lygus');
}

if (septynioliktas.length >= astuonioliktas.length) {
    console.log('sep didesnis arba lygus');    
} else if (septynioliktas.length <= astuonioliktas.length){
    console.log('ast didesnis arba lygus');
} else if (septynioliktas.length !== astuonioliktas.length){
    console.log('ne lygus');
}

console.log("4 ----------------------");

const dvyliktas = ['zebras', 'zirafa', 'dramblys', 'liutas', 'antilope'];
console.log(dvyliktas);

console.log(dvyliktas[0].length, dvyliktas[1].length, dvyliktas[2].length, dvyliktas[3].length, dvyliktas[4].length);

console.log("4 ----------------------");

console.log("----------------------");
console.log("Ciklo FOR panaudojimas");
console.log("1 ----------------------");

//1.	Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):
// a.	0 - 0
// b.	0 - 4
// c.	0 - 100
// d.	574 - 815
// e.	-50 - 50
// f.	-70 - 30

const nuo = 0;
const iki = 100;
let intervaloSuma = 0

for (let index = nuo; index <= iki; index++) {
    intervaloSuma = intervaloSuma + index;
}

console.log(intervaloSuma);

console.log("2 ----------------------");

//panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo: pvz.: “abcdef” -> “fedcba”

const text1 = 'abcdef';
const text1Length = text1.length;
let atbulas1 = "";

for (let index = 0; index < text1Length; index++) {
    atbulas1 = text1[index] + atbulas1;
}

console.log(atbulas1);

const text2 = 'abcdef';
const text2Length = text2.length;
let atbulas2 = "";

for (let index = 0; index < text2Length; index++) {
    atbulas2 = atbulas2 + text2[text2Length - 1 - index];
}

console.log(atbulas2);

console.log("3 ----------------------");

// 3.	Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai:
// a.	0 - 11
// b.	8 - 31
// c.	-18 - 18
// 	rezultatą pateikti tokiu formatu:
// i.	Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra 4 vienetai.
// ii.	Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra 3 vienetai.
// iii.	Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra 2 vienetai.

const nuo1 = 0;
const iki1 = 11;
let dalinasi3 = 0;
let dalinasi5 = 0;
let dalinasi7 = 0;
let isvardinti='';

for (let index = nuo1; index <= iki1; index++) {
    if (index % 3 === 0) {
        dalinasi3 += 1;
    } if (index % 5 === 0) {
        dalinasi5 += 1;
    } if (index % 7 === 0) {
        dalinasi7 += 1;
    };
}

console.log(`Skaičių intervale tarp ${nuo1} ir ${iki1}, besidalijančių be liekanos iš 3 yra ${dalinasi3} vienetai.`);
console.log(`Skaičių intervale tarp ${nuo1} ir ${iki1}, besidalijančių be liekanos iš 5 yra ${dalinasi5} vienetai.`);
console.log(`Skaičių intervale tarp ${nuo1} ir ${iki1}, besidalijančių be liekanos iš 7 yra ${dalinasi7} vienetai.`);




const nuo111 = -18;
const iki111 = 18;
let dalinasi333 = 0;
let dalinasi555 = 0;
let dalinasi777 = 0;

for (let index = nuo111; index <= iki111; index++) {
    if (index % 3 === 0) {
        dalinasi333 += 1;
    } if (index % 5 === 0) {
        dalinasi555 += 1;
    } if (index % 7 === 0) {
        dalinasi777 += 1;
    };
}

console.log(`Skaičių intervale tarp ${nuo111} ir ${iki111}, besidalijančių be liekanos iš 3 yra ${dalinasi333} vienetai.`);
console.log(`Skaičių intervale tarp ${nuo111} ir ${iki111}, besidalijančių be liekanos iš 5 yra ${dalinasi555} vienetai.`);
console.log(`Skaičių intervale tarp ${nuo111} ir ${iki111}, besidalijančių be liekanos iš 7 yra ${dalinasi777} vienetai.`);


const nuo11 = 8;
const iki11 = 31;
let dalinasi33 = 0;
let dalinasi55 = 0;
let dalinasi77 = 0;

for (let index = nuo11; index <= iki11; index++) {
    if (index % 3 === 0) {
        dalinasi33 += 1;
    } if (index % 5 === 0) {
        dalinasi55 += 1;
    } if (index % 7 === 0) {
        dalinasi77 += 1;
    };
}

console.log(`Skaičių intervale tarp ${nuo11} ir ${iki11}, besidalijančių be liekanos iš 3 yra ${dalinasi33} vienetai.`);
console.log(`Skaičių intervale tarp ${nuo11} ir ${iki11}, besidalijančių be liekanos iš 5 yra ${dalinasi55} vienetai.`);
console.log(`Skaičių intervale tarp ${nuo11} ir ${iki11}, besidalijančių be liekanos iš 7 yra ${dalinasi77} vienetai.`);
