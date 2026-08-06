// =========================
// ELEMENT
// =========================

const loading = document.getElementById("loading");
const main = document.getElementById("main");
const music = document.getElementById("music");

const typing = document.getElementById("typing");
const next = document.getElementById("next");

const question = document.getElementById("question");

// =========================
// LOADING
// =========================

window.addEventListener("load", () => {

    setTimeout(() => {

        loading.style.display = "none";

        main.style.display = "flex";

        typeText();

        // Browser kadang memblokir autoplay.
        music.play().catch(() => {});

        createHearts();
        createSakura();

    }, 2500);

});

// =========================
// TYPEWRITER
// =========================

const text =
"Haiii... makasih ya udah mau buka website kecil ini. Aku cuma pengen ngomong sesuatu yang udah lama aku simpan 🥹";

let index = 0;

function typeText(){

    if(index < text.length){

        typing.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeText, 45);

    }

}

// =========================
// NEXT BUTTON
// =========================

next.onclick = () => {

    question.style.display = "block";

    next.style.display = "none";

};

// =========================
// FLOATING HEART
// =========================

function createHearts(){

    setInterval(()=>{

        const heart = document.createElement("div");

        heart.innerHTML = "💖";

        heart.style.position = "fixed";

        heart.style.left = Math.random()*100+"vw";

        heart.style.bottom = "-30px";

        heart.style.fontSize =
        (20+Math.random()*20)+"px";

        heart.style.pointerEvents="none";

        heart.style.animation =
        "fly 6s linear forwards";

        document.body.appendChild(heart);

        setTimeout(()=>{

            heart.remove();

        },6000);

    },500);

}

// =========================
// SAKURA
// =========================

function createSakura(){

    setInterval(()=>{

        const s = document.createElement("div");

        s.innerHTML="🌸";

        s.style.position="fixed";

        s.style.left=Math.random()*100+"vw";

        s.style.top="-40px";

        s.style.fontSize=
        (15+Math.random()*18)+"px";

        s.style.animation=
        "fall 8s linear forwards";

        s.style.pointerEvents="none";

        document.body.appendChild(s);

        setTimeout(()=>{

            s.remove();

        },8000);

    },350);

}

// =========================
// ANIMATION CSS
// =========================

const style = document.createElement("style");

style.innerHTML=`

@keyframes fly{

0%{

transform:
translateY(0);

opacity:1;

}

100%{

transform:
translateY(-120vh);

opacity:0;

}

}

@keyframes fall{

0%{

transform:
translateY(0)
rotate(0deg);

opacity:1;

}

100%{

transform:
translateY(110vh)
rotate(360deg);

opacity:0;

}

}

`;

document.head.appendChild(style);

// =========================
// PART 2B
// =========================

const ending = document.getElementById("ending");
yes.onclick = () => {

    explodeHearts();

    confetti();

    document
    .querySelector(".glass")
    .classList
    .add("fadeOut");

    setTimeout(()=>{

        main.style.display="none";

        ending.style.display="block";

    },800);

};

// =========================
// HEART EXPLOSION
// =========================

function explodeHearts(){

    for(let i=0;i<60;i++){

        const h=document.createElement("div");

        h.className="popHeart";

        h.innerHTML=Math.random()>0.5?"💖":"💕";

        h.style.left=Math.random()*100+"vw";

        h.style.bottom="-30px";

        h.style.fontSize=
        (20+Math.random()*30)+"px";

        h.style.animationDuration=
        (2+Math.random()*2)+"s";

        document.body.appendChild(h);

        setTimeout(()=>{

            h.remove();

        },4000);

    }

}

// =========================
// CONFETTI
// =========================

function confetti(){

const colors=[

"#ff6ea8",

"#ffe66d",

"#6fd3ff",

"#7dffb3",

"#ffffff"

];

for(let i=0;i<180;i++){

const c=document.createElement("div");

c.className="confetti";

c.style.left=Math.random()*100+"vw";

c.style.background=

colors[
Math.floor(
Math.random()*colors.length)];

c.style.animationDuration=

(2+Math.random()*2)+"s";

document.body.appendChild(c);

setTimeout(()=>{

c.remove();

},4000);

}

}


// =========================
// PART 2C
// =========================

const countdown =
document.getElementById("countdown");

const photo =
document.getElementById("photo");

const endTitle =
document.getElementById("endTitle");

const endText =
document.getElementById("endText");

const restart =
document.getElementById("restart");

// Override ending sebelumnya

function startEnding(){

    ending.style.display="block";

    let number=3;

    countdown.innerHTML=number;

    const timer=setInterval(()=>{

        number--;

        if(number>0){

            countdown.innerHTML=number;

        }else{

            clearInterval(timer);

            countdown.style.display="none";

            photo.classList.add("showPhoto");

            typeEnding();

        }

    },1000);

}

// Ganti bagian yes.onclick

yes.onclick=()=>{

    explodeHearts();

    confetti();

    document
    .querySelector(".glass")
    .classList
    .add("fadeOut");

    setTimeout(()=>{

        main.style.display="none";

        startEnding();

    },900);

};

// =========================
// END TYPEWRITER
// =========================

const endingMessage =
"Thank you for reading until the end. 💖\n\nAku nggak tahu jawabanmu nanti gimana...\n\nTapi aku cuma pengen jujur sama perasaanku.\n\nSemoga ini jadi awal cerita yang indah buat kita. 🌸";

let x=0;

function typeEnding(){

    endTitle.innerHTML=
    "❤️ For You ❤️";

    function write(){

        if(x<endingMessage.length){

            endText.innerHTML+=
            endingMessage.charAt(x);

            x++;

            setTimeout(write,40);

        }

    }

    write();

}

// Restart

restart.onclick=()=>{

location.reload();

};