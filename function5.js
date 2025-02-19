function login( name,status ){
    if(status === true){
        return "login succes"
    }
    else{
        return "login failed"
    }
}
let msg=login("raghu",true)
console.log(msg)
