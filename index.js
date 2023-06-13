console.clear();



//Math.floor(Math.random() * (max - min + 1) + min);
//let a = Math.floor(Math.random() * (5 - 1 + 1) + 1);
//-----------------------------------------------------//
//Sukurti masyvą (piniginę), kurio ilgis yra atsitiktinis nuo 10 iki 30,
// o reikšmės atsitiktiniai skaičiai nuo 0 iki 10 (pinigai);

//1uzdavinys

//sukurti masyva is 30 ilgiss
console.log('Pinigine')
let pinigineLength =  Math.floor(Math.random() * (30 -10 + 1) +10);
let pinigine = [];

//reiksmes nuo 1 iki 10 imtinai
for (i=0; i<pinigineLength; i++){
    pinigine.push(Math.floor(Math.random() * (10 -0 + 1) +0));
}
console.log(pinigine);

//2uzdavinys
//Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio reikšmių (pinigų esančių piniginėje) sumą;


//3uzdavinys
//4uzdaviniai
//(skaičių didesnių už 2 ) reikšmių sumą
console.log(pinigine);

let didziausiaReiksme = pinigine[0];
let kiekis = 1;

for (i = 1; i < pinigine.length; i++) {
  if (pinigine[i] > didziausiaReiksme) {
    didziausiaReiksme = pinigine[i];
    kiekis = 1;
  } else if (pinigine[i] === didziausiaReiksme) {
    kiekis++;
  }
}

console.log('Didziausia reiksme:', didziausiaReiksme);
console.log('Kiekis:', kiekis);





