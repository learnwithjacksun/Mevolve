import { Box, Flex } from "@radix-ui/themes";
import { Input, Select } from "../UI";
import { ArrowLeft, ArrowRight } from "lucide-react";
const Likes = ({
  handleNextStep,
  handlePrevStep,
}: {
  handleNextStep: () => void;
  handlePrevStep: () => void;
}) => {
  return (
    <Box>
      <h1 className="text-center font-mont font-semibold">Tell us more!</h1>

      <Flex direction={"column"} gap={"2"} className="mt-4">
        <Select
          label="Favorite Genre"
          options={[
            {
              value: "fiction",
              label: "Fiction",
            },
            {
              value: "adventure",
              label: "Adventure",
            },
          ]}
        />
        <Input
          type="text"
          label="Last Book You Read"
          placeholder="e.g Think and Grow Rich"
        />
      </Flex>

      <Flex align={"center"} justify={"between"} gap={"4"} className="mt-4">
        <button
          onClick={handlePrevStep}
          className="center bg-green-500/10 text-green-700 border border-green-700 text-sm font-medium w-full h-10 gap-2 rounded-lg font-mont"
        >
          <ArrowLeft size={18} />
          <span>Prev</span>
        </button>
        <button
          onClick={handleNextStep}
          className="center bg-green-700 text-white w-full text-sm font-medium h-10 gap-2 rounded-lg font-mont"
        >
          <span>Next</span>
          <ArrowRight size={18} />
        </button>
      </Flex>
    </Box>
  );
};

export default Likes;
