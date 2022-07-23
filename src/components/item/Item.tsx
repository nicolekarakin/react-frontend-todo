import "./item.css";
const Item=({...props})=>{ // (props:ItemTypo)

    return(
        <article >
            <header><h3>{props.item.name}</h3></header>
            <p>{props.item.description}</p>
            <p>{props.item.dateCreated}</p>
            <div>
                <button> {"<<<"} </button>
                <a href="#" >Edit</a>
                <a href="#" >Details</a>
                <button> {">>>"} </button>
            </div>
        </article>
    )
}

export default Item;