import { Footer, Header } from "@/Components/Home";
import { Callout, Section } from "@radix-ui/themes";
import { RxInfoCircled } from "react-icons/rx";

const Blogs = () => {
  return (
    <>
      <div className="hero-container text-white center">
        <Header />
        <div className="main font-sans text-center space-y-4 md:w-[500px] w-full mx-auto">
          <div className="mb-10 space-y-4">
            <h1 className="font-mont font-bold text-4xl md:text-5xl">
              Our Blogs
            </h1>
            <p className="text-sm">
              Unlock your potential with insightful articles on personal growth,
              mindset shifts, and lifelong learning. Stay inspired on your
              journey to self-improvement.
            </p>
          </div>
        </div>
      </div>
      <Section>
        <div className="w-[90%] md:w-[500px] mx-auto">
          <Callout.Root variant="surface" color="yellow">
            <Callout.Icon>
              <RxInfoCircled />
            </Callout.Icon>
            <Callout.Text className="font-sans">
              This feature is not available yet. Mevolve team is working towards providing this feature, and it will be available in the nearest future.
            </Callout.Text>
          </Callout.Root>
        </div>
      </Section>
      <Footer/>
    </>
  );
};

export default Blogs;
