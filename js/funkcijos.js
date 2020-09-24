console.log("----------------------");
console.log("Funkcijos");
console.log("1 ----------------------");

// 1.	Funkcija pavadinimu “tusciaFunkcija”:
// a.	nepriima jokių kintamųjų
// b.	neatlieka jokios vidinės logikos
// c.	gražina boolean tipo reikšmę “false”
// d.	TESTAS:
// i.	console.log( tusciaFunkcija() );
// ii.	rezultatas: false

function tusciaFunkcija () {
    return false;
};

console.log(tusciaFunkcija());


console.log("2 ----------------------");

// 2.	Funkcija pavadinimu “daugyba”:
// a.	priima du skaičiaus tipo kintamuosius
// b.	atskirame kintamajame įsimena sandaugos reikšmę
// c.	gražina saudaugos rezultatą
// d.	TESTAI:
// i.	console.log( daugyba( skaicius1, skaicius2 ) );
// ii.	console.log( daugyba( skaicius3, skaicius2 ) );
// iii.	console.log( daugyba( skaicius1, skaicius3 ) );
// iv.	rezultatas: teisingos reikšmės;


let skaicius1 = 10;
let skaicius2 = 5;

function daugyba(skaicius1, skaicius2) {
    sandauga = skaicius1*skaicius2
    return sandauga
}

console.log(daugyba( skaicius1, skaicius2 ) )

console.log("3 ----------------------");

// 3.	Funkcija pavadinimu “skaitmenuKiekisSkaiciuje”:
// a.	priima vieną kintamąjį
// b.	jei perduotas kintamasis nėra skaičiaus tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
// c.	priešingu atveju, funkcija tęsia darbą
// d.	į atskirą kintamąjį įsimena skaičių sudarančių skaitmenų kiekį
// e.	gražina skaitmenų kiekį
// f.	TESTAI:
// i.	console.log( skaitmenuKiekisSkaiciuje( 5 ) );
// 1.	rezultatas: 1
// ii.	console.log( skaitmenuKiekisSkaiciuje( 781 ) );
// 1.	rezultatas: 3
// iii.	console.log( skaitmenuKiekisSkaiciuje( 37060123456 ) );
// 1.	rezultatas: 11
// iv.	console.log( skaitmenuKiekisSkaiciuje( true ) );
// 1.	rezultatas: “Pateikta netinkamo tipo reikšmė.”
// v.	console.log( skaitmenuKiekisSkaiciuje( “asd” ) );
// 1.	rezultatas: “Pateikta netinkamo tipo reikšmė.”
// vi.	console.log( skaitmenuKiekisSkaiciuje( NaN ) );
// 1.	rezultatas: “Pateikta netinkamo tipo reikšmė.”

// let kintamasis = 'blabla';

// console.log(bla);
// console.log(bla.length);

function skaitmenuKiekisSkaiciuje (kintamasis) {
     if (isNaN (kintamasis)){
         skaitmenuK = 'Pateikta netinkamo tipo reikšmė.';
         return skaitmenuK;
     } else {
          let bla = `${kintamasis}`;
          skaitmenuK = bla.length;
         return skaitmenuK
     }
 }

 console.log ( skaitmenuKiekisSkaiciuje ('tralialia') );
