function számítás() {
let price= 500;
let db=document.querySelector("input[name='rendelésMennyiség']");
let végösszeg=document.querySelector("span.összeg");
let dbNumber=parseInt(db.value);
if (dbNumber > 10){
    alert("Maximális mennyiség túllépve.")}
else if ( dbNumber <1){
    alert("Minimális rendelési darabszám1")}
else { let amount= dbNumber* price + 150  ;
végösszeg.innerHTML=amount;



}}