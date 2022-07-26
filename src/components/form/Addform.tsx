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

    const [errorMessage, setErrorMessage] = useState("")
    const [item, setItem] = useState<ItemType>({status:"OPEN",name:"",description:""} as ItemType)
    const handleChange = (event: any) => {
        if(!!errorMessage.length)setErrorMessage("")
        setItem({ ...item, [event.target.name]: event.target.value });
    };
    const resetForm = () => {
        setItem({status:"OPEN",name:"",description:""} as ItemType)
    }
    const handleSubmit = (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        props.handleSubmit(item)
            .then(()=> {
                resetForm()
            })
            .catch(error => {
                console.error(error)
                setErrorMessage(error.message)
            })
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
            <span className={"message"}>{errorMessage}</span>
        </form>
    )
}
export default Addform