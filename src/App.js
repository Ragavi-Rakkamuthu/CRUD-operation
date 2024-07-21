import { useState } from 'react';
import './App.css';
import{BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Users from './Components/Users';
import Updateuser from './Components/Updateuser';
import Createuser from './Components/Createuser';





function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Users/>}></Route>
      <Route path='/create' element={<Createuser/>}></Route>
      <Route path='/update/:id' element={<Updateuser/>}></Route>
     </Routes>
    
     </BrowserRouter>
    </div>
  );
}

export default App;
