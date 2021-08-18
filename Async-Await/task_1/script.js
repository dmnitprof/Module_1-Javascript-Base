const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts'
let isLoading = false

const createNewPost = async () => {

    try{
        isLoading = true
        const response = await fetch(POSTS_URL)
        if(!response.ok){
            throw new Error('Ошибка в получении данных о постах')
        }
        const posts = await response.json()
        console.log(posts)
    }catch (e) {
        console.log(e)
    }finally {
        isLoading = false
    }
}

createNewPost()