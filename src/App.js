import React from "react";
import { BrowserRouter, Routes, Route, Navigate  } from "react-router-dom";
import Main from './layouts/Main';
import NotFound from "./pages/NotFound";

import publicRoutes from "./routes/PublicRoutes";
import protectedRoutes from "./routes/ProtectedRoutes";
import Signin2 from "./pages/Signin2"; 

// import css
import "./assets/css/remixicon.css";

// import scss
import "./scss/style.scss";



// set skin on load
window.addEventListener("load", function () {
  let skinMode = localStorage.getItem("skin-mode");
  let HTMLTag = document.querySelector("html");

  if (skinMode) {
    HTMLTag.setAttribute("data-skin", skinMode);
  }
});

export default function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
          <Route path="/" element={<Navigate to="/signin2" />} />
            {protectedRoutes.map((route, index) => {
              return (
                <Route
                  path={route.path}
                  element={route.element}
                  key={index}
                />
              )
            })}
          </Route>
          {publicRoutes.map((route, index) => {
            return (
              <Route
                path={route.path}
                element={route.element}
                key={index}
              />
            )
          })}
           <Route path="/signin2" element={<Signin2 />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
    
  );
}