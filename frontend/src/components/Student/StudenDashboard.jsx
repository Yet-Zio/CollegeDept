import React, { useState } from 'react'
import Sidebar from '../sidebar/Sidebar'
import StudentHome from './pages/StudentHome'

export default function StudenDashboard() {
    const [pageToRender, setPageToRender] = useState("dashboard");

    const renderDashPage = (pageToRender) => {
        switch (pageToRender) {
          case "dashboard":
            return <StudentHome pageFunc={setPageToRender}/>;
          default:
            return <StudentHome />;
        }
      };
  return (
    <div className="flex min-w-screen min-h-screen overflow-hidden bg-white">
      <Sidebar forwhich="student" activePage={pageToRender} pageFunc={setPageToRender} />
      {renderDashPage(pageToRender)}
    </div>
  )
}
