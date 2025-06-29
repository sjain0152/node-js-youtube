// Primitive 
// 7 types : String , Number , Boolean , null , undefined , symbol , Bigint
 const score = 100
 const scorevalue = 100.3 
// both above are numbers
 const isLoggedIn = false
 const outsideTemp = null
 let userEmail;
 const id = Symbol('123')
 const anotherId = Symbol('123')
 console.log(id===anotherId);
 // uniqueness bcoz of Symbol
 const bigNumber = 8579878959409969059n // bigint bcoz of n at last
// Reference (Non primitive)
// Arrays , Objects , Functions
const heros = ["shaktimaan","naagraj","doga"]
let myObj = {
    name : "sahil",
    age : 20,
}
const myFunction = function(){
    console.log("hello world");
}

    
