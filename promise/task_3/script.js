const TODOS_URL = 'https://jsonplaceholder.typicode.com/photos'

const createTodoElement = (urlImg, text) => {
    const todoElement = document.createElement('li')
    todoElement.className = 'photo-item'
    const todoElementImg = document.createElement('img')
    todoElementImg.className = 'photo-item__image'
    todoElementImg.src = urlImg
    const todoElementTitle = document.createElement('h3')
    todoElementTitle.className = 'photo-item__title'
    todoElementTitle.textContent = text
    todoElement.append(todoElementImg, todoElementTitle)

    return todoElement
}

const toggleLoader = () => {
    const loaderHTML = document.querySelector('#loader')
    const isHidden = loaderHTML.hasAttribute('hidden')

    if (isHidden) {
        loaderHTML.removeAttribute('hidden')
    } else {
        loaderHTML.setAttribute('hidden', '')
    }
}

const dataContainer = document.querySelector('#data-container')

const getFastestLoadedPhoto = (ids) => {
    toggleLoader()

    const responses = ids.map(id => fetch(`${TODOS_URL}/${id}`))

    Promise.race(responses)
        .then(response => {
          return response.json()
        }).then((photo) => {

        const todoHTML = createTodoElement(photo.url, photo.title)
        dataContainer.append(todoHTML)
    }).catch(error =>{
        console.error(error)
    }).finally(() => {
        toggleLoader()
    })
}

getFastestLoadedPhoto([60, 12, 55])
