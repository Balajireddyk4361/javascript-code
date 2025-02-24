/*advantage of use far arrow function
1.conside code/shortwritten code
2.implicit code
3.this keyword returns-{}
4.function overriting conflict restored

//fat Arrow function
 let add=(a,b)=>{
    console.log(a+b)
}
add(10,20)
add(30,10)
add(50,50)

//with return
let add=(a,b)=>{
    return a+b
}
let r1=add(10,20)
console.log(r1)

//with return
/*let add=(a,b)=>a+b;
let r1=add(1,3)
console.log(r1)
let r2=add(1)
console.log(r2)
let r3=add(13,13)
console.log(r3)

//using this key word
let wish =()=>{
    console.log(this)
}
wish()
//
let sub=(a,b)=>a+b;
let r5=sub(a,b)
    console.log(r5)

    //function conflicting
    function wish(){
        console.log("gm")
    }
    wish()
    function wish(){
        console.log("gn")
    }
    wish()*/
    var wish=()=>{
        console.log("gm")
    }
    wish()
    var wish=()=>{
        console.log("gn")
    }
    wish()
