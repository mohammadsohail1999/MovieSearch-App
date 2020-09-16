import React from 'react';
import {Link} from  'react-router-dom';
 




const Card = ({data,setDetail})=>{

    

 const cards =  data.map((el)=>{
 
if(data.length !== 0){
   return  <div key={el.imdbID} className="four wide column">
   <div className="ui card">
    <div className="image">
      <img src={el.Poster}/>
    </div>
    <div className="content">
 <a className="header">{el.Title}</a>
      <div className="">
          <label>Release Date</label>
        <span className="date">{el.Year}</span>
      </div>
    </div>
    <div className="extra content">
      <Link className="ui green button" to="/details" onClick={()=>{setDetail(el.Title)}}>
             More details...
             
      </Link>
    </div>
  </div>
  </div>
}
return null;
    }) 

 

  


 




return (<div className="ui grid">


{cards}



</div>)








}



export default Card;