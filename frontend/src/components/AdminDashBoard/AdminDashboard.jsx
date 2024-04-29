import { useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import AdminHome from "./pages/AdminHome"
import AdminTeachers from "./pages/AdminTeachers"
import AdminRequests from "./pages/AdminRequests"
import AdminQueries from "./pages/AdminQueries"
import AdminBatches from "./pages/AdminBatches";

export default function AdminDashboard() {
  const [pageToRender, setPageToRender] = useState("dashboard");

  const renderDashPage = (pageToRender) => {
    switch (pageToRender) {
      case "dashboard":
        return <AdminHome pageFunc={setPageToRender}/>;
      case "teachers":
        return <AdminTeachers/>
      case "batches":
        return <AdminBatches/>
      case "requests":
        return <AdminRequests/>
      case "queries":
        return <AdminQueries/>
      default:
        return <AdminHome />;
    }
  };
  return (
    <div className="flex min-w-screen min-h-screen overflow-hidden bg-[#cdd4fa]">
      <Sidebar forwhich="admin" activePage={pageToRender} pageFunc={setPageToRender} />
      {renderDashPage(pageToRender)}
    </div>
  );
}
