import { Footer, Header } from "@/Components/Home";
import {Section } from "@radix-ui/themes";
import { BookOpenText } from "lucide-react";

const Blogs = () => {
  return (
    <>
      <div className="hero-container text-white center">
        <Header />
        <div data-aos="fade-up" className="main font-sans text-center space-y-4 md:w-[500px] w-full mx-auto">
          <div className="mb-10 space-y-4">
            <h1 className="font-mont font-bold text-4xl md:text-5xl">
             Explore Our Blogs
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
        <div data-aos="fade-up" className="w-[90%] md:w-[500px] mx-auto border border-gray-300 p-4 rounded-xl">
            <div className="h-20 w-20 mx-auto rounded-full bg-yellow-500/10 text-yellow-500 center">
            <BookOpenText size={30}/>
            </div>
            <div className="text-center mt-4">
                <h1 className="text-2xl font-mont font-semibold text-[#444]">Coming Soon!</h1>
                <p className="text-sm font-sans text-gray-500"> This feature is not available yet. Mevolve team is working towards providing this feature, and it will be available in the nearest future.</p>
            </div>
        
        </div>
      </Section>
      <Footer/>
    </>
  );
};

export default Blogs;
