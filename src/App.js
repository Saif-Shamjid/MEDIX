import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProvider from './context/AuthProvider';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import CosNav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import OurDoctors from './pages/OurDoctors/OurDoctors';
import News from './pages/News/News';
import Register from './pages/Register/Register';
import NotFound from './pages/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import SingleService from './pages/SingleService/SingleService';

function App() {
  return (
    <div className="">
      
      <AuthProvider>
        <BrowserRouter>

          <CosNav></CosNav>

          <Switch>

              <Route exact path="/">
                <Home></Home>
              </Route>

              <Route path="/home">
                <Home></Home>
              </Route>

              <PrivateRoute path="/service/:serviceId">
                <SingleService></SingleService>
              </PrivateRoute>

              <PrivateRoute path="/news">
                <News></News>
              </PrivateRoute>

              <PrivateRoute path="/ourdoctors">
                <OurDoctors></OurDoctors>
              </PrivateRoute>

              <Route path="/login">
                <Login></Login>
              </Route>

              <Route path="/register">
                <Register></Register>
              </Route>
              
              <Route path="*">
                <NotFound></NotFound>
              </Route>
              

          </Switch>

          <Footer></Footer>

        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
