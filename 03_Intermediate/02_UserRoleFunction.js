getUserRole = function(name, role){
    switch(role){
        case "admin":
            return `${name} is admin with all access`;
        case "subadmin":
            return `${name} is subadmin with access to create an delete courses`;
        case "testprep":
            return `${name} is testprep with access to create tests`;
        case "user":
            return `${name} is user with access to use all the content`;
        default:
            return `${name} is trail user`;                
    }
}


function test(get){
    console.log(get());
}


test(getUserRole);



