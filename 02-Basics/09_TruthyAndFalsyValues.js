//All the below are FALSY values. Any values other than below are considered as TRUTHY values.
//Undefined
//null
//0
//''
//NaN

var user = "2";

user = '';

if(user){
    console.log("Condition is TRUE");
}

console.log("2"+2);

user = "2";

if(2 == user){
    console.log("For 2 == user, we are inside FOR loop");
}

if(2 === user){
    console.log("For 2 === user");
}