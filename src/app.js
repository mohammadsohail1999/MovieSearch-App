import React,{useState,useEffect} from 'react';
import {Route,BrowserRouter,Link} from 'react-router-dom';
import Search from './components/search'
import Card from './components/Cards'
import Details from './components/movieDetails';













const App = ()=>{

  const [term, setTerm] = useState('');
  const [submit, setSubmit]= useState('');
  const [data , setData] = useState([]);
  const [detail, setDetail]= useState('');

console.log(detail);

  useEffect(()=>{
    setSubmit(term)
  },[term])





  return (<div className="ui container">

<BrowserRouter>
<div>

<Route  path="/" exact render ={()=> <Search setData={setData} 
    
    term = {term} setTerm = {setTerm}

    submit ={submit} setSubmit = {setSubmit}

  
  />}/>


 <Route path="/" exact render={()=><Card data = {data} setDetail= {setDetail}/>}/>
<Route path="/details" exact render={()=><Details detail={detail}/>}/>

</div>
      
</BrowserRouter>


  </div>)

}




export default App;







