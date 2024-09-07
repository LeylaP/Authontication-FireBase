import React from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "../pages/Auth";
import Home from "../pages/Home";

export default function RouterConfig() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/auth" element={<Auth />} />
      </Routes>
    </div>
  );
}
