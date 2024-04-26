import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import StudentsLogin from "./components/UserValidation/StudentsLogin.jsx";
import AdminDashboard from "./components/AdminDashBoard/AdminDashboard.jsx";
import HomePage from "./Mainpages/HomePage";
import ContactUs from "./components/contactUs/ContactUs";
import StudenDashboard from "./components/StudentDashBoard/StudenDashboard.jsx";
import TeacherLogin from "./components/UserValidation/TeacherLogin.jsx";
import AssocLogin from "./components/UserValidation/AssocLogin.jsx";
import AssociationHome from "./Mainpages/AssociationHome";
import AboutCreators from "./components/DeptOfCs/AboutCreators";
import AboutDepartment from "./components/DeptOfCs/AboutDepartment";
import AboutStaffs from "./components/DeptOfCs/AboutStaffs";
import RecomendedTools from "./components/DeptOfCs/RecomendedTools";
import AssocationEvent from "./components/association/eventComponents/AssocationEvent.jsx";
import AssocationArticle from "./components/association/ArticleComponents/AssocationArticle.jsx";
import NotFound from "./Mainpages/NotFound.jsx";
import ArticleViewMore from "./components/association/ArticleComponents/ArticleViewMore.jsx";
import { useEffect, useState } from "react";
import Loader from "./components/Common/Loader.jsx";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);
  return loading ? (
    <Loader />
  ) : (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <PageTitle title="DEPT OF CS" />
              <HomePage />
            </>
          }
        />
        <Route
          path="/studentlogin"
          element={
            <>
              <PageTitle title="Student Login" />
              <StudentsLogin />
            </>
          }
        />
        <Route
          path="/teacherlogin"
          element={
            <>
              <PageTitle title="Teacher Login" />
              <TeacherLogin />
            </>
          }
        />

        <Route
          path="/contact-us"
          element={
            <>
              <PageTitle title="Contact Us" />
              <ContactUs />
            </>
          }
        />

        <Route
          path="/about-creators"
          element={
            <>
              <PageTitle title="About Creators" />
              <AboutCreators />
            </>
          }
        />
        <Route
          path="/about-department"
          element={
            <>
              <PageTitle title="About Department" />
              <AboutDepartment />
            </>
          }
        />
        <Route
          path="/about-staff"
          element={
            <>
              <PageTitle title="About Staffs" />
              <AboutStaffs />
            </>
          }
        />
        <Route
          path="/recomended-tools"
          element={
            <>
              <PageTitle title="Recomended Tools" />
              <RecomendedTools />
            </>
          }
        />
        <Route
          path="/student"
          element={
            <>
              <PageTitle title="Student Dashboard" />
              <StudenDashboard />
            </>
          }
        />
        <Route
          path="/admin"
          element={
            <>
              <PageTitle title="Admin Dashboard" />
              <AdminDashboard />
            </>
          }
        />
        <Route
          path="/home-assoc"
          element={
            <>
              <PageTitle title="Association Home" />
              <AssociationHome />
            </>
          }
        />
        <Route
          path="/assoclogin"
          element={
            <>
              <PageTitle title="Association Login" />
              <AssocLogin />
            </>
          }
        />

        <Route
          path="/event"
          element={
            <>
              <PageTitle title="Association Events" />
              <AssocationEvent />
            </>
          }
        />
        <Route
          path="/article"
          element={
            <>
              <PageTitle title="Association Articles" />
              <AssocationArticle />
            </>
          }
        />
        <Route
          path="/article/item/:id"
          element={
            <>
              <PageTitle title="Article" />
              <ArticleViewMore />
            </>
          }
        />
        <Route
          path="*"
          element={
            <>
              <PageTitle title="404 Not Found" />
              <NotFound />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

// eslint-disable-next-line react/prop-types
const PageTitle = ({ title }) => {
  const location = useLocation();

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};
