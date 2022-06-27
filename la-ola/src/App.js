import { Suspense } from 'react';
import {BrowserRouter} from 'react-router-dom';
import { Routes,Route} from 'react-router-dom';

import LandingPageLayout from './layouts/LandingPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

import './App.css';

function App() {

  
  return (
    <Suspense fallback={<div>loading...</div>}>
      
        <BrowserRouter>
          <LandingPageLayout />
          <Routes>    
            <Route path='/' element={<HomePage/>}/>
            <Route path='*' element={<NotFoundPage/>}/>
          </Routes> 
        </BrowserRouter>
      
    </Suspense>
  );
}

export default App;
