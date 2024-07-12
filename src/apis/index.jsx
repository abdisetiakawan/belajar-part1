
export function PostBlog(){
    return fetch('https://jsonplaceholder.typicode.com/posts')
}        
export function PostById({params}){
    return fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
}        

