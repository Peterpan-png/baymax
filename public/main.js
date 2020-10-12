console.log("js");
//import string from './css.js' 引用js由于gti演示不了所以用string显示
const string = `
#baymax * {
    box-sizing: border-box;
    border: 0;
    padding: 0;
}
*::before,
*::after
{
    box-sizing:border-box
}

#baymax {
    cursor: pointer;
}
#baymax * {
    box-sizing: border-box;
    border: 0;
    padding: 0;
}
*::before,
*::after
{
    box-sizing:border-box
}

#baymax {
    cursor: pointer;
}

body {
    background-color: #C03335;
    min-width: 100vh;
}

.head {
    position: absolute;
    left: 50%;
    top: 20px;
    background-color: white;
    border-radius: 50%;
    width: 90px;
    height: 60px;
    margin-left: -45px;
    box-shadow: 0 -15px 30px rgba(23, 34, 45, 0.2) inset, 0 5px 15px rgba(23, 34, 45, 0.2);
    z-index: 10;
}

.eye {
    position: absolute;
    left: 50%;
    top: 50%;
    margin: -5px 0 0 -5px;
    height: 8px;
    width: 8px;
    border-radius: 50%;
    background-color: #202B36;
    animation: blink 6s ease-in-out infinite;
}

.left.eye {
    margin-left: -20px;
}

.right.eye {
    margin-left: 15px;
}

.head::before {
    content: "";
    width: 34px;
    height: 1px;
    background-color: #91969C;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -2px 0 0 -17px;
}

@keyframes blink {
    0% {
        -moz-transform: scale(1, 1);
        -ms-transform: scale(1, 1);
        -webkit-transform: scale(1, 1);
        transform: scale(1, 1);
    }
    49% {
        -moz-transform: scale(1, 1);
        -ms-transform: scale(1, 1);
        -webkit-transform: scale(1, 1);
        transform: scale(1, 1);
    }
    50% {
        -moz-transform: scale(1, 0.1);
        -ms-transform: scale(1, 0.1);
        -webkit-transform: scale(1, 0.1);
        transform: scale(1, 0.1);
    }
    51% {
        -moz-transform: scale(1, 1);
        -ms-transform: scale(1, 1);
        -webkit-transform: scale(1, 1);
        transform: scale(1, 1);
    }
    60% {
        -moz-transform: scale(1, 1);
        -ms-transform: scale(1, 1);
        -webkit-transform: scale(1, 1);
        transform: scale(1, 1);
    }
    61% {
        -moz-transform: scale(1, 0.1);
        -ms-transform: scale(1, 0.1);
        -webkit-transform: scale(1, 0.1);
        transform: scale(1, 0.1);
    }
    62% {
        -moz-transform: scale(1, 1);
        -ms-transform: scale(1, 1);
        -webkit-transform: scale(1, 1);
        transform: scale(1, 1);
    }
    100% {
        -moz-transform: scale(1, 1);
        -ms-transform: scale(1, 1);
        -webkit-transform: scale(1, 1);
        transform: scale(1, 1);
    }
}

.chest {
    position: absolute;
    left: 50%;
    top: 50px;
    margin-left: -95px;
    width: 190px;
    height: 260px;
    background-color: white;
    border-radius: 50%;
    z-index: 2;
}

.chest-i {
    position: absolute;
    left: 60%;
    top: 15%;
    display: block;
    width: 21px;
    height: 21px;
    border-radius: 50%;
    background-color: white;
    box-shadow: 0 -5px 8px rgba(23, 34, 45, 0.15) inset, 2px 3px 2px rgba(23, 34, 45, 0.05);
    z-index: 2;
}

.belly {
    position: absolute;
    left: 50%;
    top: 60px;
    width: 240px;
    height: 310px;
    margin-left: -120px;
    border-radius: 50%;
    overflow: hidden;
    background-color: white;
    box-shadow: 0 -25px 40px rgba(23, 34, 45, 0.15) inset, 0 5px 15px rgba(23, 34, 45, 0.25);
    z-index: 1;
}

.arm::before {
    position: absolute;
    content: "";
    left: 50%;
    top: 70px;
    margin-left: -45px;
    width: 90px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
}

.left.arm::before {
    transform: translateX(-80px) rotate(30deg);
}

.right.arm::before {
    transform: translateX(80px) rotate(-30deg);
}

.arm::after {
    content: "";
    position: absolute;
    left: 50%;
    width: 80px;
    height: 150px;
    top: 176px;
    margin-left: -40px;
    border-radius: 50%;
    background-color: white;
    box-shadow: 4px -10px 10px rgba(23, 34, 45, 0.2) inset;
}

.right.arm::after {
    transform: rotate(-5deg) translateX(110px);
}

.left.arm::after {
    transform: rotate(5deg) translateX(-110px);
}

.left.leg,
.right.leg {
    position: absolute;
    left: 50%;
    top: 259px;
    width: 50px;
    height: 160px;
    background-color: white;
    box-shadow: -7px -6px 7px rgba(23, 34, 45, 0.1) inset;
}

.left.leg {
    border-radius: 0 0 15px 15px;
    transform: translateX(-50px);
}

.right.leg {
    transform: translateX(0px);
    border-radius: 0 0 15px 15px;
}`
let n = 0;
demo.innerText = string.substr(0, n);
demo2.innerHTML = string.substr(0, n);
let time = 100;
const run = () => {
    n += 1;
    if (n > string.length) {
        window.clearInterval(id)
        return
    }
    demo.innerText = string.substr(0, n);
    demo2.innerHTML = string.substr(0, n);
    console.log(n + ':' + string.substr(0, n));
    demo.scrollTop = demo.scrollHeight;
}

const play = () => {
    return setInterval(run, time);
}
const pause = () => {
    window.clearInterval(id);
}
let id = play()

const slow = () => {
    pause()
    time = 300;
    id = play()
}

const normal = () => {
    pause()
    time = 100;
    id = play()
}

const fast = () => {
    pause()
    time = 0;
    id = play()
}

btnPause.onclick = () => {
    pause()
}

btnPlay.onclick = () => {
    id = play()
}

btnSlow.onclick = slow

btnNormal.onclick = normal

btnFast.onclick = fast