import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import 'normalize.css';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import routes from './routes';
import RequireAgreement from './components/Agreement/RequireAgreement';
import Profile from './components/Profile/Profile';
import History from './components/History/History';
import NewDragScreen from './components/NewDragScreen/NewDragScreen';
import Header from './components/Header/Header';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Error404 from './components/Error404/Error404';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const paletteType = darkMode ? 'dark' : 'light';
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === 'light' ? '#eaeaea' : '#202020'
      },
      primary: {
        main: '#1976d2'
      }
    }
  });

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RequireAgreement>
        <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
        <Routes>
          <Route path={routes.signUp} element={<SignUp />} />
          <Route path={routes.signIn} element={<SignIn />} />
          <Route element={<RequireAuth />}>
            <Route path={routes.findDrug} element={<NewDragScreen />} />
            <Route path={routes.addKid} element={<Profile />} />
            <Route path={routes.editKid} element={<Profile />} />
            <Route path={routes.history} element={<History />} />
          </Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </RequireAgreement>
    </ThemeProvider>
  );
}

export default App;
