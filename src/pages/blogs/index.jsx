import { useLoaderData } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function Blog(){

    const post = useLoaderData()
    return(
        <>
        <h2>Blog Sederhana: </h2>
        {post.map((item, index) => (
            <div key={index}>
                <Link to={`/blog/${item.id}`}>
                    {item.title} 🔗
                </Link>
            </div>
        ))}
        </>
    )
}

