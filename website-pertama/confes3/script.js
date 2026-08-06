const next=document.getElementById("next");
const question=document.getElementById("question");

next.onclick=()=>{

question.classList.remove("hide");

next.style.display="none";

}

const no=document.getElementById("no");

no.addEventListener("mouseover",()=>{

let x=Math.random()*250;
let y=Math.random()*80;

no.style.left=x+"px";
no.style.top=y+"px";

});

const yes=document.getElementById("yes");

yes.onclick=()=>{

document.querySelector(".card").innerHTML=`

<img src="https://media.tenor.com/6K8K0h6vY4YAAAAi/cat-cute.gif" width="180">

<h1>YEEEEEYYY🥹💖</h1>

<p>

Mulai sekarang kamu resmi jadi penyebab
aku senyum-senyum sendiri tiap hari 😭💕

</p>

<h2>🌹❤️</h2>

`;

confetti();

}

function confetti(){

for(let i=0;i<120;i++){

let love=document.createElement("span");

love.innerHTML=Math.random()>0.5?"💖":"🌸";

love.style.left=Math.random()*100+"vw";

love.style.animationDuration=(Math.random()*4+3)+"s";

love.style.fontSize=(Math.random()*25+15)+"px";

document.querySelector(".hearts").appendChild(love);

}

}