const card = document.querySelector('.card');
const container = document.querySelector('.container1');

const title = document.querySelector('.title-gaara');
const image = document.querySelector('.image img');
const vote = document.querySelector('.vote button');
const quality = document.querySelector('.quality');
const descrip = document.querySelector('.info h3');


container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25 ;
    console.log(xAxis)
    
    let yAxis = (window.innerHeight / 2 - (e.clientY + 78.92)) / 25 ;
    console.log(yAxis)

    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

container.addEventListener('mouseenter', e => {
    card.style.transition = 'none';
    title.style.transform = 'translateZ(150px)';
    image.style.transform = 'translateZ(100px)';
    descrip.style.transform = 'translateZ(125px)';
    vote.style.transform = 'translateZ(100px)';
    quality.style.transform = 'translateZ(75px)';
})

container.addEventListener('mouseleave', e => {
    card.style.transition = 'all 0.5s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    title.style.transform = 'translateZ(0px)';
    image.style.transform = 'translateZ(0px)';
    descrip.style.transform = 'translateZ(0px)';
    vote.style.transform = 'translateZ(0px)';
    quality.style.transform = 'translateZ(0px)';
});