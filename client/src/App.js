import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'

import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import SideBar from "./components/SideBar";
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import Work from "./components/Work";
import Services from "./components/Services.jsx";
import Contact from "./components/Contact";
import AllUsers from "./components/AllUsers.jsx";
function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <ChakraProvider>
    <BrowserRouter>
        <Routes>
          <Route path="/page" element={<SideBar />}>
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="resume" element={<Resume />} />
            <Route path="work" element={<Work />} />
            <Route path="Services" element={<Services />} />
            <Route path="contact" element={<Contact />} />
            <Route path="all-users" element={<AllUsers/>} />
          </Route>
          <Route path="*" element={<Navigate to="page/home" />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>

  );
}

export default App;
