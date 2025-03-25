const accountId = 144553
let accountEmail = "prince@xyz.com"
var accountPassword = "12345"
accountCity = "Delhi"
let accountState;

// accountId = 2 // not allowed


accountEmail = "pm@abc.com"
accountPassword = "353535"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
