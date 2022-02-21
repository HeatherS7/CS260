
document.getElementById("submit").addEventListener("click", getSongLyrics)
document.getElementById("getGenre").addEventListener("click", getRandomGenre)
document.getElementById("getStory").addEventListener("click", getRandomStory)
document.getElementById("getQuote").addEventListener("click", getRandomMovieQuote)


function getSongLyrics(event) {
    event.preventDefault()
    const artist = document.getElementById("artist").value
    const songTitle = document.getElementById("songTitle").value

    const url=`https://api.lyrics.ovh/v1/${artist}/${songTitle}`
    console.log(`artist is ${artist} and song title is ${songTitle}`)

    fetch(url)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            if (response.lyrics) {
                let lyrics = "<p>" + response.lyrics + "</p>"
                lyrics = lyrics.replaceAll("\n", "<br>")
                document.getElementById("songLyrics").innerHTML = lyrics
            }
            else {
                let error = "<p class='bigger'>" + response.error + "</p>"
                document.getElementById("songLyrics").innerHTML = error
            }
        })
}

function getRandomGenre(event) {
    event.preventDefault()
    const numToGen = document.getElementById("rangeSlider").value
    const genreUrl=`https://binaryjazz.us/wp-json/genrenator/v1/genre/${numToGen}`
    let result = ""
    fetch(genreUrl)
        .then(response => response.json())
        .then(response => {
            if (typeof response === "string") {
                result += "<h2>The genre is: </h2>"
                result += "<p class='genre'>" + response + "</p>"
            } else {
                result += "<h2>The genres are: </h2><p class='genre'>"
                for (let i = 0; i < response.length; i++) {
                    result += response[i] + "<br>"
                }
                result += "</p>"
            }
            document.getElementById("randomGenre").innerHTML = result
        })
}

function getRandomStory(event) {
    event.preventDefault;
    const numToGen = document.getElementById("storySlider").value
    const storyUrl = `https://binaryjazz.us/wp-json/genrenator/v1/story/${numToGen}`
    let result = ""
    fetch(storyUrl)
        .then(response => response.json())
        .then(response => {
            if (typeof response === "string") {
                result += "<h2>The story is: </h2>"
                result += "<p class='genre'>" + response + "</p>"
            } else {
                result += "<h2>The stories are: </h2><p class='genre'>"
                for (let i = 0; i < response.length; i++) {
                    result += response[i] + "<br>"
                }
                result += "</p>"
            }
            document.getElementById("randomStory").innerHTML = result
        })
}

function getRandomMovieQuote(event) {
    event.preventDefault
    const show = document.querySelector("input[name=quotes]:checked").value
    let quoteUrl = "https://movie-quote-api.herokuapp.com/v1/"

    switch(show) {
        case 'Forrest':
            quoteUrl += "shows/forrest-gump?censored"
            break
        case 'Office':
            quoteUrl += "shows/the-office?censored"
            break
        case 'Machinist':
            quoteUrl += "shows/the-machinist?censored"
            break
        case 'Random':
            quoteUrl += "quote?censored"
            break
    }

    let result = ""
    fetch(quoteUrl)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            result += "<p class='bigger' id='movieQuote'>&quot" + response.quote + "&quot<br>"
            result += "Spoken by <em>" + response.role + "</em><br>"
            result += "From the movie <em>" + response.show + "</em></p>"
            document.getElementById("showQuote").innerHTML = result
        })


}


const slider = document.getElementById("rangeSlider");
const rangeValue = document.getElementById("rangeValue");
rangeValue.innerHTML = slider.value;

slider.oninput = function() {
  rangeValue.innerHTML = this.value;
}

const storySlider = document.getElementById("storySlider");
const storyValue = document.getElementById("storyValue");
storyValue.innerHTML = storySlider.value;
storySlider.oninput = function() {
    storyValue.innerHTML = this.value;
}