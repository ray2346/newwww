const btn = document.querySelector('.btn');
let timeId;
i = 0;

function MyAnimation() {

    const elem = document.querySelector('.box')
    let position = 0;



    function peredvijenie() {
        if (position === 600) {
            clearInterval(id)
        } else {
            position++;
            elem.style.top = position + 'px';
            // elem.style.left = position + 'px';
        }if (elem.style.top === '300px'){
            elem.style.left = position + 'px';
        }

    }
    const id =setInterval(peredvijenie,10)
}


btn.addEventListener('click',MyAnimation)