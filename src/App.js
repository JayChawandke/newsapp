import './App.css';
import NavBar from './Component/NavBar';
import News from './Component/News';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";




function App() {
  return(
  <div>
      <Router>
        <NavBar/>
        <Routes>
        <Route exact path='/' element={<News key="General" pageSize={5} country="in" category="General"/>}/>
        <Route exact path='/Business' element={<News key="Business" pageSize={5} country="in" category="Business"/>}/>
        <Route exact path='/Entertainment' element={<News key="Entertainment" pageSize={5} country="in" category="Entertainment"/>}/>
        <Route exact path='/Health' element={<News key="Health" pageSize={5} country="in" category="Health"/>}/>
        <Route exact path='/Science' element={<News key="Science" pageSize={5} country="in" category="Science"/>}/>
        <Route exact path='/Sports' element={<News key="Sports" pageSize={5} country="in" category="Sports"/>}/>
        <Route exact path='/Technology' element={<News key="Technology" pageSize={5} country="in" category="Technology"/>}/>
        </Routes>
        </Router>
  
    </div>
  
  );
  
}

export default App;
