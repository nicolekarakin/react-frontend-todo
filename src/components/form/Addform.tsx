import {useState} from "react";
import ItemType from "../../types/ItemType";

// Addform.propTypes = {
//     onAdd: PropTypes.func.isRequired
// }
type AddFormProp={
    handleSubmit: (item:ItemType)=>void
}
const Addform = (props:AddFormProp)=>{

    // const [item, setItem] = useState<ItemType>({status:"OPEN"} as ItemType)
    const [item, setItem] = useState<ItemType>({status:"OPEN",name:"",description:""} as ItemType)
    const handleChange = (event: any) => {
        setItem({ ...item, [event.target.name]: event.target.value });
    };
    const resetForm = () => {
        setItem({status:"OPEN",name:"",description:""} as ItemType)
    }
    // const handleChange = event => {
    //     const { name, value } = event.target
    //     setData({ ...formData, [name]: value })
    // }
    return (
        <form id="addItem" >
            <label htmlFor="nameF" >Name</label>
            <input id="nameF" type="text" value={item.name} name="name"
                   onChange={event =>handleChange(event)}
                // onChange={event => item.name=event.target.value }
            />
            <label htmlFor="descriptionF" >Description</label>
            <input id="descriptionF" type="text" value={item.description} name="description"
                   onChange={event =>handleChange(event)}
                // onChange={event =>item.description=event.target.value}
            />
            <button type="button"
                    onClick={event => {props.handleSubmit(item); resetForm()}}>Add</button>
        </form>
    )
}
export default Addform