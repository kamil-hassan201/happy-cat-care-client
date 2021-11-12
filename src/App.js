import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import ContextProvider from './context/ContextProvider/ContextProvider';
import Home from './pages/home/Home/Home';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Login/Register/Register';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder/PlaceOrder';
import OurServices from './pages/ServicesPage/OurServices/OurServices';
import ServicePage from './pages/ServicesPage/ServicePage/ServicePage';

function App() {
  return (
    <div className="App">
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
            <Route path="/placeorder/:id">
              <PlaceOrder></PlaceOrder>
            </Route>
            <Route path="/signup">
              <Register></Register>
            </Route>
          </Switch>
        </BrowserRouter>
      </ContextProvider>
    </div>

  );
}

export default App;
