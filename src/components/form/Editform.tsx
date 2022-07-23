import {useState} from "react";
import ItemType from "../../types/ItemType";

type EditFormProp={
    handleEditItem: (item:ItemType)=>void,
    // handleChange: (item:ItemType)=>void,
    item:ItemType
}

const Editform=(props:EditFormProp)=>{
    const resetForm = () => {
        setItem({...props.item})
    }
    const [item, setItem] = useState<ItemType>(props.item)
    const handleChange = (event: any) => {
        setItem({ ...item, [event.target.name]: event.target.value });
    };
    if(!!props.item){
    return(
        <form onSubmit={event => props.handleEditItem(item)}>
        <label htmlFor="nameF">Name</label>
        <input id="nameF" type="text" value={item.name} name="name"
                   onChange={event => handleChange(event)}
        />
        <label htmlFor="descriptionF">Description</label>
        <input id="descriptionF" type="text" value={item.description} name="description"
                   onChange={event => handleChange(event)}
        />
        <label htmlFor="statusF">Status</label>
        <select id="statusF" name="status" value={item.status} onChange={(e)=>handleChange(e)}>
        <option value="OPEN">open</option>
        <option value="IN_PROGRESS">doing</option>
        <option value="DONE">done</option>
        </select>

        <button type="button" >Reset</button>
        <button type="submit">Save</button>
        </form>

    )
    }
    else return <></>
}
export default Editform