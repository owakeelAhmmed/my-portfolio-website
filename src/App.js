import { Route, Routes } from 'react-router-dom';
import './App.css';
import ContactMe from './Component/ContactMe/ContactMe';
import Home from './Component/Home/Home';
import SideBar from './Component/SideBar/SideBar';

function App() {
  
  return (
    <div className="max-w-7xl mx-auto" style={{background:'#1E1E28'}}>
      <Routes>
       
          <Route path="/" element={<SideBar/>} >
              <Route index element={<Home/>}/>
              <Route path="contactme" element={<ContactMe/>}/>
              

            </Route>


      </Routes>
    </div>
  );
}

export default App;
