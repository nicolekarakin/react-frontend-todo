const Nav=(props:{titles:string[]})=>{

    return(
        <nav>
            <ul>
                {props.titles
                    .map((item,index)=><li key={index.toString()}>{item}</li>)
                }
            </ul>
        </nav>
    )
}
export default Nav;