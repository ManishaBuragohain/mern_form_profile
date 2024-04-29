// import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Username from "./components/Username";
import Profile from "./components/Profile";
import Reset from "./components/Reset";
import Password from "./components/Password";
import Recovery from "./components/Recovery";
import Register from "./components/Register";
import PageNotFound from "./components/PageNotFound";

const routes = [
  { path: "/", component: () => <Username /> },
  { path: "/register", component: () => <Register /> },
  { path: "/password", component: () => <Password /> },
  { path: "/profile", component: () => <Profile /> },
  { path: "/recovery", component: () => <Recovery /> },
  { path: "*", component: () => <PageNotFound /> },
  { path: "/reset", component: () => <Reset /> },
  
];
function App() {
  return (
    <main className="App">
      <Router>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.component()} />
          ))}
        </Routes>
      </Router>
    </main>
  );
}

export default App;
