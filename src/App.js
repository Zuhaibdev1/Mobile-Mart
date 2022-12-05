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
        <Route exact path="/" ><Home mode={mode} /> </Route>
        <Route exact path="/products" ><Product mode={mode} /></Route>
        <Route exact path="/products/:id"><ProductDetail mode={mode} /></Route>
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/about"><About mode={mode} /></Route>
        <Route exact path="/contact" ><Contact mode={mode} /></Route>
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
