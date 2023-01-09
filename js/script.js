//HAMBURGERshow
// const showPosition = () => {
//     const burger = document.querySelector('.burger')
//     const position = window.scrollY;
//     const afterheader = document.querySelector('.target').offsetTop
//     let flag = true;

//     if (position > afterheader / 4) {
//         burger.classList.remove('head')
//         flag = false;
//     } else {
//         burger.classList.add('head')
//         flag = true;
//     }

//     console.log(position, afterheader / 3, flag)
// }
// const afterheader = document.querySelector('.target').offsetTop

// window.addEventListener('scroll', showPosition)


//pisanie na maszynie [HEADER]
// const motto = document.querySelector('.motto h2');
// const quoteAuthors = document.querySelector('.names');
// const h2 = '"Za każdym razem staramy się stworzyć taki film który pozwoli wam osiągnąć wasze cele. Bo wasz sukces jest też naszym sukcesem."'
// const authors = '- PAWEŁ & WOJTEK -';

// let i = 0;
// let j = 0;


//burger
const burgerNavi = document.querySelectorAll('nav ul li a');
const burg = document.querySelector('.plate1')
const callButton = document.querySelector('.attachmendFixedCallButton')

const burger = function () {
    document.querySelector('nav').classList.toggle('off');
    burg.classList.toggle('active')
    document.querySelector('.burger').classList.toggle('off');
    callButton.classList.toggle('active')
}

burg.addEventListener('click', burger);
for (a of burgerNavi) a.addEventListener('click', burger);

//oferta
const cennik1 = document.querySelector('.cennik1');
const cennik2 = document.querySelector('.cennik2');
const cennik3 = document.querySelector('.cennik3');
const cennik4 = document.querySelector('.cennik4');
const cennik5 = document.querySelector('.cennik5');
const cennik6 = document.querySelector('.cennik6');
const cennik7 = document.querySelector('.cennik7');
const cennik8 = document.querySelector('.cennik8');
const cennik9 = document.querySelector('.cennik9');
const first = document.querySelectorAll('.first')
const second = document.querySelectorAll('.second')
const third = document.querySelectorAll('.third')
const forth = document.querySelectorAll('.forth')
const fifth = document.querySelectorAll('.fifth')
const sixth = document.querySelectorAll('.sixth')
const seventh = document.querySelectorAll('.seventh')
const eighth = document.querySelectorAll('.eighth')
const nineth = document.querySelectorAll('.nineth')
const oferta = document.querySelectorAll('table');

const cennik1more = function () {
    first.forEach((element) => {
        element.classList.toggle('hideTable');
    })
}


const cennik2more = () => {
    second.forEach((element) => {
        element.classList.toggle('hideTable');
    })
}

const cennik3more = () => {
    third.forEach((element) => {
        element.classList.toggle('hideTable');
    })
}
const cennik4more = () => {
    forth.forEach((element) => {
        element.classList.toggle('hideTable');
    })
}
const cennik5more = () => {
    fifth.forEach((element) => {
        element.classList.toggle('hideTable');
    })
}
const cennik6more = () => {
    sixth.forEach((element) => {
        element.classList.toggle('hideTable');
    })
}
const cennik7more = () => {
    seventh.forEach((element) => {
        element.classList.toggle('hideTable');
    })
}
const cennik8more = () => {
    eighth.forEach((element) => {
        element.classList.toggle('hideTable');
    })
}
const cennik9more = () => {
    nineth.forEach((element) => {
        element.classList.toggle('hideTable');
    })
}


cennik1.addEventListener('click', cennik1more)
cennik2.addEventListener('click', cennik2more)
cennik3.addEventListener('click', cennik3more)
cennik4.addEventListener('click', cennik4more)
cennik5.addEventListener('click', cennik5more)
cennik6.addEventListener('click', cennik6more)
cennik7.addEventListener('click', cennik7more)
cennik8.addEventListener('click', cennik8more)
cennik9.addEventListener('click', cennik9more)


const galleryBtn = document.querySelector('.btnGallery');
const gallerryHidden = document.querySelector('.hiddenGallery');
const galleryHide = () => {
    gallerryHidden.classList.toggle('hidden');
}

galleryBtn.addEventListener('click', galleryHide);


const time = 2000;
const divs = [...document.querySelectorAll('.dots div')];
const iLeft = document.querySelector('.leftt i')
const iRight = document.querySelector('.rightt i')
const slide = [{
        pe: "Wspólnie będziemy pracować nad poprawą mobilności, stabilności oraz siły!"
    },
    {
        pe: "Rozpocznij swoją przygodę z siłownią, treningiem balistycznym lub treningiem funkcjonalnym pod okiem doświadczonego trenera"
    },
    {
        pe: "Ćwicz na najwyższej jakości sprzęcie dla profesjonalistów!"
    }
]

let slideIndex = 0;

const changeDot = () => {
    const dotIndex = divs.findIndex(div => div.classList.contains('activeDiv'))
    divs[dotIndex].classList.remove('activeDiv');
    divs[slideIndex].classList.add('activeDiv');
}

const changeSlide = () => {
    slideIndex++;
    if (slideIndex == slide.length) slideIndex = 0;
    pe.textContent = slide[slideIndex].pe;
    changeDot()
}

let indexInterval = setInterval(changeSlide, time)

const dontRepeatUrself = function () {
    if (slideIndex < 0) slideIndex = slide.length - 1
    else if (slideIndex == slide.length) slideIndex = 0;
    pe.textContent = slide[slideIndex].pe;
    changeDot()
    indexInterval = setInterval(changeSlide, time)
}

const changeManualy = function (e) {
    if (e.keyCode === 37 || e.keyCode === 39) {
        clearInterval(indexInterval);
        e.keyCode === 37 ? slideIndex-- : slideIndex++
        dontRepeatUrself()
    }
}

const left = document.querySelector('.left');
const right = document.querySelector('.right');

const changeManualyMobileLeft = function () {
    clearInterval(indexInterval);
    slideIndex--
    dontRepeatUrself()
}

const changeManualyMobileRight = function () {
    clearInterval(indexInterval);
    slideIndex++
    dontRepeatUrself()
}

window.addEventListener('keydown', changeManualy)
left.addEventListener('click', changeManualyMobileLeft)
right.addEventListener('click', changeManualyMobileRight)
// //reklama firm [slider]
// const time = 2000;
// const divs = [...document.querySelectorAll('.dots div')];
// const img = document.querySelector('.partners img')
// const iLeft = document.querySelector('.left i')
// const iRight = document.querySelector('.right i')
// const slide = [{
//         img: "img/partnersSmall/partner0.png"
//     },
//     {
//         img: "img/partnersSmall/partner1.png"
//     },
//     {
//         img: "img/partnersSmall/partner2.png"
//     },
//     {
//         img: "img/partnersSmall/partner3.png"
//     },
//     {
//         img: "img/partnersSmall/partner4.png"
//     },
//     {
//         img: "img/partnersSmall/partner5.png"
//     }
// ]

// let slideIndex = 0;

// const changeDot = () => {
//     const dotIndex = divs.findIndex(div => div.classList.contains('active'))
//     divs[dotIndex].classList.remove('active');
//     divs[slideIndex].classList.add('active');
// }

// const changeSlide = () => {
//     slideIndex++;
//     if (slideIndex == slide.length) slideIndex = 0;
//     img.src = slide[slideIndex].img;
//     changeDot()
// }

// let indexInterval = setInterval(changeSlide, time)

// const dontRepeatUrself = function () {
//     if (slideIndex < 0) slideIndex = slide.length - 1
//     else if (slideIndex == slide.length) slideIndex = 0;
//     img.src = slide[slideIndex].img;
//     changeDot()
//     indexInterval = setInterval(changeSlide, time)
// }

// const changeManualy = function (e) {
//     if (e.keyCode === 37 || e.keyCode === 39) {
//         clearInterval(indexInterval);
//         e.keyCode === 37 ? slideIndex-- : slideIndex++
//         dontRepeatUrself()
//     }
// }

// const left = document.querySelector('.left');
// const right = document.querySelector('.right');

// const changeManualyMobileLeft = function () {
//     clearInterval(indexInterval);
//     slideIndex--
//     dontRepeatUrself()
// }

// const changeManualyMobileRight = function () {
//     clearInterval(indexInterval);
//     slideIndex++
//     dontRepeatUrself()
// }

// window.addEventListener('keydown', changeManualy)
// left.addEventListener('click', changeManualyMobileLeft)
// right.addEventListener('click', changeManualyMobileRight)


// //left - right art 1-5

// const showArt = () => {
//     const art1 = document.querySelector('.art1');
//     const art2 = document.querySelector('.art2');
//     const art3 = document.querySelector('.art3');
//     const art4 = document.querySelector('.art4');
//     const art5 = document.querySelector('.art5');
//     const reset = document.querySelector('.partners');
//     const position = window.scrollY;
//     // let flag = 1
//     if (position > art1.offsetTop - window.innerHeight + art1.clientHeight / 2) {
//         art1.classList.add('active');
//     }

//     if (position > art2.offsetTop - window.innerHeight + art2.clientHeight / 2) {
//         art2.classList.add('active')
//     }
//     if (position > art3.offsetTop - window.innerHeight + art3.clientHeight / 2) {
//         art3.classList.add('active')
//     }
//     if (position > art4.offsetTop - window.innerHeight + art4.clientHeight / 2) {
//         art4.classList.add('active')
//     }
//     if (position > art5.offsetTop - window.innerHeight + art5.clientHeight / 2) {
//         art5.classList.add('active')
//     }

//     // if (position < art5.offsetTop - window.innerHeight + art5.clientHeight / 2) {
//     //     art5.classList.add('active')
//     // }

//     // const removeActive = () => {
//     //     art1.classList.remove('active');
//     //     art3.classList.remove('active');
//     //     art4.classList.remove('active');
//     //     art5.classList.remove('active');
//     //     art2.classList.remove('active');
//     // }
//     // if (position < art5.offsetTop && flag == true) {
//     //     flag = !flag
//     // }
//     // if (flag = false && position > reset.offsetTop ) {
//     //     art1.classList.remove('active');
//     //     art3.classList.remove('active');
//     //     art4.classList.remove('active');
//     //     art5.classList.remove('active');
//     //     art2.classList.remove('active');
//     //     flag = !flag

//     // }
// }

// window.addEventListener('scroll', showArt)


// //more

// const buton1 = document.querySelector('.first');
// const buton2 = document.querySelector('.second');
// const buton3 = document.querySelector('.third');

// const faq1btn = document.querySelector('.faqBtn1');
// const faq2btn = document.querySelector('.faqBtn2');
// const faq3btn = document.querySelector('.faqBtn3');

// const p1 = document.querySelector('.pFirst');
// const p2 = document.querySelector('.pSecond');
// const p3 = document.querySelector('.pThird');

// const p1faq = document.querySelectorAll('.faq1');
// const p2faq = document.querySelector('.faq2');
// const p3faq = document.querySelector('.faq3');

// let flag1 = true
// let flag2 = true
// let flag3 = true

// const firstMore = () => {
//     p1.classList.toggle('off')
//     if (flag1 == true) {
//         buton1.textContent = 'mniej'
//         flag1 = !flag1
//     } else {
//         buton1.textContent = 'więcej'
//         flag1 = !flag1;
//     }
// }
// const secondMore = () => {
//     p2.classList.toggle('off')
//     if (flag2 == true) {
//         buton2.textContent = 'mniej'
//         flag2 = !flag2
//     } else {
//         buton2.textContent = 'więcej'
//         flag2 = !flag2;
//     }
// }
// const thirdMore = () => {
//     p3.classList.toggle('off')
//     if (flag3 == true) {
//         buton3.textContent = 'mniej'
//         flag3 = !flag3
//     } else {
//         buton3.textContent = 'więcej'
//         flag3 = !flag3
//     }
// }

// const faq1more = () => {
//     p1faq.forEach(p => p.classList.toggle('off'))
//     document.querySelectorAll('.fa-arrow-up.faq1i').forEach(arrowUp => arrowUp.classList.toggle('off'))
//     document.querySelectorAll('.fa-arrow-down.faq1i').forEach(arrowDown => arrowDown.classList.toggle('off'))
// }
// const faq2more = () => {
//     p2faq.classList.toggle('off')
//     document.querySelectorAll('.fa-arrow-up.faq2i').forEach(arrowUp => arrowUp.classList.toggle('off'))
//     document.querySelectorAll('.fa-arrow-down.faq2i').forEach(arrowDown => arrowDown.classList.toggle('off'))
// }
// const faq3more = () => {
//     p3faq.classList.toggle('off')
//     document.querySelectorAll('.fa-arrow-up.faq3i').forEach(arrowUp => arrowUp.classList.toggle('off'))
//     document.querySelectorAll('.fa-arrow-down.faq3i').forEach(arrowDown => arrowDown.classList.toggle('off'))
// }

// buton1.addEventListener('click', firstMore)
// buton2.addEventListener('click', secondMore)
// buton3.addEventListener('click', thirdMore)

// faq1btn.addEventListener('click', faq1more)
// faq2btn.addEventListener('click', faq2more)
// faq3btn.addEventListener('click', faq3more)