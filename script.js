const images = [
    "images/hero section/hero_section.png",
    "images/hero section/hs2.jpg",
    "images/hero section/hs3.jpg",
    "images/hero section/hs4.jpg"
];

let current = 0;

const hero = document.getElementById("hero-image");

function showImage(index){

    hero.style.opacity = 0;

    setTimeout(() => {

        hero.src = images[index];
        hero.style.opacity = 1;

    }, 400);
}

function nextImage(){

    current++;

    if(current >= images.length){
        current = 0;
    }

    showImage(current);
}

function prevImage(){

    current--;

    if(current < 0){
        current = images.length - 1;
    }

    showImage(current);
}

document.querySelector(".right").onclick = nextImage;
document.querySelector(".left").onclick = prevImage;

setInterval(nextImage, 5000);