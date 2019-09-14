import React from "react";
import "./App.css";
import HomePage from "./Pages/homepage/homepage.component";
import ShopPage from "./Pages/shop/shoppage.component";
import { Switch, Route } from "react-router-dom";

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
