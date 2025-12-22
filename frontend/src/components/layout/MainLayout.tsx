import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./SidebarLayout";
import Header from "./Header";

const contentStyle = {
  flex: 1,
  padding: "24px",
  background: "#f5f5f5",
  minHeight: "calc(100vh - 64px)",
  overflow: "auto",
};

function MainLayout() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <div
        style={{
          flex: 1,
          marginLeft: collapsed ? 80 : 250,
          transition: "margin-left 0.3s ease",
          maxWidth: `calc(100% - ${collapsed ? 80 : 250}px)`,
          overflow: "hidden",
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
