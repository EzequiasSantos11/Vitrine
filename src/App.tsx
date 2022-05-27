import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header';
import { Routers } from './services/routes';
import GlobalStyles from './styles/global';
import {Promotion} from "./components/Promotion";


function App() {
  return (
    <BrowserRouter>
      <Promotion/>
      <Header/>
      <Routers/>
      <GlobalStyles/>
    </BrowserRouter>
  )
}

export default App
