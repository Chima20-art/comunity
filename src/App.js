import logo from "./logo.svg";
import "./App.css";
import Mac1 from "./mac1/mac1";
import Navbar from "./navBar/navBar";
import Annex from "./annex/annex";

import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="App">
      <div>
        {" "}
        <Navbar showMobileMenu={showMenu} setShowMobileMenu={setShowMenu} />
      </div>
      <div>
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/users">Users</Link>
                </li>
              </ul>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/about" component={Mac1} />

              <Route path="/users">
                <Users />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
      <div>
        <Annex />
      </div>
    </div>
  );
}
function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
export default App;
