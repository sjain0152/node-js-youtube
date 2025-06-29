const accountId = 144553
let accountEmail = "sahil@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// accountId = 2 // not allowed
 
accountEmail = "hc@hc.com"

accountPassword = "21212121"

accountCity = "Patiala" 

console.log(accountId);
console.table([accountId , accountEmail , accountPassword , accountCity]);

// prefer not to use var because of issue in block scope and functional scope 