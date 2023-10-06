import React from 'react';
import logo from './logo.svg';
import './App.css';
import carritoImage from './Assets/carrito.png'; 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import Navbar from './components/navegacion/navbar';
import ListCart from './components/ListCart/ItemListContainer';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/"> 
          
          </Route>
          <Route path="/cart">
          <ListCart />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

