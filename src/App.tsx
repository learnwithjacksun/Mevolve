import { Route, Routes } from "react-router-dom";
import { Blogs, Home, Register } from "@/Pages";
import { Toaster } from "sonner";
import { ScrollToTop } from "@/Components/UI";
import { useEffect } from "react";
import AOS from 'aos'
import "aos/dist/aos.css";


const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 50,
      duration: 1000,
      easing: "ease-in-sine",
      delay: 50,
    });
  }, []);

  return (
    <>
      <ScrollToTop />
      <Toaster richColors position="top-center" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </>
  );
};

export default App;
