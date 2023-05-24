const prev = document.getElementById('prev');
const next = document.getElementById('next');
const progress = document.getElementById('progress');
const circle = document.querySelectorAll('span.circle')
let inc = 33;
let rWidth = 0;
let idx=0;

circle[idx].classList.add('active');

next.addEventListener('click',(event) => {
    if(rWidth < 33*3){
        idx++;
        rWidth += inc;
        progress.style.width = `${rWidth}%`
        circle[idx].classList.add('active');
        next.classList.remove("disabled")
    }
    // disable
    if(rWidth === 99) next.classList.add("disabled")
    if(rWidth > 0)prev.classList.remove("disabled")
})


prev.addEventListener('click',(event) => {
    if(rWidth > 0){
        rWidth -= inc;
        progress.style.width = `${rWidth}%`
        circle[idx].classList.remove('active');
        idx--;
        prev.classList.remove("disabled");
    }
    // disable
    if(rWidth === 0) prev.classList.add("disabled");
    if(rWidth < 99) next.classList.remove('disabled');
})