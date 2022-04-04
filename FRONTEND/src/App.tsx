import React, { useState } from 'react';
import {Routes, Route, Link} from "react-router-dom";

import './App.css'

import Dashboard from './Pages/Dashboard';
import Home from './Pages/Home';

function App() {


  return (
<>
<Routes>
  <Route path="/" element={<Home />}/>
  <Route path="/dashboard" element={<Dashboard />}/>

  <Route path="*" element={<Home />}/>
</Routes>


</>
  )
}

export default App