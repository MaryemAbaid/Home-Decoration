import React from "react";
import Header from "../common/header/Header";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "../home/Home";
import Footer from "../common/footer/Footer";
import About from "../about/About";
import Contact from "../contact/Contact";
import Produits from "../Blog/Produits";
import Login from "../Login/Login";
import Panier from "../Cart/Panier";

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/produits" component={Produits} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/panier" component={Panier} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default Pages;
