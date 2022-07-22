import Item from "../item/Item";
import ItemType from "../../types/ItemType";

const Listing=({...props})=>{

    return(
        <section>
            <h2>{props.typ}</h2>
            <div className="listing">
                {
                    props.items
                        .filter((item:ItemType)=>item.status===props.typ)
                        .map((item:ItemType)=><Item item={item} key={item.id}/>)
                }
            </div>

        </section>
    )
}
export default Listing