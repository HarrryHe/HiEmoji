"use strict";
document.addEventListener('keydown', handleKeyDown);
let count = 0;
let trigger = false;

//only for those text inputs and only input number or keys
function handleKeyDown(event) {
    const target = event.target;
    if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
            if(!trigger){
                const key = event.key;
                //filter special keys
                if (/^[a-zA-Z0-9]$/.test(key)) {
                    console.log('Pressed: ', key);
                    showRandomEmoji();
                    count++;
                } else {
                    console.log(`ignore: ${key}`);
                }
            }

            if (count >= 5) {
                trigger = true;
                count = 0;

                setTimeout(() => {
                    trigger = false;
                }, 2500);
            }
        }
    }
}

function showRandomEmoji() {
    const emojis = ['😄', '😂', '😍', '😊', '😎', '😜', '🤔', '😢', '😡', '😱', '😇', '🤠', '😏', '🥳'];
    const randEmoji = emojis[Math.floor(Math.random() * emojis.length)];

    //generate random position for emoji pop-up
    const randomXPosition = Math.random() * 100;
    const emojiDiv = document.createElement('div');
    emojiDiv.textContent = randEmoji;
    emojiDiv.style.position = 'fixed';
    emojiDiv.style.bottom = '-100px';
    emojiDiv.style.left = `${randomXPosition}%`;
    emojiDiv.style.fontSize = '30px';
    emojiDiv.style.transform = `rotate(${Math.random() * 360}deg)`;
    emojiDiv.style.opacity = '0';
    emojiDiv.style.transition = 'all 2s';

    //add to DOM element
    document.body.appendChild(emojiDiv);
    //set Time Out
    setTimeout(() => {
        const randomYPosition = 20 + (Math.random() * 60);
        emojiDiv.style.bottom = `${randomYPosition}px`;
        emojiDiv.style.opacity = '0.6';
    }, 100);
    
    setTimeout(() => {
        emojiDiv.style.bottom = '0px';
        emojiDiv.style.opacity = '0';
        //emojiDiv.remove();
    }, 2000);

    setTimeout(() => {
        emojiDiv.remove();
    }, 4000);

}