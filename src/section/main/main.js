import React from 'react';
import { Link } from 'react-router-dom';
import Pagintion from '../../Pagintion';
const Main = ({list,currentCount,SetDescList,paginate,totalCount,countPerPage}) => {

    const [searchItem,SetSearchItem] = React.useState("")
   
    const filter = (searchItem ?  list: currentCount) .filter(c => {
        return c.API.toLowerCase().includes(searchItem);
      });
   
    
    return (
        <div>
             <h1>User List</h1>
             <form>
  <input type="text" name="name" class="question" id="nme" value={searchItem} required autocomplete="off" onChange={e=>SetSearchItem(e.target.value)} />
  <label for="nme"><span>Search Users</span></label>
  </form>
  <ul  className={searchItem ? "da scrolBar ":"da  "}>
   {
   filter.map(l=>(
    <Link to="/desc"> 
  
    <li onClick={()=>SetDescList(l)} >{l.API}</li>
   
    </Link>
   ))
   }
    </ul>
    {
        searchItem ? "":<Pagintion paginate={paginate} totalCount ={totalCount} countPerPage ={countPerPage}/>
    }
 </div>
    );
}

export default Main;
