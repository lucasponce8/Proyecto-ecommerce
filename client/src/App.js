import logo from './logo.svg';
import {Routes, BrowserRouter, Route} from "react-router-dom";
import './App.css';
import { Home } from './page/Home/Home';
import About from './page/About/About';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element = {<Home/>}/> 
          <Route path='/about' element = {<About/>}/>
           

          
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
