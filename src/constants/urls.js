const baseURL = 'https://jsonplaceholder.typicode.com'
const posts = '/posts';
const urls = {
    albums:'/albums',
    comments: '/comments',
    todos:'/todos',
    posts:{
        getById:(id)=> `${posts}/${id}`
    }

}


export {
    baseURL,
    urls
}