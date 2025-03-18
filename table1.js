let users=[{"id":1,"name":"Cal","email":"chornung0@howstuffworks.com","gender":"Male"},
    {"id":2,"name":"Shirleen","email":"snewborn1@lulu.com","gender":"Female"},
    {"id":3,"name":"Jillian","email":"jbrideau2@ifeng.com","gender":"Female"},
    {"id":4,"name":"Franciska","email":"fcockett3@businessinsider.com","gender":"Female"},
    {"id":5,"name":"Edgar","email":"eanderl4@vinaora.com","gender":"Male"},
    {"id":6,"name":"Gabrielle","email":"gdearness5@walmart.com","gender":"Female"},
    {"id":7,"name":"Stu","email":"smacgillreich6@wordpress.org","gender":"Male"},
    {"id":8,"name":"Camala","email":"ccabell7@linkedin.com","gender":"Female"},
    {"id":9,"name":"Bobbette","email":"bmcrae8@163.com","gender":"Female"},
    {"id":10,"name":"Esdras","email":"efitchew9@walmart.com","gender":"Male"},
    {"id":11,"name":"Lief","email":"ldedhama@paypal.com","gender":"Male"},
    {"id":12,"name":"Alberto","email":"adanbyeb@aboutads.info","gender":"Male"},
    {"id":13,"name":"Roddy","email":"rriddellc@buzzfeed.com","gender":"Male"},
    {"id":14,"name":"Haley","email":"hthickettd@cornell.edu","gender":"Genderqueer"},
    {"id":15,"name":"Roana","email":"rpalsere@mozilla.org","gender":"Female"},
    {"id":16,"name":"Catherina","email":"csteptowef@nature.com","gender":"Female"},
    {"id":17,"name":"Johnette","email":"jtaberg@shinystat.com","gender":"Female"},
    {"id":18,"name":"Hermine","email":"hgrenshielsh@japanpost.jp","gender":"Female"},
    {"id":19,"name":"Jule","email":"jorritti@csmonitor.com","gender":"Male"},
    {"id":20,"name":"Tally","email":"taucklandj@ihg.com","gender":"Male"},
    {"id":21,"name":"Ritchie","email":"rgladdolphk@wikia.com","gender":"Male"},
    {"id":22,"name":"Vicki","email":"vjoubertl@twitpic.com","gender":"Female"},
    {"id":23,"name":"Kelley","email":"klomasnym@mashable.com","gender":"Female"},
    {"id":24,"name":"Kristos","email":"kwadleyn@constantcontact.com","gender":"Male"},
    {"id":25,"name":"Dorita","email":"dkhrishtafovicho@walmart.com","gender":"Polygender"},
    {"id":26,"name":"Gonzales","email":"gellertonp@google.com","gender":"Male"},
    {"id":27,"name":"Arri","email":"astareq@free.fr","gender":"Male"},
    {"id":28,"name":"Cherlyn","email":"ckohterr@com.com","gender":"Female"},
    {"id":29,"name":"Christal","email":"cwasielewiczs@google.cn","gender":"Female"},
    {"id":30,"name":"Lida","email":"lhawkyenst@state.gov","gender":"Female"},
    {"id":31,"name":"Paolo","email":"pbathoweu@indiegogo.com","gender":"Male"},
    {"id":32,"name":"Antoine","email":"akamingv@shop-pro.jp","gender":"Genderqueer"},
    {"id":33,"name":"Saunder","email":"smansbridgew@imgur.com","gender":"Male"},
    {"id":34,"name":"Joe","email":"jmckevanyx@state.gov","gender":"Male"},
    {"id":35,"name":"Dasie","email":"dtrowy@cnn.com","gender":"Female"},
    {"id":36,"name":"Vikki","email":"vgrummittz@vk.com","gender":"Female"},
    {"id":37,"name":"Pearle","email":"pplaster10@tinyurl.com","gender":"Female"},
    {"id":38,"name":"Lindie","email":"llebang11@linkedin.com","gender":"Female"},
    {"id":39,"name":"Constantine","email":"ckerwick12@ycombinator.com","gender":"Male"},
    {"id":40,"name":"Emmey","email":"erolley13@rediff.com","gender":"Female"},
    {"id":41,"name":"Lanni","email":"ledser14@walmart.com","gender":"Female"},
    {"id":42,"name":"Merci","email":"mwurz15@infoseek.co.jp","gender":"Female"},
    {"id":43,"name":"Rufus","email":"rridhole16@sciencedaily.com","gender":"Male"},
    {"id":44,"name":"Quent","email":"qbedbury17@chicagotribune.com","gender":"Male"},
    {"id":45,"name":"Aeriela","email":"alermouth18@dailymotion.com","gender":"Female"},
    {"id":46,"name":"Isobel","email":"ishearer19@sourceforge.net","gender":"Female"},
    {"id":47,"name":"Chaim","email":"cdoudny1a@kickstarter.com","gender":"Male"},
    {"id":48,"name":"Lillian","email":"lguyet1b@opera.com","gender":"Female"},
    {"id":49,"name":"Alice","email":"aquartermaine1c@yolasite.com","gender":"Female"},
    {"id":50,"name":"Clayson","email":"cmetheringham1d@discuz.net","gender":"Male"}]
    
function display_Data(){
        let rows=""
         for(user of users){
         rows=rows+ `
                      <tr>
                      <td>${user.id}</td>
                      <td>${user.name}</td>
                      <td>${user.email}</td>
                      <td>${user.gender}</td>
                      </tr>`
         
        }
   // alert("hello Balaji redddy")
  document.getElementById("tData").innerHTML=rows
}