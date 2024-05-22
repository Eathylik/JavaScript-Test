let a = 2;
const b = 3;

//on ne peut pas réafecter une variable deja definit

a = a + 5; // 7
a += 5; // 12

let c = 10;

c = c + 1; // 11
c += 1; // 12
c++; // 13
c += b; // c = c + b  est = a 16

let d = 25;

d = d - 5; //20
d -= 5; //15
d--; //14

let e = 3;

e = e * 4; // 12
e *= 2; // 24

let m = 5;

// 5/2 = 2 reste 1 => modulo
// le resultat serra de & pour les nombres impaires
console.log(m % 3);

