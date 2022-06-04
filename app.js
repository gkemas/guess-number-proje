const sayı = (Math.random() * 100).toFixed();
console.log(sayı);
const tahmin = document.getElementById("tahmin");
const girilen = document.getElementById("input");
const buton = document.getElementById("buton");
let element = document.getElementById("body");
let arr = [];
let arr2 = [];
let fark1 = [];
let fark2 = [];
buton.addEventListener("click", function () {
  bul(girilen.value);
});
function bul() {
  if (girilen.value == sayı) {
    tahmin.innerText = `Tebrikler sayı ${girilen.value}`;
    element.style.backgroundColor = "green";
  } else if (girilen.value > sayı) {
    element.style.backgroundColor = "red";

    arr.push(girilen.value);
    fark1 = arr.sort();
    tahmin.innerText = `${fark2[fark2.length - 1]} -${
      fark1[0]
    } Arasında Giriniz.`;
  } else if (girilen.value < sayı) {
    element.style.backgroundColor = "red";
    element.style.backgroundColor = "white";
    arr2.push(girilen.value);
    fark2 = arr2.sort();
    tahmin.innerText = `${fark2[fark2.length - 1]} -${
      fark1[0]
    } Arasında Giriniz.`;
  }

  // tahmin.innerText = `${fark2[fark2.length - 1]} -${
  //   fark1[0]
  // } Arasında Giriniz.`;
}
