import { Footer, Header } from "@/Components/Home";
import { Form } from "@/Components/Register";

const Register = () => {
  return (
    <>
      <div className="hero-container text-white center">
        <Header />
        <div data-aos="fade-up" className="main font-sans text-center space-y-4 md:w-[500px] w-full mx-auto">
          <div className="mb-10 space-y-4">
            <h1 className="font-mont font-bold text-4xl md:text-5xl">
              Join <span className="text-green-600 font-pac">Mevolve</span> and
              Transform Your Life Today!
            </h1>
            <p className="text-sm">
              Your journey to intentional growth starts now, and we&apos;re
              honored to be part of it. At MEvolve, we don&apos;t just read—we
              absorb, apply, and evolve.
            </p>
          </div>
        </div>
      </div>

      <Form/>
      <Footer/>
    </>
  );
};

export default Register;
