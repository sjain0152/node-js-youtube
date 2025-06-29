let score = "33abc"

console.log(typeof score);
 
let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);


let p = null

console.log(typeof p);
 
let x = Number(p)
console.log(typeof x);
console.log(x);

// "33" -> 33
// "33abc" -> Nan
// true -> 1 false -> 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 -> true 0-> false
// "" -> false
// "sahil" -> true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(typeof stringNumber);
console.log(stringNumber);


// *********************** Operations *****************************

let value = 3
let negvalue = -value
console.log(negvalue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2);
console.log(2/3);
console.log(2%3);

let str1 = "hello"
let str2 = " sahil"

let str3 = str1 + str2
console.log(str3);
console.log("1" + 2);
console.log(1 + "2");
console.log("1"+2+2+3);
console.log(1+2+"2");

console.log(true);
console.log(+true);
console.log("");
console.log(+"");

let gameCounter = 100
++gameCounter;
console.log(gameCounter);
