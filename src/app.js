import React,{useState} from 'react';
import {Route,BrowserRouter} from 'react-router-dom';
import Search from './components/search'
import Card from './components/Cards'
import Details from './components/movieDetails';
import Loader from './components/Loader';



const App = ()=>{

  const [term, setTerm] = useState('');
  const [submit, setSubmit]= useState('');
  const [data , setData] = useState([]);
  const [detail, setDetail]= useState('');
   const [Loading,setLoading] = useState(false);



   






  return (<div className="ui container">

<BrowserRouter>
<div>

<Route  path="/" exact render ={()=> <Search setData={setData} 
    
    term = {term} setTerm = {setTerm}

    submit ={submit} setSubmit = {setSubmit}

    setLoading = {setLoading}

  
  />}/>


 <Route path="/" exact render={()=><Card data = {data} setDetail= {setDetail} Loading={Loading}/>}/>
<Route path="/details" exact render={()=><Details detail={detail} Loading={Loading}/>}/>

</div>
      
</BrowserRouter>

{Loading ? <Loader/>: null}







  </div>)

}




export default App;







