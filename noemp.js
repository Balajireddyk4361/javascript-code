let employname =[
    {id:101,name:"balaji",sal:70000},
    {id:102,name:"omprakash",sal:60000},
    {id:103,name:"sankar",sal:50000},
];
function display(){
    let tbody=document.getElementById("table_body");
    let rows="";
    for(semp of employees){
        rows =
         
          rows +=  <tr>
            <td>${emp.id}</td>
            <td>${emp.name}</td>
            <td>${emp.sal}</td>
        </tr>
    }
    tbody.innerHTML=rows;
}