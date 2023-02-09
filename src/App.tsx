import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { store } from "./app/store";
import Landing from "./components/landing/Landing";
import Login from "./components/auth/Login";
import Navbar from "./components/layout/Navbar";
import Home from "./components/home/Home";
import PrivateRoute from "./components/routing/PrivateRoute";
import Notification from "./components/notification/Notification";
import { useAppSelector } from "./app/hooks";
import { selectIsNotificationOpened } from "./components/routing/routeSlice";

function App() {
  const isNotificationOpened = useAppSelector(selectIsNotificationOpened);
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <div
          className={`${
            isNotificationOpened === true ? "blur-sm" : "blur-none"
          }`}
        >
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/home" element={<PrivateRoute Component={Home} />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
