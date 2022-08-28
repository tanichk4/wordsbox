var text = document.querySelector('.text')
    var words = document.querySelector('.words_box')
    var characters = document.querySelector('.characters_box')
    text.addEventListener('input', () => {
        characters.textContent = text.value.length
        var txt = text.value.trim()
        words.textContent = txt.split(/\s+/).filter((item) => item).length
    })