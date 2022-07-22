import React from 'react';
import logo from './logo.svg';
import './App.css';
import Item from "./components/item/Item";
import ItemType from "./types/ItemType";
import Listing from "./components/listing/Listing";
import Header from "./components/header/Header";


function App() {
    const statuses=["OPEN","DONE","IN_PROGRESS"];
    const items1:ItemType[]=[
        {name:"Florian",id:"asd1",
        description:"BlaBlaBla BlaBlaBla vv BlaBlaBla BlaBlaBla",status:"OPEN"},
        {name:"Florian2",id:"asd2",
            description:"BlaBlaBla BlaBlaBla vv BlaBlaBla BlaBlaBla",status:"DONE"},
        {name:"Florian3",id:"asd3",
            description:"BlaBlaBla BlaBlaBla vv BlaBlaBla BlaBlaBla",status:"IN_PROGRESS"},
        ]




  return (
      <><Header />
        <main >

        {
            statuses.map(status=><Listing  items={items1} typ={status}/>)
        }
        {/*<Listing  items={items1} typ={"OPEN"}/>*/}
        {/*<Listing  items={items1} typ={"DONE"}/>*/}
        {/*<Listing  items={items1} typ={"IN_PROGRESS"}/>*/}
        {/*<Listing  item={{items:items, typ:"OPEN"}}/>*/}
{/*<Item item={item}/>*/}
        </main>
      </>
  );
}

export default App;
