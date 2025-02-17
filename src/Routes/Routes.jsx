import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import UserLayout from "../layouts/UserLayout";
import Home from "../Pages/Home";
import Event from "../Pages/Events";
import Competition from "../Pages/Competition";
import Accommodation from "../Pages/Accommodation";
import Contact from "../Pages/Contact";
import Schedule from "../Pages/Schedule";
import Sponsor from "../Components/Sponsors";
import Cultural from "../Components/events/Cultural";
import Technical from "../Components/events/Technical";
import Workshop from "../Components/events/WorkShop";
import Carnival from "../Pages/Carnival";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <UserLayout>
              <Home />
            </UserLayout>
          }
        />
        <Route
          path="/events"
          element={
            <UserLayout>
              <Event />
            </UserLayout>
          }
        />
        <Route
          path="/carnival"
          element={
            <UserLayout>
              <Carnival />
            </UserLayout>
          }
        />
        <Route
          path="/contact-us"
          element={
            <UserLayout>
              <Contact />
            </UserLayout>
          }
        />
        <Route
          path="/competitions"
          element={
            <UserLayout>
              <Competition />
            </UserLayout>
          }
        />
        <Route
          path="/schedule"
          element={
            <UserLayout>
              <Schedule />
            </UserLayout>
          }
        />

        <Route
          path="/events/cultural"
          element={
            <UserLayout>
              <Cultural />
            </UserLayout>
          }
        />
        <Route
          path="/events/technical"
          element={
            <UserLayout>
              <Technical />
            </UserLayout>
          }
        />
        <Route
          path="/events/workshop"
          element={
            <UserLayout>
              <Workshop />
            </UserLayout>
          }
        />
        <Route
          path="/sponsor"
          element={
            <UserLayout>
              <Sponsor />
            </UserLayout>
          }
        />
        <Route
          path="/accommodation"
          element={
            <UserLayout>
              <Accommodation />
            </UserLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
