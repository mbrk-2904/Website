// ===============================
// ELEMENT
// ===============================

const loading = document.getElementById("loading");
const home = document.getElementById("home");
const letter = document.getElementById("letter");
const ending = document.getElementById("ending");

const typing = document.getElementById("typing");
const letterText = document.getElementById("letterText");

// ===============================
// LOADING
// ===============================

window.addEventListener("load",()=>{

    setTimeout(()=>{

        loading.classList.add("hidden");
        home.classList.remove("hidden");

        createStars();

        createPetals();

        typeHome();

    },2200);

});

// ===============================
// TYPEWRITER HOME
// ===============================

const homeMessage =
"Hai... makasih ya udah mau buka website kecil ini 😊";

let h = 0;

function typeHome(){

    if(h < homeMessage.length){

        typing.innerHTML += homeMessage.charAt(h);

        h++;

        setTimeout(typeHome,40);

    }

}

// ===============================
// TYPEWRITER LETTER
// ===============================

const confession =
"Sebenernya... aku udah lama suka sama kamu. Mungkin ini cara paling berani yang bisa aku lakuin buat jujur sama perasaanku. ❤️";

let l = 0;

function typeLetter(){

    if(l < confession.length){

        letterText.innerHTML += confession.charAt(l);

        l++;

        setTimeout(typeLetter,35);

    }

}

// ===============================
// STARS
// ===============================

function createStars(){

    const stars = document.getElementById("stars");

    for(let i=0;i<100;i++){

        const star = document.createElement("div");

        star.className="star";

        star.style.left=Math.random()*100+"vw";
        star.style.top=Math.random()*100+"vh";

        star.style.animationDelay=Math.random()*2+"s";

        stars.appendChild(star);

    }

}

// ===============================
// PETALS
// ===============================

function createPetals(){

    setInterval(()=>{

        const petal=document.createElement("div");

        petal.innerHTML="🌸";

        petal.style.position="fixed";

        petal.style.left=Math.random()*100+"vw";

        petal.style.top="-40px";

        petal.style.fontSize=(18+Math.random()*18)+"px";

        petal.style.pointerEvents="none";

        petal.style.transition="7s linear";

        document.body.appendChild(petal);

        requestAnimationFrame(()=>{

            petal.style.transform=
            "translateY(110vh) rotate(360deg)";

            petal.style.opacity="0";

        });

        setTimeout(()=>{

            petal.remove();

        },7000);

    },300);

}

// ===============================
// PART 1C-2
// ===============================

const openLetter = document.getElementById("openLetter");
const yes = document.getElementById("yes");
const no = document.getElementById("no");

// ===============================
// OPEN LETTER
// ===============================

if(openLetter){

openLetter.addEventListener("click",()=>{

    home.classList.add("hidden");

    letter.classList.remove("hidden");

    letterText.innerHTML="";

    l=0;

    typeLetter();

});

}

// ===============================
// MOVE BUTTON
// ===============================

const funnyText=[

"Yakin? 🥹",

"Eh jangan 😭",

"Klik yang Iya dong ❤️",

"Gabisa 😝",

"Hehehe 😆",

"Meow 😼"

];

let textIndex=0;

function moveNoButton(){

    const area=document.querySelector(".choice");

    const maxX=area.offsetWidth-no.offsetWidth;

    const maxY=area.offsetHeight-no.offsetHeight;

    const x=Math.random()*Math.max(maxX,10);

    const y=Math.random()*Math.max(maxY,10);

    no.style.position="absolute";

    no.style.left=x+"px";

    no.style.top=y+"px";

    no.innerHTML=funnyText[textIndex];

    textIndex++;

    if(textIndex>=funnyText.length){

        textIndex=0;

    }

}

// Desktop
no.addEventListener("mouseenter",moveNoButton);

// Kalau sempat diklik
no.addEventListener("click",(e)=>{

    e.preventDefault();

    moveNoButton();

});

// ===============================
// YES BUTTON
// ===============================

yes.addEventListener("mouseenter",()=>{

    yes.style.transform="scale(1.12)";

});

yes.addEventListener("mouseleave",()=>{

    yes.style.transform="scale(1)";

});

// =======================
// PART 2A
// =======================

const countdown = document.getElementById("countdown");
const photo = document.getElementById("photo");
const endTitle = document.getElementById("endTitle");
const endMessage = document.getElementById("endMessage");
const restart = document.getElementById("restart");

// tombol IYA
yes.addEventListener("click", () => {

    launchConfetti();

    playMusic();

    setTimeout(() => {

        letter.classList.add("hidden");

        ending.classList.remove("hidden");

        startCountdown();

    },800);

});

// =======================
// COUNTDOWN
// =======================

function startCountdown(){

    let num = 3;

    countdown.innerHTML = num;

    const timer = setInterval(()=>{

        num--;

        if(num > 0){

            countdown.innerHTML = num;

        }else{

            clearInterval(timer);

            countdown.style.display = "none";

            photo.classList.add("showPhoto");

            typeEnding();

        }

    },1000);

}

// =======================
// TYPEWRITER ENDING
// =======================

const endingText =
"Makasih udah mau baca sampai akhir ❤️\n\nAku cuma mau jujur tentang perasaanku.\n\nApapun jawabannya, aku senang bisa menyampaikan ini. 🌸";
let e = 0;

function typeEnding(){

    endTitle.innerHTML = "❤️ For You ❤️";

    // Reset biar gak dobel pas replay
    endMessage.innerHTML = "";
    e = 0;

    function write(){

        if(e < endingText.length){

            endMessage.innerHTML += endingText.charAt(e);

            e++;

            setTimeout(write,40);

        }

    }

    write();

}

// =======================
// REPLAY
// =======================

if(restart){

    restart.onclick = ()=>{

        location.reload();

    };

}

function launchConfetti(){

    for(let i=0;i<180;i++){

        const c=document.createElement("div");

        c.className="confetti";

        c.style.left=Math.random()*100+"vw";

        c.style.background=

        ["#ff69b4","#ffd93d","#6bcBff","#6eff9b","#fff"]

        [Math.floor(Math.random()*5)];

        c.style.animationDuration=

        (2+Math.random()*2)+"s";

        document.body.appendChild(c);

        setTimeout(()=>{

            c.remove();

        },4000);

    }

}

// ===============================
// CURSOR GLOW
// ===============================

const glow = document.createElement("div");

glow.className="cursorGlow";

document.body.appendChild(glow);


document.addEventListener("mousemove",(e)=>{

    glow.style.left=e.clientX+"px";

    glow.style.top=e.clientY+"px";

});

// ===============================
// FLOATING HEART
// ===============================

function createHeart(){

    const heart=document.createElement("div");

    heart.innerHTML="❤️";

    heart.style.position="fixed";

    heart.style.left=
    Math.random()*100+"vw";

    heart.style.bottom="-30px";

    heart.style.fontSize=
    (15+Math.random()*25)+"px";

    heart.style.pointerEvents="none";

    heart.style.animation=
    "heartUp 5s linear";

    document.body.appendChild(heart);


    setTimeout(()=>{

        heart.remove();

    },5000);

}


setInterval(createHeart,800);

// ===============================
// PART 3D - MUSIC FADE
// ===============================

const music =
document.getElementById("music");


function playMusic(){

    if(!music) return;


    music.volume=0;

    music.play();


    let volume=0;


    const fade=setInterval(()=>{

        if(volume < 0.5){

            volume+=0.02;

            music.volume=volume;

        }else{

            clearInterval(fade);

        }

    },100);

}