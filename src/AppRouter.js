import { useEffect, useState } from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useParams,
} from "react-router-dom";

import HomePage from "./pages/home/HomePage";
import NotFoundPage from "./pages/404/NotFoundPage";
import AboutPage from "./pages/about-faqs/AboutPage";
import ProfilePage from "./pages/profile/ProfilePage";
import TasksPage from "./pages/tasks/TasksPage";
import TaskDetailPage from "./pages/tasks/TaskDetailPage";
import LoginPage from "./pages/auth/LoginPage";
//import "bootstrap/js/src/collapse.js";

function AppRouter() {
  const [isLogged, setisLogged] = useState(false);

  let idParam = useParams();

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
            <Link
              to="/"
              className="nav-link text-left"
              style={{ width: "200px", padding: "5px 10px" }}
            >
              HOME
            </Link>

            {/* LOGIN */}
            {isLogged ? (
              ""
            ) : (
              <Link
                to="/login"
                className="nav-link text-left"
                style={{ width: "200px", padding: "5px 10px" }}
              >
                LOGIN
              </Link>
            )}

            {/* PROFILE */}
            <Link
              to="/profile"
              className="nav-link text-left"
              style={{ width: "200px", padding: "5px 10px" }}
            >
              PROFILE
            </Link>

            {/* TASKS */}
            <Link
              to="/tasks"
              className="nav-link text-left"
              style={{ width: "200px", padding: "5px 10px" }}
            >
              TASKS
            </Link>

            <Link
              to="/tasks/1"
              className="nav-link text-left"
              style={{ width: "200px", padding: "5px 10px" }}
            >
              TASK 1
            </Link>

            <Link
              to="/tasks/2"
              className="nav-link text-left"
              style={{ width: "200px", padding: "5px 10px" }}
            >
              TASK 2
            </Link>

            {/* ABOUT */}
            <Link
              to="/about"
              className="nav-link text-left"
              style={{ width: "200px", padding: "5px 10px" }}
            >
              ABOUT
            </Link>

            {/* 404 */}
            <Link
              to="/any404"
              className="nav-link text-left"
              style={{ width: "200px", padding: "5px 10px" }}
            >
              404 - NOT FOUND
            </Link>
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

            {/* 404 - Page No Found */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default AppRouter;
