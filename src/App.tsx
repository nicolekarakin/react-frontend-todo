import React, {useCallback, useEffect, useState} from 'react';
import './App.css';
import ItemType from "./types/ItemType";
import Listing from "./components/listing/Listing";
import Header from "./components/header/Header";
import Addform from "./components/form/Addform";
import {deleteTodo, getAllTodos, postTodo, putTodo} from "./service/todo-api-service";
import itemType from "./types/ItemType";

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
    const statuses=["OPEN","IN_PROGRESS","DONE"];
    // const items:ItemType[]=[
    //     {name:"Florian",id:"asd1",
    //     description:"BlaBlaBla BlaBlaBla vv BlaBlaBla BlaBlaBla",status:"OPEN"},
    //     {name:"Florian2",id:"asd2",
    //         description:"BlaBlaBla BlaBlaBla vv BlaBlaBla BlaBlaBla",status:"DONE"},
    //     {name:"Florian3",id:"asd3",
    //         description:"BlaBlaBla BlaBlaBla vv BlaBlaBla BlaBlaBla",status:"IN_PROGRESS"},
    //     ]
    const [allitems,setAllItems]=useState<ItemType[]>([])

    useEffect(() => {
        getAllTodos()
            .then((allitems: React.SetStateAction<ItemType[]>) => {
                setAllItems(allitems)
                // console.log("length: "+allitems.length)
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
    const handleDelete=(item:ItemType)=>{
        deleteTodo(item.id)
            .then(() => getAllTodos())
            .then(todos => setAllItems(todos))
            .catch(error => console.error(error))
    }
    const handlePut=(item:ItemType)=>{
        // console.log("in put====",{...item})
        putTodo(item)
            .then(() => getAllTodos())
            .then(todos => setAllItems(todos))
            .catch(error => console.error(error))
    }
    const handleLeft=(item:ItemType)=> {
        // @ts-ignore
        const newStatus = toLeftOrRight(item.status, "left")
        const newItem = { ...item, status: newStatus } as itemType
        handlePut(newItem)
    }
    const handleRight=(item:ItemType)=>{
        // @ts-ignore
        const newStatus = toLeftOrRight(item.status, "right")
        const newItem = { ...item, status: newStatus } as itemType
        handlePut(newItem)
    }
    const toLeftOrRight=(currstatus:string, direction:string)=>{
        let newStatus:string=""
        const index=statuses.indexOf(currstatus)
        if(index===-1)throw new Error('Such status doesn\'t exist');
        if(direction==="left"){
            const newStatusInd=(index===0)?(statuses.length-1):(index-1)
            newStatus=statuses[newStatusInd]
            // console.log("left",index,newStatusInd)
        }else if(direction==="right"){
            const newStatusInd=((statuses.length-1)===index)?(0):(index+1)
            newStatus=statuses[newStatusInd]
            // console.log("right",index,newStatusInd)
        }
        return newStatus
    }

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
