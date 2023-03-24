import React from 'react';

const Pagintion = ({paginate,totalCount,countPerPage}) => {

    
    const pageNumber = []
    for(let i =1;i<=Math.ceil(totalCount/countPerPage);i++){
        if(pageNumber.length <= 10 ){
            pageNumber.push(i)
        }
    }

    return (
        <div className="pagination">
        {
            pageNumber.map(p=>
                <li className='pagNumb' onClick={()=>paginate(p)} >
                   {p}
                </li>
            )
        }
       </div>
    );
}

export default Pagintion;
