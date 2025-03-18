let employeees=[
 "balaji"
]
console.log(employeees.length)
let female_Employees=[]
let i=0;
while(i<=employeees.length-1){
    if(employeees[i].gender==="female"){
        female_Employees.push(employees[i])
    }
    i++
}
console.log(female_Employees.length)