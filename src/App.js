import './App.css';
import React from 'react';
import Student from './Components/Student/Student';
import Update from './Components/Update/Update';
import { Route, Routes, BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Student />}></Route>
        <Route path='/update/:id' element={<Update/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
