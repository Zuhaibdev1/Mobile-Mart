import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Product from './components/Product';
import Contact from './components/Contact';
import { Redirect, Switch, Route } from "react-router-dom"
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
function App() {
  const [mode, setMode] = useState("light")
  const changeMode = () => {
    if (mode === "light") {
      setMode("dark")

    }
    else {
      setMode("light")
    }
  }
  return (
    <>
      <Header mode={mode} changeMode={changeMode} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Product} />
        <Route exact path="/products/:id" component={ProductDetail} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
