import React, {useCallback, useEffect, useState} from 'react';
import './App.css';
import ItemType from "./types/ItemType";
import Listing from "./components/listing/Listing";
import Header from "./components/header/Header";
import Addform from "./components/form/Addform";
import {getAllTodos, postTodo} from "./service/todo-api-service";

const styles = {
    main: {
        display: "flex",
        padding: "0 1em"
    },
}

function App() {
    const statuses=["OPEN","DONE","IN_PROGRESS"];
    const items:ItemType[]=[
        {name:"Florian",id:"asd1",
        description:"BlaBlaBla BlaBlaBla vv BlaBlaBla BlaBlaBla",status:"OPEN"},
        {name:"Florian2",id:"asd2",
            description:"BlaBlaBla BlaBlaBla vv BlaBlaBla BlaBlaBla",status:"DONE"},
        {name:"Florian3",id:"asd3",
            description:"BlaBlaBla BlaBlaBla vv BlaBlaBla BlaBlaBla",status:"IN_PROGRESS"},
        ]
    const [allitems,setAllItems]=useState<ItemType[]>([])

    useEffect(() => {
        getAllTodos()
            .then((allitems: React.SetStateAction<ItemType[]>) => {
                setAllItems(allitems)
                console.log("length: "+allitems.length)
            })
            .catch((error?:any) => console.error(error))
    }, [])

    const handleAddItem=(item:ItemType)=>{
        // console.log("new item: ", {...item})
        postTodo(item)
            .then(() => getAllTodos())
            .then(todos => setAllItems(todos))
            .catch(error => console.error(error))
        //setAllItems([ item, ...allitems])
    }
    const handleEditItem=(item:ItemType)=>{
        console.log("edited item: ", {...item})
        const index =  allitems.findIndex(x => x.id===item.id);
        if (index > -1) {
            const copyAllitems=[...allitems]
            const deleted:ItemType[]=copyAllitems.splice(index, 1);
            console.log(copyAllitems.length,", deleted item: ", {...deleted[0]})
            setAllItems([ item, ...copyAllitems])
        }
        const index1 =  allitems.findIndex(x => x.id===item.id);
        console.log("edited item: ", {...item})
        console.log(allitems.length,", updated item: ", {...allitems[index1]})
    }


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
            statuses.map(status=><Listing items={allitems} typ={status}/>)
        }
        {/*
        <Listing  items={items} typ={"OPEN"}/>
        <Listing  items={items} typ={"DONE"}/>
        <Listing  items={items} typ={"IN_PROGRESS"}/>
        <Listing  item={{items:items, typ:"OPEN"}}/>
        */}

            {/*<Editform handleEditItem={handleEditItem} item={items[0]} />*/}
        </main>
      </>
  );
}

export default App;


/*

*/
