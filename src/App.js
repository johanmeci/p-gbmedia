import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import UserPage from "./pages/UserPage";

import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";

import Dashboard from "./pages/Dashboard";

import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return(
    <BrowserRouter>
      <Hero/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/services" element={<ServicesPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>

        {/* Parametros */}
        <Route path="/users/:id" element={<UserPage/>}/>
        <Route path="/users/new" element={<p>New user form</p>}/>

        {/* Navigate */}
        <Route path="/usuarios" element={<Navigate to='/users'/>}/>
        <Route path="/dashboard/*" element={<Dashboard/>}>
          <Route path="welcome" element={<p>Welcome!!</p>} />
          <Route path="goodbye" element={<p>God bye!!</p>} />
        </Route>

        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}