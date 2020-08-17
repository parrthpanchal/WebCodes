const colorBtn = document.querySelector('.colorBtn');
const bodyBCg  = document.querySelector('body');

const color = ['yellow','green','blue','red'];

colorBtn.addEventListener('click',changeColor);

function changeColor()
{
    bodyBCg.style.backgroundColor = color[Math.floor((Math.random()*color.length))];
}