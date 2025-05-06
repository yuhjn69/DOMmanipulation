/* Кнопка смены фона */
const changeColorButton = document.getElementById("changeSquareColorButton");
const changerObject = document.getElementById("squareBlock");

/* Обработчик событий(1) */
changeColorButton.addEventListener('click', function() {
    changerObject.style.backgroundColor = getRandomColor();
});

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color;
}


/* Кнопка показать/спрятать картинку */
const buttonHideShow = document.getElementById("changePictureButton");
const changerPicture = document.getElementById("pictureBlock");
let isVisible = true;

/* Обработчик событий(2) */
buttonHideShow.addEventListener('click', function() {
    if(isVisible) {
        changerPicture.style.opacity = "0";
        changerPicture.style.transform = "scale(0.95)";
        setTimeout(() => {
            changerPicture.style.display = "none";
        });

        document.querySelector('.show-text').style.display = 'none';
        document.querySelector('.hide-text').style.display = 'inline';

    } else {
        changerPicture.style.display = "block";
        setTimeout(() => {
            changerPicture.style.opacity = "1";
            changerPicture.style.transform = "scale(1)";
        }, 10);
    
        document.querySelector(".show-text").style.display = "inline";
        document.querySelector(".hide-text").style.display = "none";
    }

    isVisible = !isVisible;

    this.style.transform = "scale(0.95)";
    setTimeout(() => {
        this.style.transform = "scale(1)";
    }, 100);
});