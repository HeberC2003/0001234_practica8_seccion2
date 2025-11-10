// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./Login";
import Protected from "./Protected";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/login">Login</Link> |{" "}
        <Link to="/protected">Protected</Link>
      </nav>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/protected" element={<Protected />} />
      </Routes>
    </Router>
  );
}

export default App;
