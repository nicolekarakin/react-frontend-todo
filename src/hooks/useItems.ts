import React, {useEffect, useState} from "react";
import ItemType from "../types/ItemType";
import {deleteTodo, getAllTodos, postTodo, putTodo} from "../service/todo-api-service";
import itemType from "../types/ItemType";

export default function useItems(){
    const statuses=["OPEN","IN_PROGRESS","DONE"];

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
        return postTodo(item)
            .then(() => getAllTodos())
            .then(todos => setAllItems(todos))
            // .catch(error => console.error(error))

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

    return {allitems,statuses,handleAddItem,handleDelete,handleLeft,handleRight}
}