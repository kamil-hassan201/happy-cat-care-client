
import { deepPurple, purple, brown, lime, lightGreen, teal, cyan, orange, red, pink } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import ContextProvider from './context/ContextProvider/ContextProvider';
import Dashboard from './pages/dashboard/Dashboard/Dashboard';
import Home from './pages/home/Home/Home';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Login/Register/Register';
import ManageAppointments from './pages/ManageAppointments/ManageAppointments';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder/PlaceOrder';
import ServicePage from './pages/ServicesPage/ServicePage/ServicePage';
import PrivateRoute from './pages/shared/PrivateRoute/PrivateRoute';

const theme = createTheme({
  palette: {
    primary: deepPurple,
    secondary: pink
  }
})

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <ContextProvider>
          <BrowserRouter>
            <Switch>
              <Route path="/home">
                <Home></Home>
              </Route>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route path="/login">
                <Login></Login>
              </Route>
              <Route path="/ourservices">
                <ServicePage></ServicePage>
              </Route>
              <PrivateRoute path="/placeorder/:id">
                <PlaceOrder></PlaceOrder>
              </PrivateRoute>

              <PrivateRoute path="/dashboard">
                <Dashboard></Dashboard>
              </PrivateRoute>
              <Route path="/signup">
                <Register></Register>
              </Route>
            </Switch>
          </BrowserRouter>
        </ContextProvider>
      </ThemeProvider>
    </div>

  );
}

export default App;
