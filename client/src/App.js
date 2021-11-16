import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Articles from "./components/Articles";
import Login from "./components/Login";
import Bookmarks from "./components/Bookmarks"
import "./App.css";
import Signup from "./components/Signup";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <div style={{ margin: "40px" }}>&nbsp;</div>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/bookmarks">
            <Bookmarks />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route >
            <Articles />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
