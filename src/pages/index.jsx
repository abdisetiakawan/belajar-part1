import postData from '../data.json'
import Article from '../components/article'
import Search from '../components/search'
import { useState } from 'react'

export default function Home () {
    const [totalPost, setTotalPost] = useState(0)
    const [post, setPost] = useState(postData)
    const filterSearch = (value) => {
        const filteredSearch = postData.filter(item => item.title.includes(value))
        setPost(filteredSearch)
        setTotalPost(filteredSearch.length)
    }
    return (
        <>
            <h1>Blog Sederhana</h1>
            <Search valueSearch={filterSearch} totalPost={totalPost}/>
            {
                post.map((props, index) => (
                    <Article {...props} key={index}/>
                ))
            }
        </>
    )
}