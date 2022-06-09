import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Home/Home';
import SideBar from './Component/SideBar/SideBar';

function App() {
  
  return (
    <div className="max-w-7xl mx-auto" style={{background:'#1E1E28'}}>
      <Routes>
        {/* <Route index element={<SideBar/>}/>
        <Route path='/home' element={<Home/>}/> */}


          <Route path="/" element={<SideBar/>} >

              <Route index element={<Home/>}/>

              {/* <Route path="addproduct" element={<AddProduct/>}/>
              <Route path="addreview" element={<AddReview/>}/>
              <Route path="myprofile" element={<MyProfile/>}/>
              <Route path="manageproduct" element={<ManageProducts/>}/>
              <Route path="payment/:id" element={<Payment/>}/>
              <Route path="alluser" element={<AllUsers/>}/> */}


            </Route>


      </Routes>
    </div>
  );
}

export default App;
