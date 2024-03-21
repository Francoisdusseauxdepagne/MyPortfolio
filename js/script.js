// script au chargement de la page, avec date et heure, animation lettres
document.addEventListener("DOMContentLoaded", () => {

    const dateEl = document.querySelector('#date');
    const hourEl = document.querySelector('#hour');

    const displaydate = () => {
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        dateEl.textContent = `We are the ${day}/0${month}/${year}`;
    }    
    displaydate();

    const DisplayHour = () => {
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const secondes = date.getSeconds();
        hourEl.textContent = `It's : ${hours}:${minutes}:${secondes}`;
    };
    DisplayHour();
    setInterval(DisplayHour, 1000);


    let letter = new Typed('.textApropos_text--typed', {
        strings: ["Web developer, mobile web", "I am passionate about digital technology", "I love challenges"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    let letter2 = new Typed('.presentationText_title2', {
        strings: ["Click on my name", "To begin the adventure", ],
        typeSpeed: 70,
        backSpeed: 30,
        loop: true
    });
    
    function star(){
        let divEl = document.createElement('div');
        divEl.classList.add('star');
        document.body.appendChild(divEl);
        divEl.style.left = Math.random() * +innerWidth + "px";
    
        let size = Math.random() * 5; // defini la taille des etoiles aleatoirement
        let duration = Math.random() * 2; // defini la duree de l'animation aleatoirement
    
        divEl.style.fontSize = size + 'px';
        divEl.style.animationDuration = duration + 's';

        let colors = ["#F7F4EF", "#00A859", "#D15D64", "#E88334", "#7B63AA", "#FCD05B"]; // defini les couleurs des etoiles dans un tableau
        divEl.style.color = colors[Math.floor(Math.random() * colors.length)];
    
        setTimeout(() => {
            document.body.removeChild(divEl);
        }, 2000);
    }
    setInterval(function(){
        star();
    }, 30)
});

// script pour defilement au scroll pour header
window.addEventListener('scroll', () => {
    const header = document.querySelector('#header');
    if (window.scrollY > 90) {
        header.classList.add('inactive');
        header.classList.remove('active'); // Supprimez la classe active si elle est présente
    } else {
        header.classList.add('active');
        header.classList.remove('inactive'); // Supprimez la classe inactive si elle est présente
    }
});

window.addEventListener('scroll', () => {
    const Apropos = document.querySelector('#Apropos');
    Apropos.style.opacity = 0;

    if (window.scrollY > 400 && window.scrollY < 900) {
        Apropos.style.transition = 'opacity 0.5s ease';
        Apropos.style.opacity = 1;
    } 
});

window.addEventListener('scroll', () => {
    const Apropos = document.querySelector('#competences');
    Apropos.style.opacity = 0;

    if (window.scrollY > 1000) {
        Apropos.style.transition = 'opacity 0.5s ease';
        Apropos.style.opacity = 1;
    }
});

window.addEventListener('scroll', () => {
    const projets = document.querySelector('#projets');
    projets.style.opacity = 0;

    if (window.scrollY > 1600) {
        projets.style.transition = 'opacity 0.5s ease';
        projets.style.opacity = 1;
    }
})

// script pour changer de text au clic
const change = document.querySelector('.presentationText_presentation');

change.addEventListener('click', () => {
    change.textContent = "To see my portfolio, scroll down. Enjoy your visit!";
    change.style.color = "#2086B7";
    change.style.margin = "auto";
    change.style.width = "70%";
    change.style.paddingTop = "150px";
    change.style.paddingBottom = "150px";

    setTimeout(() => {
        change.textContent = "Hi I'm François DUSSEAUX-DEPAGNE, Welcome to my Portfolio !";
        change.style.color = "#FFFFFF";
        change.style.margin = "auto";
        change.style.width = "70%";
        change.style.paddingTop = "150px";
        change.style.paddingBottom = "150px";
    }, 2500);
})

function createImage(imgData, divEl, opacity, width, top, left) {
    const img = document.createElement("img");
    img.src = imgData.src;
    img.style.opacity = opacity;
    img.style.width = width;
    img.style.transition = "all 0.5s ease-in-out";
    img.style.position = "absolute";
    img.style.top = top;
    img.style.left = left;
    img.style.borderRadius = "5px";

    divEl.appendChild(img);

    imgData.element.addEventListener("mouseover", () => {
        img.style.opacity = "1";
    });

    imgData.element.addEventListener("mouseout", () => {
        img.style.opacity = "0";
    });
}

function mouv() {
    const divEl = document.querySelector('.imageProjet');
    const fit = document.querySelector('.fitList');
    const lens = document.querySelector('.lensList');
    const shop = document.querySelector('.shopList');

    const images = [
        { element: fit, src: "../images/RF.png" },
        { element: lens, src: "../images/RL.png" },
        { element: shop, src: "../images/Men's Shop.png" }
    ];

    images.forEach(imgData => {
        createImage(imgData, divEl, "0", "100%", "50px", "0px");
    });
}

if (window.innerWidth > 768) {
    mouv();
}
