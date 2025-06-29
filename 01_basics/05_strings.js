const name = "sahil"
const repoCount = 50
// console.log(name + repoCount + "Value"); outdated 


console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
//modern way

 const gameName = new String('sahil-sj-jain')

console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,4)
// last one not included 
console.log(newString);

const anotherString = gameName.slice(-5,4)
// we can give negative values in slice as well
console.log(anotherString);

const newStringOne = "   sahil   "
console.log(newStringOne);
console.log(newStringOne.trim());// removes extra space

const url = "https://sahil.com/sahil%20jain"

console.log(url.replace('%20','-'))

// replaces first one by second one

console.log(url.includes('saru'))
// findes whether included or not and returns true and false

console.log(gameName.split('-'));
// split on basis of (' ') in array

