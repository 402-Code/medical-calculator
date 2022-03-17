import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import 'normalize.css';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ChildContext } from './context/ChildContext';
import routes from './routes';
import RequireAgreement from './components/Agreement/RequireAgreement';
import Profile from './components/Profile/Profile';
import History from './components/History/History';
import NewDragScreen from './components/NewDragScreen/NewDragScreen';
import Header from './components/Header/Header';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';

function App() {
  const [selectedDrug, setSelectedDrug] = useState({});
  const [darkMode, setDarkMode] = useState(true);
  const { setUser } = useContext(ChildContext);

  const navigate = useNavigate();

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

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/auth/me', { withCredentials: true })
      .then((response) => {
        setUser(response.data);
        navigate('/addkid');
      })
      .catch((err) => console.log(err));
  }, []);

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RequireAgreement>
        {/* <BrowserRouter> */}
        <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
        <Routes>
          <Route path={routes.signUp} element={<SignUp />} />
          <Route path={routes.signIn} element={<SignIn />} />
          <Route path={routes.findDrug} element={<NewDragScreen setSelectedDrug={setSelectedDrug} />} />
          <Route path={routes.addKid} element={<Profile />} />
          <Route path={routes.editKid} element={<Profile />} />
          <Route path={routes.history} element={<History drug={selectedDrug} />} />
        </Routes>
        {/* </BrowserRouter> */}
      </RequireAgreement>
    </ThemeProvider>
  );
}

export default App;
