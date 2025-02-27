import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";

const Modal = ({
  title,
  children,
  toggleModal,
  isOpen,
}: ModalProps) => {
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
  return (
    <>
      <div className="fixed inset-0 z-50 center">
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={toggleModal} className="absolute inset-0 bg-black/50 backdrop-blur-sm shadow-2xl" />
            <motion.div
             className="bg-white p-4 rounded-2xl border border-line z-20 w-[90%] md:w-[500px]"
             initial={{ opacity: 0, y: 100 }}
             animate={{ opacity: 1, y: 0 }}
             exit={{ opacity: 0, y: -100 }}
             transition={{ type: "spring", stiffness: 300, damping: 20 }}
             >
          <header className="flex items-center justify-between">
            <h3 className="text-lg font-mont font-medium">{title}</h3>
            <button
              onClick={toggleModal}
              className="center bg-gray-100 text-[#444] rounded-full h-10 w-10"
            >
              <X size={20}/>
            </button>
          </header>

          <div className="mt-4">{children}</div>
        </motion.div>
      </div>
    </>
  );
};

export default Modal;
