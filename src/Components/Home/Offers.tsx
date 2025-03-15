import { Box, Grid, Section } from "@radix-ui/themes";


const Offers = () => {
    const offers = [
        {
            id: 1,
            title: "Curated Reading Plans",
            content: "Personalized book recommendations based on your goals and interests."
        },
        {
            id: 2,
            title: "Weekly Book Discussions",
            content: "Engaging discussions to deepen your understanding and application of each book."
        },
        {
            id: 3,
            title: "Structured Learning & Accountability",
            content: "Access weekly insights, guided discussions, and practical strategies to ensure real-world application of your reading."
        },
        {
            id: 4,
            title: "Quarterly Expert Series",
            content: "Learn from industry leaders, authors, and professionals who break down complex ideas into actionable knowledge."
        },
        {
            id: 5,
            title: "Flexibility & Progress Tracking",
            content: "Move between reading tracks as your needs evolve, ensuring that your reading journey always aligns with your aspirations."
        },
        {
            id: 6,
            title: "A Community of Growth-Driven Readers",
            content: "Connect with a community of like-minded individuals who are committed to personal growth and self-mastery."
        }
    ]
  return(
    <>
    <Section className="bg-green-500/5" id="offers">
      <div data-aos="fade-right" className="text-center relative">
        <div className="absolute h-1 -bottom-5 left-1/2 -translate-x-1/2 rounded-full w-[100px] bg-green-700" />
        <h2 className="text-2xl md:text-3xl font-mont">
          What <span className="font-pac text-green-700">We Offer</span>
        </h2>
        <p className="font-sans text-gray-500">
          At MEvolve, we offer a range of benefits to help you achieve your goals.
            </p>
      </div>
      <Section className="main">
        <Grid columns={{ initial: "1", md: "2", lg: "3" }} gap={"6"} width={"auto"}>
          {offers.map((offer) => (
            <Box key={offer.id} data-aos="fade-up" className="border border-green-700 bg-green-500/10 rounded-lg p-4">
              <h3 className="text-lg font-mont font-medium">{offer.title}</h3>
              <p className="text-sm font-sans text-gray-500">{offer.content}</p>
            </Box>
          ))}
        </Grid>
      </Section>
    </Section>
    </>
  );
};

export default Offers;
