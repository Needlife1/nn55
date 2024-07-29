// --------------open burger---------------

const burgerBtn = document.querySelector('.burger-btn');
const burgerItemTop = document.querySelector('.burger-item-top');
const navMobBox = document.querySelector('.nav-mob-box');
const body = document.querySelector('body');


burgerBtn.addEventListener('click', toggleNav);

function toggleNav() {
    navMobBox.classList.toggle('is-visible');
    burgerItemTop.classList.toggle('is-visible');
    body.classList.toggle('no-scroll');
}

// -------------Drop-down ----------

document.addEventListener('DOMContentLoaded',()=>{
    const questionsTitles = document.querySelectorAll('.questions-title');
   
    questionsTitles.forEach(title=>{
        title.addEventListener('click', function(){
            const content = this.nextElementSibling;
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        })
    })
})
