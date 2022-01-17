import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Crud from './pages/Crud';


function App() {
  return (
    <BrowserRouter>
           <Routes >
                <Route  path='/' element={<Crud />} />
           </Routes>
    </BrowserRouter>
  );
}
export default App;