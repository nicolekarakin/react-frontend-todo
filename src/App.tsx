import React, {useCallback, useEffect, useState} from 'react';
import './App.css';

import Listing from "./components/listing/Listing";
import Header from "./components/header/Header";
import Addform from "./components/form/Addform";

import useItems from "./hooks/useItems";

const styles = {
    main: {
        display: "flex",
        justifyContent: "center",
        background: "repeating-linear-gradient(45deg, #742b84 0px, #742b83 20px, #f771d8 20px, #fe4ed5 40px)"
    },
    footer: {
        padding: "0.3em",
        paddingLeft:"1.4em",
        color: "white",
        background: "#742b83",
        borderTop: "2px solid violet",
        borderBottom: "2px solid violet",
        // textAlign: "center"  as const
    }
}

function App() {

    const {allitems,statuses,handleAddItem,handleDelete,handleLeft,handleRight}=useItems()
    // const items:ItemType[]=[
    //     {name:"Florian",id:"asd1",
    //     description:"BlaBlaBla BlaBlaBla vv BlaBlaBla BlaBlaBla",status:"OPEN"},
    //     {name:"Florian2",id:"asd2",
    //         description:"BlaBlaBla BlaBlaBla vv BlaBlaBla BlaBlaBla",status:"DONE"},
    //     {name:"Florian3",id:"asd3",
    //         description:"BlaBlaBla BlaBlaBla vv BlaBlaBla BlaBlaBla",status:"IN_PROGRESS"},
    //     ]


    // const handleEditItem=(item:ItemType)=>{
    //     console.log("edited item: ", {...item})
    //     const index =  allitems.findIndex(x => x.id===item.id);
    //     if (index > -1) {
    //         const copyAllitems=[...allitems]
    //         const deleted:ItemType[]=copyAllitems.splice(index, 1);
    //         console.log(copyAllitems.length,", deleted item: ", {...deleted[0]})
    //         setAllItems([ item, ...copyAllitems])
    //     }
    //     const index1 =  allitems.findIndex(x => x.id===item.id);
    //     console.log("edited item: ", {...item})
    //     console.log(allitems.length,", updated item: ", {...allitems[index1]})
    // }


    // const handleSubmit = event => {
    //     event.preventDefault()
    //     const updatedTodo = { ...todo, ...formData }
    //     onSave(updatedTodo).then(() => history.push('/'))
    // }

  return (
      <><Header />
        <Addform handleSubmit={handleAddItem}  />
        <main style={styles.main}>

        {
            statuses.map(status=><Listing items={allitems}
                                          typ={status}
                                          handleDelete={handleDelete}
                                          handleLeft={handleLeft}
                                          handleRight={handleRight}/>)
        }
        {/*
        <Listing  items={items} typ={"OPEN"}/>
        <Listing  items={items} typ={"DONE"}/>
        <Listing  items={items} typ={"IN_PROGRESS"}/>
        <Listing  item={{items:items, typ:"OPEN"}}/>
        */}

            {/*<Editform handleEditItem={handleEditItem} item={items[0]} />*/}
        </main>
          <footer style={styles.footer}>@2022</footer>
      </>
  );
}

export default App;


/*

*/
