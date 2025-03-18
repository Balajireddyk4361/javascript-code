function add(c,d){
    console.log("c value:",c,"and d value:",d)
}
add(10,20)
add(10,20,30)
add(10,20,30,40)
add(10,20,30,40,50)


function add(a,...b){
    console.log("a value:",a,"and b value:",b)
}
add(10,20)
add(10,20,30)
add(10,20,30,40)
add(10,20,30,40,50)