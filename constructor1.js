class Account{
 min_bal=5000
 acc_name;
 acc_id;
 acc_bal;
constructor(id,name,bal){
    this.acc_id=id;
    this.acc_name=name;
    this.acc_bal=bal;
 }
}
let a1=new Account(101,"bala",10000)
let a2=new Account(102,"hari",4000)
let a3=new Account(103,"ramu",6000)
console.log(a1)
console.log(a2)
console.log(a3)