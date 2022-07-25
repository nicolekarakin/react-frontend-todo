import Item from "../item/Item";
import "./listing.css";
import ItemType from "../../types/ItemType";

const Listing=({...props})=>{
// console.log("=====",{...props})
    let titleRead:string=""
    switch (props.typ) {
        case 'OPEN':
            titleRead="Open";
            break;
        case 'DONE':
            titleRead="Done";
            break;
        case 'IN_PROGRESS':
            titleRead="In progress";
            break;
        default:
            titleRead="unknown";
    }
    return(
        <section className={props.typ}>
            <h2>{titleRead}</h2>
            <div >
                {
                    props.items
                        .filter((item:ItemType)=>item.status===props.typ)
                        .map((item:ItemType)=>
                            <Item item={item} key={item.id}
                                  handleDelete={props.handleDelete}
                                  handleLeft={props.handleLeft}
                                  handleRight={props.handleRight}/>)
                }
            </div>

        </section>
    )
}
export default Listing
