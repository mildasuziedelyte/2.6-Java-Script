// const kintamasis = [1];

// if (kintamasis.length === 1) {
// console.log(kintamasis)};

// let kintamasis = [ -5, 78, 14, 0, 18 ];

// console.log(kintamasis.length);

// console.log('-----------');
// console.log(kintamasis[5]);

function didziausiasSkaiciusSarase(kintamasis) {
    if (Array.isArray (kintamasis) === false){
    return 'Pateikta netinkamo tipo reikšmė.'
    }
    if (kintamasis.length === 0) {
    return 'Pateiktas sąrašas negali būti tuščias.'    
    }
    if (kintamasis.length === 1) {
    return kintamasis[0]
    }
    let didz = kintamasis[0];
    for (let i = 0; i < kintamasis.length-1; i++) {
        if (kintamasis[i+1] < didz) {
            didz = didz;
        } else { 
            didz = kintamasis[i+1]
        }
    } 
    return didz;
}
   
// if (kintamasis[i] < kintamasis[i+1]) {
//     var rez = kintamasis[i+1];
//     }

// else {
//     rez = kintamasis[i]
// }
   
// g.	TESTAI:

console.log( didziausiasSkaiciusSarase( [ 1 ] ) );
// 1.	rezultatas: 1

console.log( didziausiasSkaiciusSarase( [ 1, 2, 3 ] ) );
// 1.	rezultatas: 3

console.log( didziausiasSkaiciusSarase( [ -5, 78, 14, 0, 18 ] ) );
// 1.	rezultatas: 78

console.log( didziausiasSkaiciusSarase( [ 69, 69, 69, 69, 66 ] ) );
// 1.	rezultatas: 69

console.log( didziausiasSkaiciusSarase( [ -1, -2, -3, -4, -5, -6, -7, -8 ] ) );
// 1.	rezultatas: -1

console.log( didziausiasSkaiciusSarase( 'pomidoras' ) );
// 1.	rezultatas: “Pateikta netinkamo tipo reikšmė.”

console.log( didziausiasSkaiciusSarase( [] ) );
// 1.	rezultatas: “Pateiktas sąrašas negali būti tuščias.”

console.clear()

let kintamasis1 = [ -5, 78, 14, 0, 18 ];

let didz1 = kintamasis1[0];
for (let i = 1; i < kintamasis1.length; i++) {
    if (kintamasis1[i] > didz1) {
        didz1 = kintamasis1[i]
    }
} 

console.log(didz1);