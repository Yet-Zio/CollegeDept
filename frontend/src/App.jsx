import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import StudentsLogin from './components/Auth/StudentsLogin'
import AdminDashboard from './components/Admin/AdminDashboard'

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<></>}/>
          <Route path="/studentlogin" element={<StudentsLogin/>}/>
          <Route path="/admin" element={<AdminDashboard/>}/>
        </Routes>
    </Router>
  );
}

export default App;
