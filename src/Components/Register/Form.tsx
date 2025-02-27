import { Container, Section } from "@radix-ui/themes";
import Steps from "./Steps";
import { FormEvent, useEffect, useState } from "react";
import PersonalInfo from "./PersonalInfo";
import Likes from "./Likes";
import Final from "./Final";
import { toast } from "sonner";
import { Modal } from "../UI";
import { CircleCheckBig } from "lucide-react";
import { AnimatePresence } from "framer-motion";

const Form = () => {
  const [storedName, setStoredName] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen((prev) => !prev);

  const [form, setForm] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    genre: "",
    lastBookRead: "",
  });

  const [error, setError] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    genre: "",
    lastBookRead: "",
  });
  const [currentStep, setCurrentStep] = useState(1);
  const handleNextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setError((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(!form.fullname || !form.email || !form.phoneNumber){
        toast.error("All fields are required!")
        setCurrentStep(1)
        return;
    }
    console.log(form);
    localStorage.setItem("username", form.fullname);
    toast.success("Form Submitted!");
    toggleModal();
  };
  useEffect(() => {
    const getName = () => {
      const name = localStorage.getItem("username");
      console.log(name);
      if (!name) {
        return "Username not found!";
      }
      setStoredName(name);
    };

    if (!storedName) {
      getName();
    }
  }, [storedName]);

  return (
    <>
      <main className="layout">
        <Section>
          <Steps currentStep={currentStep} setCurrentStep={setCurrentStep} />

          <form data-aos="zoom-in" onSubmit={handleSubmit} className="mt-6">
            {currentStep === 1 && (
              <PersonalInfo
                handleNextStep={handleNextStep}
                form={form}
                error={error}
                setError={setError}
                handleChange={handleChange}
              />
            )}
            {currentStep === 2 && (
              <Likes
                handleNextStep={handleNextStep}
                handlePrevStep={handlePrevStep}
                form={form}
                error={error}
                setError={setError}
                setForm={setForm}
                handleChange={handleChange}
              />
            )}
            {currentStep === 3 && <Final handlePrevStep={handlePrevStep} />}
          </form>
        </Section>
      </main>

      <AnimatePresence>
        {isOpen && (
          <Modal isOpen={isOpen} toggleModal={toggleModal}>
            <Container className="space-y-4">
              <div className="h-20 w-20 mb-4 center mx-auto bg-green-500/10 rounded-full text-green-600">
                <CircleCheckBig size={30} />
              </div>
              <div className="text-center font-sans">
                <h3 className="text-xl font-mont font-semibold">
                  Registration Completed!
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  Hey {storedName.split(" ")[0] || "there"}, welcome to{" "}
                  <span className="font-semibold font-pac tracking-widest text-green-700">Mevolve</span>!
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  You’re now part of a vibrant community focused on reading,
                  self-growth, and meaningful discussions. 🚀
                </p>
                {/* <p className="text-sm text-gray-600 mt-2">
                  Check your inbox for a welcome message or explore our latest
                  book recommendations now!
                </p> */}
              </div>

              <button
                onClick={toggleModal}
                className="mt-4 w-full bg-green-700 text-white py-2 rounded-full font-medium"
              >
                Start Exploring 📚
              </button>
            </Container>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default Form;
