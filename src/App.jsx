import logo from "./Assets/logo.png";
import Navbar from "./Layout/Navbar/index";
import Footer from "./Layout/Footer/index";
import Image1 from "./Assets/im1.png";
import Image2 from "./Assets/img2.png";
import Image3 from "./Assets/img3.png";
import Image4 from "./Assets/img4.png";
import Image5 from "./Assets/img5.png";
import Image6 from "./Assets/img6.png";

import About from "./Components/About/index";
import Home from "./Pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "./App.css";
function App() {
  return (
    <div className="main-wrapper">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
