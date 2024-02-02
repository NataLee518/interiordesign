import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from './Home';
import AboutUs from './AboutUs';
import Contacts from './Contacts';
import Promotion from './Promotion';
import './App.css';
function App() {
return(
<Router>
   <nav>
      <Link to='/'></Link>
      <Link to='/Home'className="link">
      Home</Link>
      <Link to='/AboutUs' className="link">
      About Us</Link>
      <Link to='/Contacts'className="link">
      Contact Us</Link>
      <Link to='/Promotion'className="link">
      Promotion</Link>
   </nav>
   <Routes>
      <Route path="/Home" element={
      <Home/>
      }/>
      <Route path="/AboutUs" element={
      <AboutUs/>
      }/>
      <Route path="/Contacts" element={
      <Contacts/>
      }/>
      <Route path="/Promotion" element={
      <Promotion/>
      }/>
   </Routes>
</Router>
)
}
export default App;