import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import StudentsLogin from './components/Auth/StudentsLogin'
import AdminDashboard from './components/Admin/AdminDashboard'
import HomePage from "./pages/HomePage";
import Menu from "./components/homepage/Menu";
import ContactUs from "./components/contactUs/ContactUs";
import StudenDashboard from "./components/Student/StudenDashboard";
import TeacherLogin from "./components/Auth/TeacherLogin";
import AdminLogin from "./components/Auth/AdminLogin";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<HomePage /> }/>
          <Route path="/menu" element={<Menu /> }/>
          <Route path="/studentlogin" element={<StudentsLogin/>}/>
          <Route path="/student" element={<StudenDashboard/>}/>
          <Route path="/teacherlogin" element={<TeacherLogin/>}/>
          <Route path="/adminlogin" element={<AdminLogin/>}/>
          <Route path="/admin" element={<AdminDashboard/>}/>
          <Route path="/contact-us" element={<ContactUs/>}/>
        </Routes>
    </Router>
  );
}

export default App;
