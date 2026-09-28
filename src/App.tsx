import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Academics from "./components/pages/Academics";
import Admissions from "./components/pages/Admissions";
import Campus from "./components/pages/Campus";
import News from "./components/pages/News";
import Contact from "./components/pages/Contact";
import Apply from "./components/pages/Apply";
import NewsDetail  from "./components/pages/NewsDetail";
import AcademicDetail  from "./components/pages/AcademicDetail";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import PageLoader from "./components/PageLoader";
import BackToTop from "./components/BackToTop";

export default function App() {
  return (
    <BrowserRouter>
      <PageLoader />
       <ScrollToTop />
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/academics" element={<Academics />} />
        <Route path="/academics/:slug" element={<AcademicDetail />} />

        <Route path="/admissions" element={<Admissions />} />

        <Route path="/campus" element={<Campus />} />

        <Route path="/news" element={<News />} />
        <Route path="/news/:slug" element={<NewsDetail />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/apply" element={<Apply />} />

      </Routes>
      <BackToTop />
      <Footer />
    </BrowserRouter>
  );
}