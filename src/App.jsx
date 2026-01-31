import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./src/Home";
import DemoPage from "./components/DemoPage";

function App() {
  return (
    <Router>
      {/* Demo button stays global */}
      <button
        className="demo-btn"
        onClick={() => window.location.href = "/demo"}
      >
        Get a demo <span className="arrow">→</span>
      </button>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demo" element={<DemoPage />} />
      </Routes>
    </Router>
  );ls
}

export default App;
