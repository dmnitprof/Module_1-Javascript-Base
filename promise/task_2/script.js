const TODOS_URL = 'https://jsonplaceholder.typicode.com/users'

const createTodoElement = text => {
    const todoElement = document.createElement('li')
    const todoElementAnchor = document.createElement('a')
    todoElementAnchor.href = '#'
    todoElementAnchor.textContent = text
    todoElement.append(todoElementAnchor)

    return todoElement
}

const toggleLoader = () => {
    const loaderHTML = document.querySelector('#loader')
const isHidden = loaderHTML.hasAttribute('hidden')

    if(isHidden){
        loaderHTML.removeAttribute('hidden')
    }else {
        loaderHTML.setAttribute('hidden', '')
    }
}


const dataContainer = document.querySelector('#data-container')

const getAllTodosByIds = (ids) => {
    toggleLoader()
    const requests = ids.map(id => fetch(`${TODOS_URL}/${id}`))
    Promise.all(requests)
        .then(responses => {
            const dataResults = responses.map(response => response.json())
           return  Promise.all(dataResults)
                .then((todos) =>{
                    console.log(todos)
                   todos.forEach(todo => {
                       const todoHTML = createTodoElement(todo.name)
                       dataContainer.append(todoHTML)
                   })
                })
                .catch(error => {
                    console.error(error)
                })
               .finally(()=>{
                   toggleLoader()
               })
    })
}

getAllTodosByIds([1,2,3,4,5,6,7,8,9,10])



//
// const getAllTodos = () => {
//     toggleLoader()
//     const result = fetch(TODOS_URL, {
//         method: 'GET',
//     })
//
//     result
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error('Ошибка запроса')
//             }
//
//             return response.json()
//         })
//         .then(todos => {
//             todos.forEach(todo => {
//                 const todoHTML = createTodoElement(todo.name)
//                 dataContainer.append(todoHTML)
//             })
//         })
//         .catch(error => {
//             console.error(error)
//         })
//         .finally(() =>{
//             toggleLoader()
//         })
// }
