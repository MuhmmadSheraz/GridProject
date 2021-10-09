import Navbar from "./Layout/Navbar/index";
import Footer from "./Layout/Footer/index";

import Sidebar from "./Components/Sidebar/index";
import Home from "./Pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "./App.css";
import { useState } from "react";
function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className="main-wrapper">
      <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      {showSidebar && (
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      )}
      <Home />
      <Footer />
    </div>
  );
}

export default App;
