import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import MainLayout from "./components/layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import { ThemeProvider } from "./context/ThemeContext";
import MyAttendance from "./pages/employee_self_service/MyAttendance";
import HolidaysLayout from "./components/layout/HolidaysLayout";
import MyProfile from "./pages/employee_self_service/MyProfile";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<h1>Home Page</h1>} />
            <Route path="/about" element={<h1>About Page</h1>} />
            <Route element={<MainLayout />}>
              <Route
                path="/dashboard"
                element={<Navigate to="/dashboard/overview" replace />}
              />

              <Route path="/dashboard/overview" element={<Dashboard />} />
              <Route
                path="/employee-management/self-service/attendance"
                element={<MyAttendance />}
              />
              <Route
                path="/employee-management/self-service/profile"
                element={<MyProfile />}
              />

              <Route
                path="/employee-management/self-service/holidays"
                element={<HolidaysLayout />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
