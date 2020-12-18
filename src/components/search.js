import './search.css';
import React,{useEffect} from 'react';
import axios from 'axios'
import { useState } from 'react';

const Search = ({setData,term,setTerm})=>{


  const [start,setStart] = useState(false)



  window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

  const mic = new window.SpeechRecognition();

 

   mic.addEventListener('result',(e)=>{

    
    console.log(e.results[0][0].transcript);
 
   
    setTerm(e.results[0][0].transcript);
   
     



   })

   



   useEffect(()=>{

   const timeOut = setTimeout(async()=>{

      try{
        if(term){
      const response = await axios.get('http://www.omdbapi.com/', {
      params: {
        apikey: 'd9835cc5',
        s: term
      }
    
    })
  

   setData(response.data.Search);
        }
   


  }
  catch(err){
    console.log(err)
  }},2000)


  return ()=>{
    clearTimeout(timeOut)
  }

  

   },[setData,term])





 return (<div className="ui segment">
       <form className="ui form" onSubmit={(e)=>e.preventDefault()}>
     <div className="field">
      <input value={term} placeholder="SearchMovie!" onChange={(e)=>{setTerm(e.target.value)}}/>
      </div>
       
      </form>
      



       <button style={{marginTop:20,borderRadius:'10%'}} className={`ui ${start ? 'disabled' : ''}  green basic button`} onClick={()=>{
         
         mic.start()
          setStart(true)

          setTimeout(()=>{
            setStart(false);
          },3000)

      }}>
      <div><i className="microphone icon"></i></div></button>   
          
        <span onClick={()=>{
           setStart(false)
         }} className={`ui ${!start ? 'disabled' : ''} red basic button`}> X </span>



  
   
   
   





 </div>)




}



export default Search;