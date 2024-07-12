import { useContext } from "react"
import { GlobalContext } from "../context"


const ArticleStatus = () => {
    return <span>  -- Data Baru!!!</span>
}

export default function Article(props){
    const user = useContext(GlobalContext)
    return (
        <>
            <h3>{props.title}</h3>
            <small>
                Date: {props.date}, tags: {props.tags.join(', ')}
                {props.isNew ? <ArticleStatus/> : ' -- lama'}
            </small>
            <div>Teks Ini Ditulis Oleh: <mark>{user.name}</mark></div>
        </>
    )
}