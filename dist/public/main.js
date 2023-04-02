HFS.onEvent('fileMenu', ({ entry }) =>
    /\.(mp3|wav|aac|ogg|flac)$/i.test(entry.uri) &&
    { label: "Play audio", icon: '🔈', onClick: () => play(entry) })

function play(entry) {
    const root = document.getElementById('player')
    root.style.display = entry ? 'flex' : ''
    const audio = root.querySelector('audio')
    if (entry) {
        audio.src = entry.uri
        audio.play()
    }
    else
        audio.pause()
    root.querySelector('#player-title').innerText = entry.name
}

HFS.onEvent('afterMenuBar', () => `
    <div id='player' style='${HFS.plugins['simple-player'].position}: 0'>
        <audio controls></audio>
        <div>
            <button onclick="play()">✕</button>
            <span id='player-title'></span>
        </div>
    </div>
`)