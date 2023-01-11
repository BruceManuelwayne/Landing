import { Suspense } from 'react';
import {BrowserRouter} from 'react-router-dom';
import { Routes,Route} from 'react-router-dom';

import LandingPageLayout from './layouts/LandingPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useTranslation } from 'react-i18next';



function App() {
  const[t] = useTranslation("translation"); 
  
  return (
    <HelmetProvider>
    <Helmet>
    <title>
      {t("seo.title")}
    </title>
    <meta
            name="description"
            content={t("seo.desc")}
    />
     <meta property="og:type" content="website" />
          <meta property="og:url" content="www.designcode.io" />
          <meta
            property="og:title"
            content={t("seo.title")}
          />
          <meta
            property="og:description"
            content={t("seo.desc")}
          />
          
    </Helmet>
    <Suspense fallback={<div>loading...</div>}>
      
        <BrowserRouter>
          <LandingPageLayout />
          <Routes>    
            <Route path='/' element={<HomePage/>}/>
            <Route path='*' element={<NotFoundPage/>}/>
          </Routes> 
        </BrowserRouter>
      
    </Suspense>
    </HelmetProvider>
  );
}

export default App;
