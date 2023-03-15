HFS.onEvent('afterEntryName', ({ entry }, { h }) =>
    /\.(mp3|wav|aac|ogg|flac)$/i.test(entry.n) &&
        h('button',{ className: 'play-button', onClick: () => play(entry.n) }))

function play(name = '') {
    const root = document.getElementById('player')
    root.style.display = name ? 'flex' : ''
    const audio = root.querySelector('audio')
    audio.src = name
    if (name) audio.play()
    else audio.pause()
    root.querySelector('#player-title').innerText = name
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