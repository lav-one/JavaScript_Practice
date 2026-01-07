var number1 = 6;
var number2 = 5;

console.log(number1+number2);

var listingPrice = 799;
var sellingPrice = 199;

var percentage = ((listingPrice - sellingPrice)/listingPrice) * 100;

console.log("Discount percentage is ", percentage);

displayDiscountPercentage = Math.round(percentage);

console.log(displayDiscountPercentage+"% OFF");

var result = listingPrice > sellingPrice;

console.log(result);
console.log(typeof result);