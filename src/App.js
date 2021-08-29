
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import FeaturedProducts from "./FeaturedProducts";
import NewsHome from './components/NewsHome'
import NewsItem from "./components/NewsItem";
import "./App.css";
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={NewsHome} />
          <Route exact path="/product/:id" component={NewsItem} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
