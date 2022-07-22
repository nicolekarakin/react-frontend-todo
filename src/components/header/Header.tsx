import Nav from "./Nav";

const Header=()=>{
    const titles=["Home","Open","Ongoing","Done"]
    return(
        <header>
            <h1>ROOOT!!!!</h1>
            <Nav titles={titles}/>
        </header>
    )
}
export default Header