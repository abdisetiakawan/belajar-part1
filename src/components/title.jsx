export default function Title(props) {
    return (
        <>
            <hr/>
            <div>{props.nama}</div>
            <div>
                {props.title.map((title) => {
                    return (
                        <>
                            <div>{title}</div>
                        </>
                    )
                })}
            </div>
        </>
    )
}