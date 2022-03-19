import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Routes, Route, Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import HomeScreen from "./beeScreens/HomeScreen/HomeScreen";
import LoginScreen from "./beeScreens/LoginScreen/LoginScreen";
import WatchScreen from "./beeScreens/WatchScreen/WatchScreen";
import SearchScreen from "./beeScreens/SearchScreen/SearchScreen";
import SubscriptionsScreen from "./beeScreens/subscriptionsScreen/SubscriptionsScreen";

import "./app.scss";

const Layout = () => {
  const [sidebar, toggleSidebar] = useState(false);

  const handleToggleSidebar = () => toggleSidebar((value) => !value);

  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="app__container">
        <SideBar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
        <Container fluid className="app__main">
          <Outlet />
        </Container>
      </div>
    </>
  );
};

const App = () => {
  const { accessToken, loading } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !accessToken) {
      navigate("/auth");
    }
  }, [accessToken, loading, navigate]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomeScreen />} />
        <Route path="watch/:id" element={<WatchScreen />} />
        <Route path="/search/:query" element={<SearchScreen />} />
        <Route path="feed/subscriptions" element={<SubscriptionsScreen />} />
      </Route>
      <Route path="auth" element={<LoginScreen />} />
    </Routes>
  );
};

export default App;
