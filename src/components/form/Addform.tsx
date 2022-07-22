const Addform = ()=>{
    return (
        <form id="addItem" >
            <label htmlFor="nameF" >Name</label>
            <input id="nameF" type="text"/>
            <label htmlFor="descriptionF" >Description</label>
            <input id="descriptionF" type="text"/>
            <button type="submit">Add</button>
        </form>
    )
}
export default Addform