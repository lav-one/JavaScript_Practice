const uId = "ABC_123";

var fullName = "Lavanya Mutyala";
var email = "test@gmail.com";
var password = "test";
var confirmPassword = "test";
var courseCount = 0;
var isLoggedInFromGoogle = false;

//fullName = prompt() - We have to attech it to webPage to use this, so we won't use this way of inputting.

console.log(fullName);

//Method 1
console.log("Full name is "+fullName);

//Method 2
console.log("Full name is ",fullName);

//Method 3
console.log(`
    User Id is : ${uId}
    With FullName : ${fullName}
    And email : ${email}
    `);