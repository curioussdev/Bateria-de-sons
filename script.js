document.body.addEventListener('keyup', (event)=>{
    playSound(event.code.toLowerCase())
});

document.querySelector(' .composer button').addEventListener('click', ()=>{
    let song = document.getElementById('input').value;

    if(song !== '') {
        let songArray = song.split('');
        playComposition(songArray);
    }
});

function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`);
    // selecionar cada elemento pela key
    let keyElement = document.querySelector(`div[data-key="${sound}"]`)

    // verificar se encontrou algum audio 
    if(audioElement) {
        // corrigindo tempo de reação do audioElement
        audioElement.currentTime = 0;
        audioElement.play()
    };
    //verificar se achou o key element
    if(keyElement) {
        keyElement.classList.add('active');
        // função para remover a class active do elemento (botão) 
        setTimeout(() => {
            keyElement.classList.remove('active');
        }, 300);
    }
};

function playComposition(songArray) {
    for(songItem of songArray) {
        playSound(`key${songItem}`)
    };
};