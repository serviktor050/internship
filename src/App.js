import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Menu from "./components/Menu";
import Home from "./components/Pages/Home";
import Login from "./components/Pages/Login";
import Register from "./components/Pages/Register";

function App() {
  return (
    <Router>
      <Menu />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
