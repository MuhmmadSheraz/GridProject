import Navbar from "./Layout/Navbar/index";
import Footer from "./Layout/Footer/index";

import Sidebar from "./Components/Sidebar/index";
import Home from "./Pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "./App.css";
import { useState } from "react";
function App() {
  const [showModal, setShowModal] = useState(false);

  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className="main-wrapper">
      <Navbar
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      {showSidebar && (
        <Sidebar
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}
      <Home showModal={showModal} setShowModal={setShowModal} />
      <Footer showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}

export default App;
