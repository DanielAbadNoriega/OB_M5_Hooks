import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
  Link,
} from "react-router-dom";

import HomePage from "./pages/home/HomePage";
import NotFoundPage from "./pages/404/NotFoundPage";
import AboutPage from "./pages/about-faqs/AboutPage";
import ProfilePage from "./pages/profile/ProfilePage";
import TasksPage from "./pages/tasks/TasksPage";
import TaskDetailPage from "./pages/tasks/TaskDetailPage";
import LoginPage from "./pages/auth/LoginPage";
import StatePage from "./pages/home/StatePage";
//import "bootstrap/js/src/collapse.js";

function AppRouter() {
  const [isLogged, setisLogged] = useState(false);

  /*   useEffect(() => {
    if (localStorage.getItem("credentials"))
      setisLogged(localStorage.getItem("credentials"));
  }, []); */

  const tasksList = [
    {
      id: 1,
      name: "Task 1",
      description: "My first task.",
    },
    {
      id: 2,
      name: "Task 2",
      description: "My second task.",
    },
  ];

  /* STYLES */

  let activeStyle = {
    width: "200px",
    padding: "5px 10px",
    fontWeight: "bold",
  };

  let defaultLink = {
    width: "200px",
    padding: "5px 10px",
  };

  return (
    <Router>
      <div>
        <aside className="navbar navbar-expand-lg navbar-light bg-light">
          <button
            className="navbar-toggler collapsed ms-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar"
            aria-controls="navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar">
            {/* HOME */}
            <NavLink
              to="/"
              className="nav-link text-left"
              style={({ isActive }) => (isActive ? activeStyle : defaultLink)}
            >
              HOME
            </NavLink>

            {/* STATE */}
            <NavLink
              to="/state"
              className="nav-link text-left"
              style={({ isActive }) => (isActive ? activeStyle : defaultLink)}
            >
              STATE PROPS
            </NavLink>

            {/* LOGIN */}
            {isLogged ? (
              ""
            ) : (
              <NavLink
                to="/login"
                className="nav-link text-left"
                style={({ isActive }) => (isActive ? activeStyle : defaultLink)}
              >
                LOGIN
              </NavLink>
            )}

            {/* PROFILE */}
            <NavLink
              to="/profile"
              className="nav-link text-left"
              style={({ isActive }) => (isActive ? activeStyle : defaultLink)}
            >
              PROFILE
            </NavLink>

            {/* TASKS */}
            <NavLink
              to="/tasks"
              className="nav-link text-left"
              style={({ isActive }) => (isActive ? activeStyle : defaultLink)}
            >
              TASKS
            </NavLink>

            <NavLink
              to="/tasks/1"
              className="nav-link text-left"
              style={({ isActive }) => (isActive ? activeStyle : defaultLink)}
            >
              TASK 1
            </NavLink>

            <NavLink
              to="/tasks/2"
              className="nav-link text-left"
              style={({ isActive }) => (isActive ? activeStyle : defaultLink)}
            >
              TASK 2
            </NavLink>

            {/* ABOUT */}
            <NavLink
              to="/about"
              className="nav-link text-left"
              style={({ isActive }) => (isActive ? activeStyle : defaultLink)}
            >
              ABOUT
            </NavLink>

            {/* 404 */}
            <NavLink
              to="/any404"
              className="nav-link text-left"
              style={({ isActive }) => (isActive ? activeStyle : defaultLink)}
            >
              404 - NOT FOUND
            </NavLink>
          </div>
        </aside>
        <main>
          <Routes>
            {/* HOME */}
            <Route exact path="/" element={<HomePage />} />

            {/* LOGIN */}
            <Route
              path="/login"
              element={isLogged ? <HomePage /> : <LoginPage />}
            />

            {/* ABOUT */}
            <Route path="/about" element={<AboutPage />} />

            {/* PROFILE */}
            <Route
              path="/profile"
              element={isLogged ? <ProfilePage /> : <LoginPage />}
            ></Route>

            {/* TASKS */}
            <Route path="/tasks" element={<TasksPage />} />
            <Route
              path="/tasks/:id"
              element={<TaskDetailPage tasks={tasksList} />}
            ></Route>

            {/* STATE */}
            <Route path="/state" element={<StatePage />} />

            {/* 404 - Page No Found */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default AppRouter;
