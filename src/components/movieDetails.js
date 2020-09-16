import './search.css'

import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';



const Details = ({detail})=>{

  const[data,setdata]= useState({})
  console.log(data);  
useEffect(()=>{
 const fetchDetails = async ()=>{

  const res = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: 'd9835cc5',
      t: detail
    }
  
  });

   setdata(res.data);
   


 }

fetchDetails()

},[detail])






return (<div className="ui segment">
 
 <div className="ui grid">
   <div className="six wide column"> <img className="ui centered image" src={data.Poster}/>
  <div className="btn"> <Link className="ui green button" to="/">Go back to Search!</Link> </div>
   </div>
    <div className="ten wide column">
          <div className="ui segment">
       <span><strong>Title:</strong></span>
<span className="para">{data.Title}</span>
        
        <div className="movie">
          <span><strong>Cast:</strong></span>
<span className="para">{data.Actors}</span>
        </div>
        <div className="movie">
          <span><strong>Plot:</strong></span>
<span className="para">{data.Plot}</span>
        </div>
        <div className="movie">
          <span><strong>BoxOffice:</strong></span>
<span className="para">{data.BoxOffice}</span>
        </div>
        <div className="movie">
          <span><strong>Genre:</strong></span>
<span className="para">{data.Genre}</span>
        </div>
        <div className="movie">
          <span ><strong>Directed by:</strong></span>
<span className="para">{data.Director}</span>
        </div>



  </div>




</div>
 </div>
 
   




</div>)









}



export default Details










// Actors: "Tobey Maguire, Willem Dafoe, Kirsten Dunst, James Franco"
// Awards: "Nominated for 2 Oscars. Another 16 wins & 61 nominations."
// BoxOffice: "$403,706,375"
// Country: "USA"
// DVD: "01 Nov 2002"
// Director: "Sam Raimi"
// Genre: "Action, Adventure, Sci-Fi"
// Language: "English"
// Metascore: "73"
// Plot: "When bitten by a genetically modified spider, a nerdy, shy, and awkward high school student gains spider-like abilities that he eventually must use to fight evil as a superhero after tragedy befalls his family."
// Poster: "https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg"
// Production: "Columbia Pictures"
// Rated: "PG-13"