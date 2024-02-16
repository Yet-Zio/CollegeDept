import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentsLogin from "./components/Auth/StudentsLogin";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<div></div>} />
          <Route path="/slogin" element={<StudentsLogin />} />
        </Routes>
    </Router>
  );
}

export default App;
