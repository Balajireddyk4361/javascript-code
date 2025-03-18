class Account{
    min_Bal=500000
    branch_name="mrt"
    acc_bal=0;
    deposit_Amount(){
        console.log("amount is deposited")
    }
    close_Account(){
    console.log( "you cant close -ve bal")
    }
    get_Bal(){
    console.log("balence low")
    }
    withdrawl(){
        console.log("insufficence bal")
    }
  
    open_Account(){
    console.log("account opened")
    }

}
let a1= new Account();

a1.open_Account()
a1.deposit_Amount()
a1.withdrawl()
a1.get_Bal()
a1.close_Account()
