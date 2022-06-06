const sayı = (Math.random() * 100).toFixed();
console.log(sayı);
const tahmin = document.getElementById("tahmin");
const girilen = document.getElementById("input");
const buton = document.getElementById("buton");
let element = document.getElementById("body");
let arr = [99];
let arr2 = [0];
let fark1 = [];
let fark2 = [];

buton.addEventListener("click", function () {
  bul(girilen.value);
});
function bul() {
  if (girilen.value == sayı) {
    tahmin.innerText = `Tebrikler sayı ${girilen.value}`;
    // element.style.backgroundColor = "green";
    element.setAttribute("class", "image");
    applause.play();
  } else if (girilen.value > sayı) {
    element.style.backgroundColor = "red";
    up.play();
    arr.push(girilen.value);
    console.log(arr);
    arr = arr.map((x) => parseInt(x));
    arr2 = arr2.map((x) => parseInt(x));

    fark2 = arr2.sort();

    fark1 = arr.sort();
    console.log(arr);
    tahmin.innerText = `${fark2[fark2.length - 1]} -${
      fark1[0]
    } Arasında Giriniz.`;
  } else if (girilen.value < sayı) {
    element.style.backgroundColor = "#FFE6E6";
    up.play();

    arr2.push(girilen.value);
    arr = arr.map((x) => parseInt(x));
    arr2 = arr2.map((x) => parseInt(x));
    console.log(typeof arr2, arr2);
    fark2 = arr2.sort();
    fark1 = arr.sort();

    tahmin.innerText = `${fark2[fark2.length - 1]} -${
      fark1[0]
    } Arasında Giriniz.`;
  }

  // tahmin.innerText = `${fark2[fark2.length - 1]} -${
  //   fark1[0]
  // } Arasında Giriniz.`;
}
