
const sayı =(Math.random()*100).toFixed();
console.log(sayı);

const girilen =document.getElementById("input");
const buton =document.getElementById("buton");


buton.addEventListener("click",function() {
  bul(girilen.value);
});

function bul(){

if(girilen.value==sayı){
    console.log(girilen.value);
    console.log("tebrikler");
}else{
    console.log("tekrar dene");
}

}