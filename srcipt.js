const image = document.querySelector('#image');
const initImageProps = document.querySelector('#image');

image.addEventListener('click', ()=>{
    const pictureNumber = Math.floor(Math.random()*10);
    if(pictureNumber === 0){
        image.attributes.src.nodeValue = `./images/1.jpg`;
        initImageProps.style.cssText = document.defaultView.getComputedStyle(image, "").cssText;
        image.alt = 'Picture not found';
    }
    else{
        image.attributes.src.nodeValue = `./images/${pictureNumber}.jpg`;
        initImageProps.style.cssText = document.defaultView.getComputedStyle(image, "").cssText;
        image.alt = 'Picture not found';
    }
});

const button1 = document.querySelector('#Choice1');
const button2 = document.querySelector('#Choice2');
const button3 = document.querySelector('#Choice3');
const button4 = document.querySelector('#Choice4');

console.dir(button1);
button1.addEventListener('click', e => {
    image.style.width = '500px';
});
button2.addEventListener('click', e => {
    image.style.height = '500px';
});
button3.addEventListener('click', e => {
    image.style.border = '3px solid #00af64';
});
button4.addEventListener('click', e => {
    image.alt = 'You changed alt';
});