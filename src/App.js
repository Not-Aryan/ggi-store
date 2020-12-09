import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Products from './pages/products';
import Cart from './pages/cart';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/products' component={Products} />
        <Route path='/cart' component={Cart} />
      </Switch>
    </Router>
  );
}

export default App;
