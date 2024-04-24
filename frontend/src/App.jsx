import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentsLogin from "./components/Auth/StudentsLogin";
import AdminDashboard from "./components/Admin/AdminDashboard";
import HomePage from "./pages/HomePage";
import ContactUs from "./components/contactUs/ContactUs";
import StudenDashboard from "./components/Student/StudenDashboard";
import TeacherLogin from "./components/Auth/TeacherLogin";
import AssocLogin from "./components/Auth/AssocLogin";
import AssociationHome from "./pages/AssociationHome";
import AboutCreators from "./pages/AboutCreators";
import AboutDepartment from "./pages/AboutDepartment";
import AboutStaffs from "./pages/AboutStaffs";
import RecomendedTools from "./pages/RecomendedTools";
import AssocationEventBody from "./components/association/AssocationEventBody";
import AssocationArticleBody from "./components/association/AssocationArticleBody";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/studentlogin" element={<StudentsLogin />} />
        <Route path="/student" element={<StudenDashboard />} />
        <Route path="/teacherlogin" element={<TeacherLogin />} />
        <Route path="/assoclogin" element={<AssocLogin />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/home-assoc" element={<AssociationHome />} />
        <Route path="/about-creators" element={<AboutCreators />} />
        <Route path="/about-deapartment" element={<AboutDepartment />} />
        <Route path="/about-staff" element={<AboutStaffs />} />
        <Route path="/recomended-tools" element={<RecomendedTools />} />
        <Route path="/event" element={<AssocationEventBody/>}/>
        <Route path="/article" element={<AssocationArticleBody/>}/>
      </Routes>
    </Router>
  );
}

export default App;
