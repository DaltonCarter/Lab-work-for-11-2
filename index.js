console.log('Goliath Online!')

let message = document.querySelector('#message')

const addMovie = (event) => {
    event.preventDefault()
    let inputField = document.querySelector('input')
    console.log(inputField)
    let movie = document.createElement('li')
    let movieTitle = document.createElement('span')
    movieTitle.textContent = inputField.value
    movieTitle.addEventListener('click', crosssOffMovie)
    movie.appendChild(movieTitle)
    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = "X"
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)
    document.querySelector('ul').appendChild(movie)
    inputField.value = ''
}

document.querySelector('form').addEventListener('submit', addMovie)


const deleteMovie = (event) => {
      event.target.parentNode.remove()
      message.textContent = "I'm scared Dave...wi-will I Dream?"
}

const crosssOffMovie = (event) => {
      event.target.classList.toggle('checked')
      if(event.target.classList.contains('checked')){
        message.textContent = "Another one bites the dust!"
      }else {
        message.textContent = "Oops, I did it again..."
      }
}