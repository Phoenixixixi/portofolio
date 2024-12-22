let section = document.querySelector('section');

// Buat 600 div dengan class 'animation'
for (let i = 0; i < 300; i++) {
  let div = document.createElement('div');
  div.classList.add("animation");
  section.appendChild(div);

  // Tetapkan posisi acak untuk setiap elemen
  div.style.top = Math.random() * 100 + "vh";
  div.style.left = Math.random() * 100 + "vw";
}

let circles = document.querySelectorAll(".animation");

// Animasi ketika mouse bergerak
document.addEventListener("mousemove", function (e) {
  circles.forEach(circle => {
    let x = circle.offsetLeft - e.pageX;
    let y = circle.offsetTop - e.pageY;
    let dist = Math.sqrt(x * x + y * y); // Jarak dari elemen ke posisi kursor
    let score = Math.exp(dist * -0.01); // Skor transformasi berdasarkan jarak
    circle.style.transform = "scale(" + score*2 +  ")";
  });
});


let text = document.querySelector('#nama');
let tulis = "Muhammad Dustin | FrontEndDev | FullStackDev | Tech Ethusiast"

let index = 0;

let isDeleting = false;

// Fungsi hapus nama H2
function tampilkanHuruf() {
    if(!isDeleting){
        if(index < tulis.length){
            text.textContent += tulis[index];
            index ++ ;
            setTimeout(tampilkanHuruf, 100)
        }
        else {
            isDeleting = true;
            setTimeout(tampilkanHuruf, 100)
        }
    } else {
       if(index > 0){
        text.textContent = text.textContent.slice(0, -1);
        index--
        setTimeout(tampilkanHuruf, 100)
       }
       else{
        isDeleting = false;
        setTimeout(tampilkanHuruf, 100)
       }
    }

}

let textHello = document.getElementById('helloText');
let tulisHello = "World;"
let TulisHelloChange = "dek !"
let indexHello = 0;
let deleteReady = false;
let changeText = false;


function HelloDek(){
  if(!changeText){
  if(!deleteReady){
    if(indexHello < tulisHello.length){
      textHello.textContent += tulisHello[indexHello];
      indexHello++;
      setTimeout(HelloDek, 150);
    } 
    else{
      deleteReady = true;
      setTimeout(HelloDek, 150);
    }
  } else {
    if(indexHello > 0){
      textHello.textContent = textHello.textContent.slice(0, -1)
      indexHello--;
      setTimeout(HelloDek, 150);
    } else {
      deleteReady = false;
      setTimeout(HelloDek, 150);
      changeText = true;
    }
  }
} else {
  if(!deleteReady){
    if(indexHello < TulisHelloChange.length){
      textHello.textContent += TulisHelloChange[indexHello];
      indexHello++;
      setTimeout(HelloDek, 150);
    } 
    else{
      deleteReady = true;
      setTimeout(HelloDek, 150);
    }
  } else {
    if(indexHello > 0){
      textHello.textContent = textHello.textContent.slice(0, -1)
      indexHello--;
      setTimeout(HelloDek, 150);
    } else {
      deleteReady = false;
      setTimeout(HelloDek, 150);
      changeText = false;
    }
  }
}
}






tampilkanHuruf();

HelloDek();

function clicking() {
    let href = document.querySelectorAll('#nav-a'); // Ambil semua elemen <a>
  
    href.forEach(function(value) {
      value.addEventListener('click', () => {
        // Hapus border-bottom dari semua elemen <a>
        href.forEach(a => a.style.borderBottom = 'none');
        
        // Tambahkan border-bottom hanya untuk elemen yang diklik
        value.style.borderBottom = 'solid 3px #288ee7';
      });
    });
  }
  
  clicking();
  

clicking();

AOS.init();
