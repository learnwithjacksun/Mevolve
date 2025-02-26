import { Section } from "@radix-ui/themes";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <main className="main">
      <Section className="font-sans text-center space-y-4 md:w-[500px] w-full mx-auto">
        <div className="mb-10 space-y-4">
            <h1 className="font-mont font-bold text-4xl md:text-5xl">
              Elevate Your Mind,
               Expand Your World
            </h1>
            <p className="text-sm">
              A book is more than just words on a page, it is a mentor, a guide, and
              a gateway to new dimensions of thinking. If you are ready to be
              intentional about your reading and harness books as a tool for
              transformation, you&apos;re in the right place.
            </p>
        </div>
        <Link
          to="/register"
          className="mt-6 bg-green-700 font-mont text-white font-semibold px-6 py-4 rounded-full"
        >
          Sign Up Today!
        </Link>
      </Section>
    </main>
  );
};

export default Hero;
