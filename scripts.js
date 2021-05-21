const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 19000;
const breathTimeIn = 4000;
const holdTime = 7000;
const breathTimeOut = 8000;

breathAnimation();

function breathAnimation() {
    text.innerText = 'ដង្ហើមចូល';
    container.className = 'container grow';

    setTimeout(()=>{
        text.innerText = 'ទប់ដង្ហើម';

        setTimeout(()=> {
            text.innerText = 'ដង្ហើមចេញ';
            container.className = 'container shrink';

            setTimeout(()=>{

            }, breathTimeOut)
        }, holdTime);
    }, breathTimeIn);
}

setInterval(breathAnimation, totalTime);