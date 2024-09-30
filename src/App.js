import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar/Navbar';
import { Route, Router, Routes } from 'react-router-dom';
import HomePage from './page/HomePage';
import AuthPage from './page/AuthPage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element ={<HomePage/>} />
        <Route path='/auth' element ={<AuthPage/>} />

      </Routes>
    </div>
  );
}

export default App;
