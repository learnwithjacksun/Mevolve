import { useState, useEffect } from "react";
import { Flex } from "@radix-ui/themes";
import { Leaf } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <header className={`sticky top-0 w-full transition-colors duration-300 ${scrolled ? "bg-black/50 backdrop-blur-md shadow-md" : "bg-transparent"}`}>
      <nav className="main flex items-center justify-between h-[70px] px-4 md:px-8">
        <a href="/">
          <h2 className="text-white font-pac text-2xl md:text-3xl">Mevolve</h2>
        </a>

        <Flex align="center" gap="4">
          <a href="#" className="font-sans text-white">About</a>
          <Link to="/signup" className="center gap-2 bg-white px-4 py-2 font-mont rounded-full text-[#444] text-sm font-semibold">
            <Leaf size={18} className="text-green-600" />
            <span>Sign Up</span>
          </Link>
        </Flex>
      </nav>
    </header>
  );
};

export default Header;
