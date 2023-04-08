(() => { // this wrapper avoids name clashing of outer variables and functions
    const config = HFS.getPluginConfig()
    console.log({ config }, HFS.getPluginKey())

HFS.onEvent('fileMenu', ({ entry }) =>
    /\.(mp3|wav|aac|ogg|flac)$/i.test(entry.uri) &&
        { label: "Play audio", icon: '🔈', onClick: () => play(entry) })

function play(entry) {
    const root = document.getElementById('player')
    root.style.display = entry ? 'flex' : ''
    const audio = root.querySelector('audio')
    if (!entry)
        return audio.pause()
    audio.src = entry.uri
    audio.play()
    root.querySelector('#player-title').innerText = entry.name
}

HFS.onEvent('afterMenuBar', () => `
    <div id='player' style='${config.position||'left'}: 0'>
        <audio controls></audio>
        <div>
            <button onclick="play()">✕</button>
            <span id='player-title'></span>
        </div>
    </div>
`)

})()