import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar/Navbar';
import { Route, Router, Routes } from 'react-router-dom';
import HomePage from './page/HomePage';
import AuthPage from './page/AuthPage';
import ProductDetails from './page/ProductDetails';

function App() {
  return (
    <div className="App overflow-x-hidden">
      <Navbar/>
      <Routes>
        <Route path='/' element ={<HomePage/>} />
        <Route path='/auth' element ={<AuthPage/>} />
        <Route path='/product/:productCategory/:productName/:productId' element= {<ProductDetails/>} />

      </Routes>
    </div>
  );
}

export default App;
