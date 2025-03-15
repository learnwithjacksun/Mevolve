import { Box, Grid, Section } from "@radix-ui/themes";
const Values = () => {
    const values = [
        {
            id: 1,
            title: " Intentionality ",
            content: "Every book we read serves a purpose—whether it&apos;s for mindset shifts, career growth, or financial mastery."
        },
        {
          id: 2,
          title: "Mastery ",
          content: "Reading is only the beginning. We focus on application and mastery of knowledge."
        },
        {
          id: 3,
          title: "Growth & Evolution ",
          content: "Your goals evolve. So does your reading journey. MEvolve is built for continuous transformation."
        },
        {
          id: 4,
          title: "Leadership & Influence ",
          content: "We don’t just consume information—we use it to lead, inspire, and make an impact."
        },
        {
          id: 5,
          title: " Community & Accountability",
          content: "Growth is best achieved when you surround yourself with the right people."
        }
        ,{
          id: 6,
          title: "Transformation",
          content: "Knowledge alone is not power—applied knowledge is. Every book read in MEvolve is a tool for change."
        }

    ]
  return (
    <>
    <Section className="main" id="about">
        <div data-aos="fade-right" className="text-center relative">
          <div className="absolute h-1 -bottom-5 left-1/2 -translate-x-1/2 rounded-full w-[100px] bg-green-700" />
          <h2 className="text-2xl md:text-3xl font-mont">
            Our <span className="font-pac text-green-700">Values</span>
          </h2>
          <p className="font-sans text-gray-500">
            Our values are the foundation of our community.
          </p>
        </div>
        <Section>
          <Grid columns={{ initial: "1", md: "2", lg: "3" }} gap={"6"} width={"auto"}>
            {values.map((value) => (
              <Box key={value.id} data-aos="fade-up" className="border border-gray-300 rounded-lg p-4">
                <div className="bg-green-700 text-white font-mont text-xl font-bold mb-4 rounded-full w-10 h-10 flex items-center justify-center">
                  {value.id}
                </div>
                <h3 className="text-lg font-mont font-medium">{value.title}</h3>
                <p className="text-sm font-sans text-gray-500">{value.content}</p>
              </Box>
            ))}
          </Grid>
        </Section>
        </Section>
    </>
  )
}

export default Values