const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const msgOne = document.querySelector('#msg-one')
const msgTwo = document.querySelector('#msg-two')


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    msgOne.textContent = 'Loading...'
    msgTwo.textContent = ''

    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                msgTwo.textContent = JSON.stringify(data.error)
            } else {
                msgOne.textContent = JSON.stringify(data.forecastData)
            }
        })
    })
})