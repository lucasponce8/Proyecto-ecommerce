import logo from './logo.svg';
import {Routes, BrowserRouter, Route} from "react-router-dom";
import './App.css';
import { Home } from './page/Home/Home';
import About from './page/About/About';
import Products from './page/Products/Products';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element = {<Home/>}/> 
          <Route path='/about' element = {<About/>}/>
          <Route path='/products' element = {<Products/>}/>

          
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
