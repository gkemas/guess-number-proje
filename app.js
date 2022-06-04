const sayı = (Math.random() * 100).toFixed();
console.log(sayı);
const tahmin = document.getElementById("tahmin");
const girilen = document.getElementById("input");
const buton = document.getElementById("buton");

buton.addEventListener("click", function () {
  bul(girilen.value);
});
let arr = [];
function bul() {
  if (girilen.value == sayı) {
    tahmin.innerText = `Tebrikler sayı ${girilen.value}`;
  } else {
    if (girilen.value > sayı) {
      arr.push(girilen.value);
      let fark1 =[];
  for(let i=1; i< length.arr-1; i++ ){
    fark1.push(arr[i]-sayı);
    let a =Math.min(fark1);
    let b =Math.min(fark2);
    // tahmin.innerText =`${fark1} -${fark2} Arasında Giriniz.`;
  
  }

      console.log(arr[0]);
      // ipucu();
    }
  }
else {
  let fark2 =[];
  for(let i=1; i< length.arr-1; i++ ){
    fark2.push(sayı-arr[i]);
    let a =Math.min(fark1);
  let b =Math.min(fark2);
  // tahmin.innerText =`${fark1} -${fark2} Arasında Giriniz.`
    
  }


}
}

function ipucu(){
  let fark1 =[];
  for(let i=1; i< length.arr-1; i++ ){
    fark1.push(arr[i]-sayı);
  }
  let fark2 =[];
  for(let i=1; i< length.arr-1; i++ ){
    fark1.push(sayı-arr[i]);
    
  }
  let a =Math.min(fark1);
  let b =Math.min(fark2);
  tahmin.innerText =`${fark1} -${fark2} Arasında Giriniz.`

}