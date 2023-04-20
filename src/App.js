import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import Terms from "./Components/Terms";
import Privacy from "./Components/Privacy.js";
import Home from "./Components/Home.js";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/terms/in-terms" element={<Terms />} />
          <Route path="/policy/in-policy" element={<Privacy />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
