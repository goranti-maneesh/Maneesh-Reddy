import React from "react";
//import { CarsList } from "./components/CarsList/index";
import { CarsList, Car } from "./component/cars-src/index.js";
import {Todo} from "./component/todo-src/todo-list.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}
from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li> <Link to="/home">Home</Link> </li>
            <li> <Link to="/about">About</Link> </li>
            <li> <Link to="/users">Users</Link> </li>
            <li> <Link to="/carslist">carslist</Link> </li>
            <li> <Link to="/Todo">Todo</Link> </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about"> <About /> </Route>
          <Route path="/users"> <Users /> </Route>
          <Route path="/home"> <Home /> </Route>
          <Route path="/carslist"> <CarsList /> </Route>
          <Route path="/Todo"> <Todo /> </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
