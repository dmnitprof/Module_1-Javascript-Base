const ALBUMS_URL = 'https://jsonplaceholder.typicode.com/albums'

const dataContainer = document.querySelector('#data-container')

const createTodoElement = (text) => {
    const todoElement = document.createElement('li')
    todoElement.textContent = text
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

const renderAlbums = async () => {
    toggleLoader()
    try {
        const requests = await fetch(ALBUMS_URL)
        const responses = await requests.json()
        responses.forEach(album => {
            const todoHTML = createTodoElement(album.title)
            dataContainer.append(todoHTML)
        })
    } catch (error) {
        dataContainer.append('Произошла ошибка в получении данных об альбомах...')
    } finally {
        toggleLoader()
    }
}

renderAlbums()
