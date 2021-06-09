import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Menu from "./components/Menu";
import Home from "./components/Pages/Home";
import ListUsers from "./components/Pages/ListUsers";
import Login from "./components/Pages/Login";
import Register from "./components/Pages/Register";
import User from "./components/Pages/User";
import MortgageCalculator from "./components/Pages/MortgageCalculator";
import "antd/dist/antd.css";
import Timer from "./components/Pages/Timer";

function App() {
  return (
    <Router>
      <Menu />
      <Switch>
        <Route path="/timer" component={Timer} />
        <Route path="/mortgage-calculator" component={MortgageCalculator} />
        <Route path="/list-users/user-:id" component={User} />
        <Route path="/list-users" component={ListUsers} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
