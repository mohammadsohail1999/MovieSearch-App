
import React from 'react';
import {Link} from  'react-router-dom';

import './search.css'




const Card = ({data,setDetail,Loading})=>{

  


const cards = data  ?  data.map((el)=>{
 
  return  <div key={el.imdbID} className="four wide column">
   <div className = "ui card" >
    < div className = "image img" >
      < img src = {
        el.Poster
      }
        alt={el.Title} />
    </div>
    <div className="content">
 <div className="header">{el.Title}</div>
      <div className="">
          <label>Release Date:</label>
        <span className="date">{el.Year}</span>
      </div>
    </div>
    <div className="extra content" style={{textAlign:"center"}}>
      <Link className="ui green button" to="/details" onClick={()=>{setDetail(el.Title)}}>
             More details...
             
      </Link>
    </div>
  </div>
  </div>

    

    }) : <div style={{margin:"auto",
  paddingTop: 60,fontSize: 22 }}>Can't find any results</div>

  

 

  


 




return (<div className="ui grid">


{cards}



</div>)








}



export default Card;