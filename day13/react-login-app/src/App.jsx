import React, { useState } from 'react'
import { BrowserRouter , Routes, Route } from "react-router-dom";
import MainLayout from './Components/MainLayout';
import Register from './Components/Register';
import Login from './Components/Login';
import { use } from 'react';

const App = () => {
  const [data , setData] = useState();
  return (
    <div>
      {JSON.stringify(data)}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/register" element={<Register  regData={setData} />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
