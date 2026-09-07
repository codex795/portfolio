// =====================================
// RAGHAV PORTFOLIO V2
// script.js
// =====================================

// --------------------
// LOADER
// --------------------

window.addEventListener("load", () => {

    const loader = document.getElementById("loader"); 

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.pointerEvents = "none";

        setTimeout(() => {

            loader.style.display = "none";

        }, 600);

    }, 800);

});

// --------------------
// SCROLL PROGRESS BAR
// --------------------

const progressBar = document.getElementById("progressBar");

window.addEventListener("scroll", () => {

    const totalHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const progress =
        (window.scrollY / totalHeight) * 100;

    progressBar.style.width = progress + "%";

});

// --------------------
// MUSIC BUTTON
// --------------------

const music = document.getElementById("bgMusic");

const musicBtn = document.getElementById("musicBtn");

let playing = false;

musicBtn.addEventListener("click", () => {

    if (!playing) {

        music.play();

        playing = true;

        musicBtn.innerHTML =
            '<i class="ri-pause-fill"></i>';

    } else {

        music.pause();

        playing = false;

        musicBtn.innerHTML =
            '<i class="ri-volume-up-fill"></i>';

    }

});

// --------------------
// PROFILE PARALLAX
// --------------------

const profile = document.querySelector(".profile-card");

document.addEventListener("mousemove", (e) => {

    const x =
        (window.innerWidth / 2 - e.clientX) / 40;

    const y =
        (window.innerHeight / 2 - e.clientY) / 40;

    profile.style.transform =
        `translate(${x}px, ${y}px)`;

});

// --------------------
// HERO BUTTON EFFECT
// --------------------

const buttons = document.querySelectorAll(".btn,.btn-outline");

buttons.forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "scale(1.05)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "scale(1)";

    });

});
// =====================================
// FLOATING PARTICLES
// =====================================

const particleContainer = document.getElementById("particles");

for(let i=0;i<120;i++){

    const p=document.createElement("span");

    p.classList.add("particle");

    p.style.left=Math.random()*100+"%";

    p.style.top=Math.random()*100+"%";

    p.style.animationDelay=Math.random()*8+"s";

    p.style.animationDuration=(5+Math.random()*8)+"s";

    particleContainer.appendChild(p);

}

// =====================================
// BLUE LIGHT FOLLOW
// =====================================

const blueLight=document.querySelector(".blue-light");

document.addEventListener("mousemove",(e)=>{

    const x=e.clientX-window.innerWidth/2;

    const y=e.clientY-window.innerHeight/2;

    blueLight.style.transform=
    `translate(calc(-50% + ${x*0.04}px),${y*0.04}px)`;

});

// =====================================
// FOG PARALLAX
// =====================================

const fog1=document.querySelector(".fog1");
const fog2=document.querySelector(".fog2");

document.addEventListener("mousemove",(e)=>{

    let x=(e.clientX/window.innerWidth)-0.5;

    fog1.style.transform=`translateX(${x*40}px)`;

    fog2.style.transform=`translateX(${-x*30}px)`;

});

// =====================================
// SCROLL REVEAL
// =====================================

// const revealItems=document.querySelectorAll(
// "section,.project-card,.skills-grid div,.contact-box div"
// );

// function reveal(){

//     const trigger=window.innerHeight*0.85;

//     revealItems.forEach(item=>{

//         const top=item.getBoundingClientRect().top;

//         if(top<trigger){

//             item.style.opacity="1";

//             item.style.transform="translateY(0px)";

//         }

//     });

// }

revealItems.forEach(item=>{

    item.style.opacity="0";

    item.style.transform="translateY(50px)";

    item.style.transition="all .8s ease";

});

window.addEventListener("scroll",reveal);

reveal();

// =====================================
// SMOOTH NAVIGATION
// =====================================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(
            this.getAttribute("href")
        );

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});
