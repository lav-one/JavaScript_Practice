var isLoggedIn = true;
var isEmailVerified = true;
var isCardInfoValid = true;

if(isLoggedIn && isEmailVerified && isCardInfoValid){
    console.log("Allow user to make purchase, proceeding in to purchase!!");
}
else{
    if(!isLoggedIn)
    {
    console.log("User is not logged in, aborting the purchase");
    }
    if(!isEmailVerified)
    {
    console.log("Email is not verified, aborting the purchase");
    }
    if(!isCardInfoValid)
    {
    console.log("Card Info is not valid, aborting the purchase");
    }
}
