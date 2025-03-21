import { useState, useEffect } from "react";
import { Flex } from "@radix-ui/themes";
import { Leaf, Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Sidebar } from "../UI";
import { AnimatePresence } from "framer-motion";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () =>{ setIsOpen((prev) => !prev);}

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const location = useLocation()

  const isHome = location.pathname === "/"

  return (
    <>
      <header
        className={`fixed z-50 top-0 w-full transition-colors duration-300 ${
          scrolled ? "bg-black/50 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}
      >
        <nav className="main flex items-center justify-between h-[70px] px-4 md:px-8">
          <a href="/">
            <h2 className="text-white font-pac text-2xl md:text-3xl">
              Mevolve
            </h2>
          </a>

          <Flex align="center" gap="4">
          <Link
              to="/"
              className="font-sans text-white text-sm hidden md:block"
            >
              Home
            </Link>
            {isHome && <a
              href="#about"
              className="font-sans text-white text-sm hidden md:block"
            >
              About
            </a>}
            <Link
              to="/blogs"
              className="font-sans text-white text-sm hidden md:block"
            >
              Blogs
            </Link>
            <Link
              to="/register"
              className="center gap-2 bg-white px-4 py-2 font-mont rounded-full text-[#444] text-sm font-semibold"
            >
              <Leaf size={18} className="text-green-600" />
              <span>Sign Up</span>
            </Link>

            <button
              onClick={toggleMenu}
              className="flex items-center justify-center md:hidden cursor-pointer"
            >
              <Menu />
            </button>
          </Flex>
        </nav>
      </header>

      <AnimatePresence>{isOpen && <Sidebar isOpen={isOpen} onClose={toggleMenu} />}</AnimatePresence>
    </>
  );
};

export default Header;
