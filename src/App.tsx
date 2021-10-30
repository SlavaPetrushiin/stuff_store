import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Cart from './pages/Cart';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  const auth = true;

  return (
    <Router>
      <div className="App">
        <Switch>
          {auth && <React.Fragment>
            <Route path="/products">
              <ProductList />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </React.Fragment>}
          {!auth && <React.Fragment>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Redirect to="/login" />
          </React.Fragment>}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
