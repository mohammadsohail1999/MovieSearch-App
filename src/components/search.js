import './search.css';

import React from 'react';


import axios from 'axios'



const Search = ({setData,term,setTerm,submit,setSubmit})=>{

 
  




          

const onsubmit = async (e)=>{

  
  
  
  e.preventDefault();
  
  



 
  

const response = await axios.get('http://www.omdbapi.com/', {
      params: {
        apikey: 'YOUR_KEY',
        s: submit
      }
    
    })


   setData(response.data.Search);
   











}





 return (<div className="ui segment">
       <form className="ui form" onSubmit={onsubmit}>
     <div className="field">
      <input  value={term} placeholder="SearchMovie!" onChange={(e)=>{setTerm(e.target.value)}}/>
      </div>
      <button className="ui green button">Search</button>
       
      </form>
   

   




  
   
   
   





 </div>)




}



export default Search;