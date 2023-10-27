import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./component/Navbar";
import Sidebar from "./component/Sidebar";
import HomePage from "./page/HomePage";
import ServicePage from "./page/ServicePage";
import EmployPage from "./page/EmployPage";
import SinglePage from "./page/SinglePage";
import ContactPage from "./page/ContactPage";
import Submenu from "./component/Submenu";

function App() {
  return (
    <div className="App">
      
      <Router>
        <Navbar />
        <Sidebar />
        <Submenu />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="service" element={<ServicePage />} />
            <Route path="employ" element={<EmployPage />} />
            <Route path="single/:id" element={<SinglePage />} />
            <Route path="contact" element={<ContactPage />} />
          </Routes>
      </Router>

    </div>
  );
}

export default App;
