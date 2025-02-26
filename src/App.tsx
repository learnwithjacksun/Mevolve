import { Route, Routes } from "react-router-dom";
import { Blogs, Home, Register } from "@/Pages";
import { Toaster } from "sonner";

const App = () => {
  return (
    <>
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
