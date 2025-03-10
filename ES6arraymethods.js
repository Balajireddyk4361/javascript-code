// let enames=["bala","sankar","om"]
// let nums=[10,20,30,40,50,]
// enames.map((enames)=>{
//     console.log(enames.toUpperCase())
// })
//itarate an array
//   and execute provided function for every array element


// let enames=["bala","sankar","om","rg"]
// //create new array with touppercase
// let new_Enames=[]
// for(let ename of enames){
//     new_Enames.push(ename.toUpperCase())
// }
// console.log(new_Enames)
// console.log(enames)


// let enames=["bala","sankar","om","rg"]
// let new_Enames=enames.map((ename)=>{
//     return ename.toUpperCase()
// });
// console.log(new_Enames)
// // console.log(enames)

// let enames=["bala","sankar","om","rg"]
// let new_Enames=enames.forEach((ename)=>{
//        return ename.toUpperCase()
// });
// console.log(new_Enames)
//  console.log(enames)


// //even numbers finding
// let nums=[1,2,3,4,5,6,7,8,9]
// let even_nums=[]
// for(let num of nums){
//     if(num %2 ===0){
//         even_nums.push(num);
//     }
// }
// console.log(even_nums);



//even numbers using filterc ,map,foreach,method
let nums=[1,2,3,4,5,6,7,8,9]
let even_nums=nums.map((num)=>{
    return num %2 ===0;
})

 console.log(even_nums);
 console.log(nums)