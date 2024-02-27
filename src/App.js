import './App.css';
import './index.css'
import { Route,Routes } from 'react-router-dom';
import Tailwindprac from './Tailwindprac';
import  Navbar  from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import $ from 'jquery'; 
import Popper from 'popper.js'; 
import 'bootstrap/dist/js/bootstrap.bundle.min';


import Signup from './Signup'

function App() {
  return (
    <>
      <Navbar/>
    
    <Routes>
      <Route path='/' element={<Signup/>}   />
      
      </Routes>        </>
  );
}

export default App;
