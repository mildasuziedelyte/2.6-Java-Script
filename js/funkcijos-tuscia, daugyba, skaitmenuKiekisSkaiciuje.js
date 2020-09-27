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

// // 3.	Funkcija pavadinimu “skaitmenuKiekisSkaiciuje”:
// // a.	priima vieną kintamąjį
// // b.	jei perduotas kintamasis nėra skaičiaus tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
// // c.	priešingu atveju, funkcija tęsia darbą
// // d.	į atskirą kintamąjį įsimena skaičių sudarančių skaitmenų kiekį
// // e.	gražina skaitmenų kiekį
// // f.	TESTAI:

let number = 'blabla';

if (typeof number !== 'number') {
    console.log('Netinkamo tipo reiksme');
 } else {console.log(number);}

 let text = '' + number;
 console.log(text);

 console.log("----------------------");

function skaitmenuKiekisSkaiciuje(number) {   
     let text = '' + number;
     if (typeof number !== 'number') {
        return 'Netinkamo tipo reiksme';
     }
     if (text === 'NaN'){
        return 'Reikia ivesti tikra skaiciu';
     }
     if (!isFinite (number)){
        return 'Reikia ivesti ne Infinity';
     }
     let ilgis = text.length;

     if (number % 1 !== 0){
         ilgis--
     }
     if (number < 0){
        ilgis--
    }
     return ilgis;
}

console.clear();

console.log( skaitmenuKiekisSkaiciuje( 5 ) );
//rezultatas: 1
console.log( skaitmenuKiekisSkaiciuje( 781 ) );
//rezultatas: 3
console.log( skaitmenuKiekisSkaiciuje( 37060123456 ) );
//rezultatas: 11
console.log( skaitmenuKiekisSkaiciuje( true ) );
//rezultatas: “Pateikta netinkamo tipo reikšmė.”
console.log( skaitmenuKiekisSkaiciuje( "asd" ) );
//rezultatas: “Pateikta netinkamo tipo reikšmė.”
console.log( skaitmenuKiekisSkaiciuje( NaN ) );
//rezultatas: “Pateikta netinkamo tipo reikšmė.”


