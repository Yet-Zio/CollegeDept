import React, { useEffect, useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import StudentHome from "./pages/StudentHome";
import StudentProfile from "./pages/StudentProfile";
import StudentHomeworks from "./pages/StudentHomeworks";
import StudentSchedules from "./pages/StudentSchedules";
import StudentAnnouncements from "./pages/StudentAnnouncements";

export default function StudenDashboard() {
  const [pageToRender, setPageToRender] = useState("dashboard");

  const renderDashPage = (pageToRender) => {
    switch (pageToRender) {
      case "dashboard":
        return <StudentHome pageFunc={setPageToRender} />;
      case "profile":
        return <StudentProfile />;
      case "homeworks":
        return <StudentHomeworks />;
      case "schedules":
        return <StudentSchedules />;
      case "announcements":
        return <StudentAnnouncements />;
      default:
        return <StudentHome />;
    }
  };
  const setTitle = () => {
    useEffect(() => {
      document.title = "Student - Department of CS";
    }, []);
  };

  setTitle();
  return (
    <div className="flex min-w-screen min-h-screen overflow-hidden bg-[#fdf3ec]">
      <Sidebar
        forwhich="student"
        activePage={pageToRender}
        pageFunc={setPageToRender}
      />
      {renderDashPage(pageToRender)}
    </div>
  );
}
