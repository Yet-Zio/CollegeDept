import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
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
import AssocationEvent from "./components/association/AssocationEvent";
import AssocationArticle from "./components/association/AssocationArticle";
import NotFound from "./pages/NotFound.jsx";
import ArticleViewMore from "./components/association/ArticleViewMore.jsx";
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
