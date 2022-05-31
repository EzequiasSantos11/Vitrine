import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header';
import { Routers } from './services/routes';
import GlobalStyles from './styles/global';
import {Promotion} from "./components/Promotion";
import { useEffect, useState } from 'react';


function App() {
  const [on, setOn] = useState(false);
  const scrollListener = ()=>{
    if(window.scrollY > 5){
      setOn(true);
      console.log("true");
    }else{
      setOn(false);
      console.log("true");
    }
  }
  useEffect(()=>{
    window.addEventListener('scroll', scrollListener);
    return ()=>{
      window.removeEventListener('scroll', scrollListener);
    }
  },[]);
  return (
    <BrowserRouter>
      <Promotion/>
      <Header fixed={on}/>
      <Routers/>
      <GlobalStyles/>
    </BrowserRouter>
  )
}

export default App
