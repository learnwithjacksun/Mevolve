import { Box, Grid, Section } from "@radix-ui/themes";
import { CircleCheck } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const lists = [
    "Tailored book recommendations based on your goals",
    "A structured approach to reading for impact",
    "Access to thought-provoking discussions and insights",
    "Weekly strategies to maximize comprehension and application",
  ];
  return (
    <>
      <Section className="main" id="about">
        <div data-aos="fade-right" className="text-center relative">
          <div className="absolute h-1 -bottom-5 left-1/2 -translate-x-1/2 rounded-full w-[100px] bg-green-700" />
          <h2 className="text-2xl md:text-3xl font-mont">
            About <span className="font-pac text-green-700">Mevolve</span>
          </h2>
          <p className="font-sans text-gray-500">
            The Right Book Can Change Everything.
          </p>
        </div>

        <Section>
          <Grid columns={{ initial: "1", md: "2" }} gap={"6"} width={"auto"}>
            <Box>
              <div data-aos="zoom-in" className="center">
                <img
                  src="https://i.ibb.co/dwRZrHdD/image.webp"
                  width={300}
                  className="border-4 border-green-700 rounded-lg -rotate-5 hover:rotate-5 duration-500 transition-all"
                />
              </div>
            </Box>
            <Box>
              <p data-aos="fade-up" className="font-sans">
                At MEvolve, we curate an elite circle of readers who are
                committed to personal growth, self-mastery, and lifelong
                learning. Here, you&apos;ll find:
              </p>
              <ul className="mt-6 mb-10">
                {lists.map((list, index) => (
                  <li
                  data-aos="fade-right"
                    key={index}
                    className="flex gap-2 items-start text-gray-500 py-1 text-sm font-sans"
                  >
                    <CircleCheck fill="green" className="text-white" />
                    <span>{list}</span>
                  </li>
                ))}
              </ul>
              <Link
              data-aos="zoom-in"
                to="/register"
                className="mt-6 bg-green-700 font-mont text-white font-semibold px-6 py-4 rounded-full"
              >
                Sign Up Today!
              </Link>
            </Box>
          </Grid>
        </Section>
      </Section>
    </>
  );
};

export default About;
