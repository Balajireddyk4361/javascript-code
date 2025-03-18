let eids=[101.102,103,104]
//create new array based on existing array
// let uids=[...eids]
let uids=eids;
uids[0]="bala"
console.log(eids)
console.log(uids)

//spread operator=Extract and copy into element
let a=[10,20,30]
let b=[30,40,50]
let c=[...a,...b]
console.log(c)

let emp={eid:101,ename:"balajireddy",email:"bala2123"};
let detailes={email:"BalajiRedddy@123",esal:450000}
let emp_details={...emp,...detailes}
console.log(emp_details)


