import logo from "./logo.svg";
import "./App.css";
import Mac1 from "./mac1/mac1";
import Navbar from "./navBar/navBar";
import { useState } from "react";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="App">
      <Navbar showMobileMenu={showMenu} setShowMobileMenu={setShowMenu} />
      <Mac1 />
    </div>
  );
}

export default App;
