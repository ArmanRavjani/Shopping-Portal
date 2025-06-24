import React from "react";
import ReactDom from "react-dom/client";
import App from "./App.jsx";
import {
  Route,
  Router,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/home/home.jsx";
import Books from "./components/Books/Books.jsx";
import Electronics from "./components/Electronics/Electronic.jsx";
import Fashion from "./components/Fashion/Fashion.jsx";
import Furniture from "./components/Furniture/Furniture.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/books" element={<Books />} />
      <Route path="/Electronics" element={<Electronics />} />
      <Route path="/Fashion" element={<Fashion />} />
      <Route path="/Furniture" element={<Furniture />} />
    </Route>
  )
);

ReactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
