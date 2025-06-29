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

// *****************************Memory************************************

// Stack (primitive) , Heap (non-primitive)
let myYoutubename = "sahilyt.com" 
let anothername = myYoutubename
anothername="chamapkaurcode"
console.log(myYoutubename);
console.log(anothername);


let userone = 
{
    email: "user@google.com",
    upi: "user@ybl"
}

let usertwo = userone

usertwo.email="user2@google.com"

console.log(userone.email);
console.log(usertwo.email);

