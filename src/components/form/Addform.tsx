import {FormEvent, FormEventHandler, useState} from "react";
import ItemType from "../../types/ItemType";
import styles from "./Addform.module.css";
// Addform.propTypes = {
//     onAdd: PropTypes.func.isRequired
// }
type AddFormProp={
    // handleSubmit: (item:ItemType)=>void
    handleSubmit: (item:ItemType)=>Promise<void>
}
const Addform = (props:AddFormProp)=>{

    // const [isDisabled, setIsDisabled] = useState<boolean>(true)
    const [item, setItem] = useState<ItemType>({status:"OPEN",name:"",description:""} as ItemType)
    const handleChange = (event: any) => {
        setItem({ ...item, [event.target.name]: event.target.value });
    };
    const resetForm = () => {
        setItem({status:"OPEN",name:"",description:""} as ItemType)
    }
    const handleSubmit = (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        props.handleSubmit(item)
            .then(()=>resetForm())
            .catch(error => console.error(error))

    }

    return (
        <form id="addItem" className={styles.addform}
        onSubmit={handleSubmit}>
            <label htmlFor="nameF" >Name</label>
            <input id="nameF" type="text" value={item.name} name="name"
                   className={styles.inputform}
                   onChange={event =>handleChange(event)}
                // onChange={event => item.name=event.target.value }
            />
            <label htmlFor="descriptionF" >Description</label>
            <input id="descriptionF" type="text" value={item.description} name="description"
                   className={styles.inputform}
                   onChange={event =>handleChange(event)}
                // onChange={event =>item.description=event.target.value}
            />
            <button type="submit"
                    className={(!!item.name && !!item.description)?"enabled":"disabled"}
                    disabled={(!!item.name && !!item.description)?undefined:true}
                    // onClick={event => {props.handleSubmit(item); resetForm()}}
                    >Add</button>
        </form>
    )
}
export default Addform