var role = "testPreps";

switch(role){
   case "admin" : 
        console.log("Give full access");
        break;
   case "subAdmin" :
        console.log("Give access to update/ delete the ");
        break;
    case "testPreps" : 
        console.log("Access to prepare the tests");
        break;
    case "user" : 
        console.log("Access to consume the content");
        break;   
    default : 
        console.log("Not a valid user")
        break;                       
}