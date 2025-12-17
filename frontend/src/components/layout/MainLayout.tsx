import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./SidebarLayout";
import Header from "./Header";

const contentStyle = {
  flex: 1,
  padding: "24px",
  background: "#f5f5f5",
};

function MainLayout() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        width: "100vw",
      }}
    >
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <div
        style={{
          flex: 1,
          marginLeft: collapsed ? 80 : 250,
          transition: "margin-left 0.3s ease",
          width: `calc(100vw - ${collapsed ? 80 : 250}px)`,
        }}
      >
        <Header />
        <main style={contentStyle}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
