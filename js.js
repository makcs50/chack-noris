

btn.addEventListener('click', fet)

 function  fet ()   {
    fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then((joke) => {
        const joker = document.getElementById('joker');
        joker.textContent = '';
        joker.append(joke.value)
        })
    }
