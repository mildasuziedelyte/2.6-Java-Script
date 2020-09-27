"use strict";

// 5.	Funkcija pavadinimu “isrinktiRaides”:
// a.	priima du kintamuosius:
// i.	pirmasis nurodo tekstą, su kuriuo reikės atlikti užduotį
// ii.	antrasis nurodo kas kelintą raidę išrinkti
// b.	patikrinti, ar pirmasis kintamasis yra teksto tipo:
//  .	jei ne, išvedame pranešimą “Pirmasis kintamasis yra netinkamo tipo.”
// i.	priešingu atveju tęsiame darbą
// c.	patikrinti, ar pirmasis kintamasis yra ne tuščias tekstas ir ne didesnis nei 100 simbolių:
//  .	jei ne, išvedame pranešimą “Pirmojo kintamojo reikšmė yra netinkamo dydžio.”
// i.	priešingu atveju tęsiame darbą
// d.	patikrinti, ar antrasis kintamasis yra skaičiaus tipo:
//  .	jei ne, išvedame pranešimą “Antrasis kintamasis yra netinkamo tipo.”
// i.	priešingu atveju tęsiame darbą
// e.	patikriname, ar antrojo kintamojo vertė yra didesnė už nulį:
//  .	jei ne, išvedame pranešimą “Antrasis kintamasis turi būti didesnis už nulį.”
// i.	priešingu atveju tęsiame darbą
// f.	patikriname, ar antrojo kintamojo vertė yra ne didesnė už pirmojo kintamojo ilgį:
//  .	jei ne, išvedame pranešimą “Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.”
// i.	priešingu atveju tęsiame darbą
// g.	išrenkame iš nurodyto teksto kas kelintą raidę (pagal antrojo kintamojo žingsnį)
// h.	išrinktas raides sudėti į atskirą kintamąjį, kuris yra teksto tipo
// i.	gražina rezultatą

function isrinktiRaides(tekstas, raidesNr) {
    if (typeof(tekstas) !== 'string'){
        return "Pirmasis kintamasis yra netinkamo tipo.";
    }
    if (tekstas.length === 0 || tekstas.length > 100){
        return 'Pirmojo kintamojo reikšmė yra netinkamo dydžio.';
    }
    if (typeof(raidesNr) !== 'number'){
        return "Antrasis kintamasis yra netinkamo tipo.";
    }
    if (raidesNr <= 0 ){
        return 'Antrasis kintamasis turi būti didesnis už nulį.';
    }
    if (raidesNr > tekstas.length){
        return 'Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.';
    }
    let rezultatas = "";
    for (let i = raidesNr - 1; i < tekstas.length; i) {
        rezultatas = rezultatas + tekstas[i];
        i = i+raidesNr;
    }
    return rezultatas;
}

// j.	TESTAI:

console.log( isrinktiRaides( 'abcdefg', 2 ) );
// 1.	rezultatas: “bdf”

console.log( isrinktiRaides( 'abcdefghijkl', 3 ) );
// 1.	rezultatas: “cfil”

console.log( isrinktiRaides( 'abc', 0 ) );
// 1.	rezultatas: “Antrasis kintamasis turi būti didesnis už nulį.”

console.log( isrinktiRaides( 'abc', 4 ) );
// 1.	rezultatas: “Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.”

console.log( isrinktiRaides( 1561, 2 ) );
// 1.	rezultatas: “Pirmasis kintamasis yra netinkamo tipo.”
