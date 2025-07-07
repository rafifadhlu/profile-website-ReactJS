import { Children, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Layout from "./pages/Layout";
import Error from "./pages/Error";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Portofolio from "./pages/Portofolio";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { Route } from "react-router-dom";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<Error />}>
      <Route index element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Skills" element={<Skills />} />
      <Route path="/porto" element={<Portofolio />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
