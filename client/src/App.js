import {Routes, BrowserRouter, Route} from "react-router-dom";
import { Home } from './page/Home/Home';
import About from './page/About/About';
import Products from './page/Products/Products';
import PageNotFound from './page/PageNotFound/PageNotFound';
import {DetailProduct} from './page/DetailProduct/DetailProduct';
import { CreateProduct } from './page/CreateProduct/CreateProduct';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './page/Cart/Cart';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import MisPedidos from './page/MisPedidos/MisPedidos';
import FormCart from './components/Form/FormCart';
import MisProductos from "./page/MisProductos/MisProductos";

import './App.css';


function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <NavBar />
        <ScrollToTop />
        <Routes>
          <Route path='/' element = {<Home/>}/> 
          <Route path='/about' element = {<About/>}/>
          <Route path='/products' element = {<Products/>}/>
          <Route path='/detail/:id' element = {<DetailProduct/>}/>
          <Route path='/create' element = {<CreateProduct/>}/>
          <Route path='/cart' element = {<Cart/>}/>
          <Route path='/pedidos' element = {<MisPedidos/>}/>
          <Route path='/myproducts' element = {<MisProductos/>}/>
          <Route path='/checkout' element = {<FormCart/>}/>
          
          <Route path='/*' element = {<PageNotFound/>}/> 
        </Routes>
        <Footer />  
      </div>
    </BrowserRouter>
    
  );
}

export default App;
