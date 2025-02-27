import { Flex } from "@radix-ui/themes";
import { motion } from "framer-motion";
import { Leaf, X } from "lucide-react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const location = useLocation()

  const isHome = location.pathname === "/"

  return (
    <div className="fixed inset-0 z-50 flex justify-end md:hidden block">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/50 backdrop-blur-xs"
      />
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        exit={{ scaleX: 0 }}
        style={{
          originX: "right",
        }}
        className="bg-white w-[300px] gap-4 h-full z-20 text-[#444] p-4 flex flex-col"
      >
        <Flex justify={"end"}>
          <X />
        </Flex>
        <ul onClick={onClose} className="font-sans flex flex-col gap-2">
          <li>
            <a
              href="/"
              className="active:text-green-700 block py-2 px-4 rounded-md hover:bg-slate-100"
            >
              Home
            </a>
          </li>
          {isHome && <li>
            <a
              href="#about"
              className="active:text-green-700 block py-2 px-4 rounded-md hover:bg-slate-100"
            >
              About
            </a>
          </li>}
          <li>
            <Link
              to={"/blogs"}
              className="active:text-green-700 block py-2 px-4 rounded-md hover:bg-slate-100"
            >
              Blogs
            </Link>
          </li>
        </ul>

        <div
        onClick={onClose}
        className="ms-0 mt-auto">
          <Link
            to={"/register"}
            className="h-12 w-full center text-sm gap-2 font-mont font-semibold bg-green-700 text-white rounded-full"
          >
            <Leaf />
            <span>Sign Up</span>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Sidebar;
