import React, { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Admin from './Pages/Admin';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import Error from './Pages/Error';
import Users from './Pages/Users';
import NavBar from './Components/NavBar/NavBar';
import PrivateRoute from '../src/PrivateRoute/PrivateRoute';



function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <div className="App">
      <NavBar/>
    <h2>App</h2>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/users" element={<Users/>}/>
        <Route path="/profile/:id" element={<Profile/>}/>
        <Route path="/admin" element={<PrivateRoute isAuth={isAuth}/>}>
              <Route path="/admin" element={<Admin/>}/>
          </Route>
        <Route path="/*" element={<Error/>}/>
    </Routes>
 
    </div>
  );
}

export default App;
