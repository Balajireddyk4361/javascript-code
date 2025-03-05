class Account{
    constructor(){
        console.log("constructor ")
    }
    open_Account(){
        console.log("Account Opened Successfully!")
    }
    deposit_Amount(amount){
        this.acc_Bal = this.acc_Bal + amount
    }
    withdrawl_Amount(amount){
        this.acc_Bal = this.acc_Bal - amount
    }
    get_Bal(){
        return this.acc_Bal-this.min_Bal
    }
    close_Acc(){}
}
let a1=new Account()
let a2=new Account()
let a3=new Account()