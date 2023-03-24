import React from "react";
import axios from "axios"
import {Route,Routes} from "react-router-dom"
import "./app.scss";

import Pagintion from "./Pagintion";
import Main from "./section/main/main";
import Description from "./section/descriptions/Description"
function App() {
const [list,SetList] = React.useState([])
const [curentPage,SetCurentPage] = React.useState(1)
const [curentPrevPage] = React.useState(10)

const [descList,SetDescList] = React.useState([])
   React.useEffect(()=>{
   const SetUsers = async ()=>{
    const res = await axios.get('https://api.publicapis.org/entries')         
    SetList(res.data.entries);
   }

   SetUsers();
  })   
    
   const lastCountIndex = curentPage +curentPrevPage;
   const firstrCountIndex = lastCountIndex -curentPrevPage;
   const currentCount = list.slice(firstrCountIndex,lastCountIndex)


   const paginate = pageNumber=>{
    SetCurentPage(pageNumber);
   }
   
  return (
   
   <div className="App">
    <Routes>
    <Route path="/desc" element={<Description descList={descList}/>} />
      <Route path="/" element={<Main SetDescList={SetDescList} currentCount={currentCount} list={list}  paginate={paginate}totalCount ={list.length} countPerPage ={curentPrevPage}/>} />
     
      
    </Routes>
 
   </div>
   
  );
  
}

export default App;
