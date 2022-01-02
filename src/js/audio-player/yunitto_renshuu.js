// Frases do Diálogo
function createPlayer(audioURL, parentElement) {
    var playPauseButton = document.createElement('button');
    var i = document.createElement('i');
    
    // Cria o botão padrão de 'play audio'
    i.classList.add('material-icons');
    i.classList.add('icon-size');
    playPauseButton.classList.add('audio');
    i.innerHTML = 'play_circle_filled';
    playPauseButton.appendChild(i);

    // Cria um player de áudio com a track a ser executada
    var audio = document.createElement("AUDIO");
    audio.setAttribute("src", audioURL);
    audio.setAttribute("preload", "metadata|auto");
    audio.classList.add('audio-player');

    // Função que escuta quando a track se encerra e altera o botão para 'play audio' novamente
    audio.addEventListener('ended', () => {
        i.innerHTML = 'play_circle_filled';
    });

    // Função que altera o botão entre 'play' e 'pause' baseado no status da track
    playPauseButton.addEventListener('click', () => {
        if (audio.paused) {
            i.innerHTML = 'pause_circle_filled';
            audio.play();
        } else if (audio.played) {
            i.innerHTML = 'play_circle_filled';
            audio.pause();
        }
    });

    parentElement.appendChild(playPauseButton);
}