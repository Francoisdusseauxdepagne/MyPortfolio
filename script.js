document.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelector('#scrolling-title');
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
});
