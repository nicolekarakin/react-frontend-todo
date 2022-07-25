import "./item.css";
const Item=({...props})=>{ // (props:ItemTypo)

    return(
        <article >
            <header><h3>{props.item.name}</h3></header>
            <p>{props.item.description}</p>
            <p>{props.item.dateCreated}</p>
            <div>
                <p><a href="#" >Edit</a> <a href="#" >Details</a>  <a href="#" onClick={event=>props.handleDelete(props.item)}>Delete</a></p>
                <button type="button"  onClick={event=>props.handleLeft(props.item)}> {"<<<"}</button>
                <button type="button" onClick={(event)=>props.handleRight(props.item)}> {">>>"} </button>
            </div>
        </article>
    )
}

export default Item;