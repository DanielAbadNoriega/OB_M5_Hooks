import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

/* PAGES */
import NotFoundPage from "./pages/404/NotFoundPage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import DashBoard from "./pages/dashboard/DashBoard";


function AppRouter() {
  //TODO change to value from sessionStorage (or something dinamic)
  let isLogged = true;

  return (
    <div>
      <Router>
        {/* ROUTE SWITCH */}
        <Routes>
          {/* Redirections to protect our routes */}
          <Route
            path="/"
            element={
              isLogged ? <Navigate to="/dashboard" /> : <Navigate to="/login" />
            }
          />

          {/* LOGIN */}
          <Route path="/login" element={<LoginPage />} />
          
          {/* REGISTER */}
          <Route path="/register" element={<RegisterPage />} />

          {/* DASHBOARD */}
          <Route
            path="/dashboard"
            element={isLogged ? <DashBoard /> : <Navigate to="/login" />}
          />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default AppRouter;
