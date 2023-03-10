import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { store } from "./app/store";
import Landing from "./components/landing/Landing";
import Signin from "./components/auth/Signin";
import Navbar from "./components/layout/Navbar";
import Home from "./components/home/Home";
import PrivateRoute from "./components/routing/PrivateRoute";
import { useAppSelector } from "./app/hooks";
import { selectIsBodyBlur } from "./components/routing/routeSlice";
import History from "./components/history/History";
import Profile from "./components/profile/Profile";
import Kissbox from "./components/kissbox/Kissbox";
import Faq from "./components/faq/Faq";
import Signup from "./components/auth/Singup";

function App() {
  const isBodyBlur = useAppSelector(selectIsBodyBlur);
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <div
          className={`${
            isBodyBlur === true ? "blur-sm" : "blur-none"
          } dark:bg-[#2f2f2f] bg-basic-light`}
        >
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/auth/login" element={<Signin />} />
            <Route path="/auth/signup" element={<Signup />} />
            <Route path="/home" element={<PrivateRoute Component={Home} />} />
            <Route
              path="/history"
              element={<PrivateRoute Component={History} />}
            />
            <Route
              path="/profile"
              element={<PrivateRoute Component={Profile} />}
            />
            <Route
              path="/kissbox"
              element={<PrivateRoute Component={Kissbox} />}
            />
            <Route path="/faq" element={<PrivateRoute Component={Faq} />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
