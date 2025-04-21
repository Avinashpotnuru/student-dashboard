import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Students from "./pages/Students";

import PrivateRoute from "./routes/PrivateRoute";
import Login from "./pages/login";
import Reports from "./pages/reports";
import Dashboard from "./pages/Dashboard";
import DynamicPage from "./pages/DynamicPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/login" element={<Login />} />

          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/students"
            element={
              <PrivateRoute>
                <Students />
              </PrivateRoute>
            }
          />
          <Route
            path="/reports"
            element={
              <PrivateRoute>
                <Reports />
              </PrivateRoute>
            }
          />
          <Route path="/students" element={<DynamicPage />} />
          <Route path="/vendors" element={<DynamicPage />} />
          <Route path="/inventory" element={<DynamicPage />} />
          <Route path="/wallet" element={<DynamicPage />} />
          <Route path="/upi" element={<DynamicPage />} />
          <Route path="/reports" element={<DynamicPage />} />
          <Route path="/rfid" element={<DynamicPage />} />
          <Route path="/user-role" element={<DynamicPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
