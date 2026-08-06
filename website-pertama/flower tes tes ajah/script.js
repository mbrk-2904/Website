// =========================
// Fireflies
// =========================

const fireflies = document.querySelector(".fireflies");

for(let i = 0; i < 20; i++){

    const dot = document.createElement("div");

    dot.className = "firefly";

    dot.style.left = Math.random()*100 + "%";
    dot.style.top = Math.random()*100 + "%";

    dot.style.animationDuration =
        (3 + Math.random()*6) + "s";

    dot.style.animationDelay =
        Math.random()*5 + "s";

    fireflies.appendChild(dot);

}

function meteor(){

    const m = document.createElement("div");

    m.className = "meteor";

    m.style.left = Math.random()*80 + "%";

    document.body.appendChild(m);

    setTimeout(()=>{

        m.remove();

    },1800);

}

setInterval(meteor,7000);

const glow =
document.querySelector(".cursor-glow");

document.addEventListener("mousemove",(e)=>{

    glow.style.left=e.clientX+"px";

    glow.style.top=e.clientY+"px";

});

const flower = document.querySelector(".flower");

flower.addEventListener("click",()=>{

    for(let i=0;i<25;i++){

        const p = document.createElement("div");

        p.className="fall";

        p.style.left=(window.innerWidth/2)+"px";
        p.style.top="180px";

        p.style.animationDelay=
        Math.random()+"s";

        p.style.setProperty(
            "--x",
            (Math.random()*400-200)+"px"
        );

        document.body.appendChild(p);

        setTimeout(()=>{

            p.remove();

        },4000);

    }

});

const button = document.getElementById("openLetter");
const container = document.querySelector(".letter-container");
const envelope = document.querySelector(".envelope");
const music = document.getElementById("music");

const text =

`Aku nggak tahu apakah perasaan ini akan sampai atau tidak.

Tapi kalau suatu hari nanti kamu melihat website kecil ini...

ketahuilah...

setiap baris kode,
setiap animasi,
dan setiap bunga yang mekar...

dibuat dengan tulus.

Thank you for being part of my story. 🌸`;

const typing =
document.getElementById("typing");

button.onclick=()=>{

    container.style.display="flex";

    setTimeout(()=>{

        envelope.classList.add("open");

    },500);

    music.play();

    setTimeout(typeWriter,1300);

}

let i=0;

function typeWriter(){

    if(i<text.length){

        typing.innerHTML+=text.charAt(i);

        i++;

        setTimeout(typeWriter,35);

    }

}