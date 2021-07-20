document.body.addEventListener('keyup', (event)=>{
    playSound(event.code.toLowerCase())
});

function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`);

    // verificar se encontrou algum audio 
    if(audioElement) {
        audioElement.play()
    }

};