import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./SearchPage";

function App() {
  return (
    <div className="app">
      <Router>
        <Header></Header>

        <Switch>
          <Route path="/search">
            <SearchPage></SearchPage>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>

        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
