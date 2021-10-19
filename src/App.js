import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProvider from './context/AuthProvider';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import OurDoctors from './pages/OurDoctors/OurDoctors';
import News from './pages/News/News';
import Register from './pages/Register/Register';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <div className="">
      
      <AuthProvider>
        <BrowserRouter>

          <Nav></Nav>

          <Switch>

              <Route exact path="/">
                <Home></Home>
              </Route>

              <Route path="/home">
                <Home></Home>
              </Route>

              <Route path="/news">
                <News></News>
              </Route>

              <Route path="/ourdoctors">
                <OurDoctors></OurDoctors>
              </Route>

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
