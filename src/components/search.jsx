import { useState } from "react"

export default function Search(props){
    const [search, setSearch] = useState('')
    const changeSearch = () => {
        props.valueSearch(search)
    }
    const searchKeydown = (e) => {
        if (e.key === 'Enter') {
            changeSearch()
        }
    }
    return (
        <>
            <div>
                Cari Article: <input onChange={(e) => {
                    setSearch(e.target.value)
                }} onKeyDown={searchKeydown}></input><button onClick={changeSearch}>Cari</button>
            </div>
            <small>Data yang dicari : {search} <br/> Jumlah data yang ditemukan: {props.totalPost}</small>
        </>
    )
}