import logo from './logo.svg';
import {Routes, BrowserRouter, Route} from "react-router-dom";
import './App.css';
import { Home } from './page/Home/Home';
import About from './page/About/About';
import Products from './page/Products/Products';
import PageNotFound from './page/pageNotFound/PageNotFound';
import DetailProduct from './page/detailProduct/DetailProduct';
import { CreateProduct } from './page/CreateProduct/CreateProduct';




function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element = {<Home/>}/> 
          <Route path='/about' element = {<About/>}/>
          <Route path='/products' element = {<Products/>}/>
          <Route path='/detail/:id' element = {<DetailProduct/>}/>
          <Route path='/*' element = {<PageNotFound/>}/> 
          <Route path='/create' element = {<CreateProduct/>}/>

          
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
