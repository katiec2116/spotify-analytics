import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import Dashboard from './Pages/Dashboard';
import NotFound404 from './Pages/404';
import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from "styled-components";
import WebFont from 'webfontloader';
import { GlobalStyles } from './theme/GlobalStyles';
import {useTheme} from './theme/useTheme';

const Container = styled.div`
  margin: 5px auto 5px auto;
`;

const code = new URLSearchParams(window.location.search).get('code')


function App() {
  const {theme, themeLoaded, getFonts} = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);

  useEffect(() => {
    setSelectedTheme(theme);
   }, [themeLoaded]);

   useEffect(() => {
    WebFont.load({
      google: {
        families: getFonts()
      }
    });
  });
  return (
    <>
    {
      themeLoaded && <ThemeProvider theme={ selectedTheme }>
        <GlobalStyles/>
        <Container style={{fontFamily: selectedTheme.font}}>
        <BrowserRouter>
         <Routes>
           <Route path="/" element={ code ? <Dashboard code={code} />  : <LoginPage/>}>
           </Route>
           <Route path="*" element={<NotFound404 />}>
           </Route>
         </Routes>
       </BrowserRouter>
        </Container>
      </ThemeProvider>
    }
    </>
  );
}

    // <div className="wrapper">
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path="/" element={ code ? <Unsure code={code} />  : <LoginPage/>}>
    //       </Route>
    //       <Route path="*" element={<NotFound404 />}>
    //       </Route>
    //     </Routes>
    //   </BrowserRouter>
    // </div>
  // );
// }

export default App;
