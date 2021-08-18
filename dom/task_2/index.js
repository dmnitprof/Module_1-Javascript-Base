const tasks = [
    {
        id: 1,
        completed: false,
        text: 'Посмотреть новый урок по JavaScript',
    },
    {
        id: 2,
        completed: false,
        text: 'Выполнить тест после урока',
    },
    {
        id: 3,
        completed: false,
        text: 'Выполнить ДЗ после урока',
    },
]

const taskList = document.querySelector('.tasks-list')
const createTaskBlock = document.querySelector('.create-task-block')

function createHtml(id, text) {
    return `
<div class="task-item" data-task-id=${id}>
         <div class="task-item__main-container">
           <div class="task-item__main-content">
             <form class="checkbox-form">
               <input class="checkbox-form__checkbox" type="checkbox" id="task-${id}">
               <label for="task-${id}"></label>
             </form>
             <span class="task-item__text">${text}</span>
           </div>
           <button class="task-item__delete-button default-button delete-button" data-delete-task-id=${id}>
             Удалить
           </button>
         </div>
       </div>
`
}

tasks.forEach(value => {

    const html = createHtml(value.id, value.text)
    taskList.insertAdjacentHTML('beforeend', html)
})


const checkIsValueTasks = (value) => {
    const checkValue = value
    return tasks.some(value => {
        return value.text === checkValue
    })
}


createTaskBlock.addEventListener('submit', (e) => {
        e.preventDefault()
        const {target} = e
        const taskNameInput = target.taskName
        const inputValue = taskNameInput.value
        const messageBlockFromDom = document.querySelector('.error-message-block')
        const newMessageBlock = document.createElement('span')
        newMessageBlock.className = 'error-message-block'

        if (inputValue && messageBlockFromDom && !checkIsValueTasks(inputValue)) {
            tasks.push({
                id: Date.now(),
                completed: false,
                text: inputValue
            })
            taskList.insertAdjacentHTML('beforeend', createHtml(Date.now(), inputValue))
            messageBlockFromDom.remove()

        } else if (checkIsValueTasks(inputValue) && !messageBlockFromDom) {
            newMessageBlock.textContent = 'задача с таким названием уже существует'
            createTaskBlock.append(newMessageBlock)
        } else if (!inputValue && !messageBlockFromDom) {
            newMessageBlock.textContent = 'Название задачи не должно быть пустым'
            createTaskBlock.append(newMessageBlock)
        }
    }
)


const htmlToModal = `
<div class="modal-overlay modal-overlay_hidden">
   <div class="delete-modal">
     <h3 class="delete-modal__question">
       Вы действительно хотите удалить эту задачу?
     </h3>
     <div class="delete-modal__buttons">
       <button class="delete-modal__button delete-modal__cancel-button">
         Отмена
       </button>
       <button class="delete-modal__button delete-modal__confirm-button">
         Удалить
       </button>
     </div>
`
document.body.insertAdjacentHTML('afterbegin', htmlToModal)
const modalOverlay = document.querySelector('.modal-overlay')


document.addEventListener('click', (e) => {
    const {target} = e
    const checkDeleteTaskButton = target.hasAttribute('data-delete-task-id')

    // console.log(typeof datasetDeleteTaskButton)

    const cancelButton = target.classList.contains('delete-modal__cancel-button')
    const confirmButton = target.classList.contains('delete-modal__confirm-button')
    const datasetDeleteTaskButton = target.getAttribute('data-delete-task-id')
    if (checkDeleteTaskButton) {
        modalOverlay.classList.remove('modal-overlay_hidden')
    }
    if(cancelButton){
        modalOverlay.classList.add('modal-overlay_hidden')
    }
    if(confirmButton){
    tasks.forEach(value =>{

        console.log(value['id'])
        console.log(datasetDeleteTaskButton)
         if(value['id'] === +datasetDeleteTaskButton){
            console.log(value['id'])
             delete tasks[value]
             console.log(tasks)
        }
     })

        // tasks.splice(checkDeleteTaskButton, )
        modalOverlay.classList.add('modal-overlay_hidden')

    }
})

console.log(taskList)

// modalOverlay.addEventListener('click', (e) => {
//    const {target} = e
//
//
// })

// const allTaskItemDom = document.querySelectorAll('.task-item')
// allTaskItem.forEach((value, key) => {
//     console.log(value.dataset.taskId)
// })

// tasks.splice(1, 1)
