// 6.	Funkcija pavadinimu “dalyba”:
// a.	turi priimti du kintamuosius
// b.	reikia sugalvoti ir įgyvendinti kuo daugiau logiškų patikrinimų, kurie padėtų apsaugoti funkciją nuo neteisingo panaudojimo
// i.	esant blogoms sąlygoms, išvesti atitinkamą pranešimą
// ii.	esant geroms - tęsti darbą
// c.	į atskirą kintamąjį išsaugoti apskaičiuotą dviejų skaičių dalybos reikšmę
//  .	daliname pirmąjį skaičių iš antrojo
// d.	gražinti suskaičiuotą reikšmę
// e.	TESTAI:
//  .	sugalvoti bent 5 testus, kurie bendrai iš esmės patvirtintu gerą funkcijos veikimą

function dalyba(skaitiklis, vardiklis) {
    if (typeof(skaitiklis) !== 'number' || typeof(vardiklis) !== 'number'){
        return "Skaitiklis ir/arba vardiklis turi būti skaičiai";
    }
    if (vardiklis === 0){
        return 'Vardiklis negali būti 0.'
    }
    if (!isFinite(skaitiklis) || !isFinite(vardiklis)){
        return 'Netinkama reikšmė (Infinity, NaN, undefined)'
    }
    let dalyba = skaitiklis / vardiklis;

    return dalyba;
}

//TESTAI

console.log(dalyba(10, 2));

console.log(dalyba (10, Infinity));

console.log(dalyba (Infinity, 10));

console.log(dalyba(NaN, 5));

console.log(dalyba(5, NaN));

console.log(dalyba(5, 0));

console.log(dalyba(0, 5));

console.log(dalyba(-5, 5));
    
     

// let tekstSkaitiklis = '' + skaitiklis;
// let tekstVardiklis = '' + vardiklis;
// if (tekstSkaitiklis === 'NaN' || tekstVardiklis === 'Nan'){
//     return 'Netinkama reikšmė (NaN)'
// }




