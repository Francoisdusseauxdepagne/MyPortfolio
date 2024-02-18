document.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelector('#titleAnimation'),
    dateEl = document.querySelector('#date'),
    hourEl = document.querySelector('#hour')


    function animateText() {
        const text = title.innerText;
        title.innerText = '';
        for(let i = 0; i < text.length; i++) {
            const letter = document.createElement('span');
            letter.innerText = text[i];
            letter.classList.add('letter');
            title.appendChild(letter);
            setTimeout(() => {
                letter.style.opacity = '1';
            }, i * 150);
        }
        setTimeout(animateText, text.length * 150);
    }
    animateText();

    const displaydate = () => {
        date = new Date(),
        year = date.getFullYear(),
        month = date.getMonth() + 1
        day = date.getDate();
        dateEl.textContent = ` Hello ! Nous sommes le ${day}/0${month}/${year}`;
    }    
    displaydate();

    const DisplayHour = () => {
        date = new Date(),
        hours = date.getHours(),
        minutes = date.getMinutes(),
        secondes = date.getSeconds(),
        hourEl.textContent = `Il est : ${hours}:${minutes}:${secondes}`;
};
    DisplayHour();
    setInterval(DisplayHour, 1000);
});

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if(window.scrollY > 740) {
        header.classList.add('active');
    }
});