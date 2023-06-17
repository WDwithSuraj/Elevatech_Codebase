import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { AllPages } from './pages/AllPages';
import { Navbar } from './components/Navbar';


function App() {
  return (<>
    <Navbar/>
  <AllPages/>
  </>
  );
}

export default App;
