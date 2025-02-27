import { Box, Callout, Flex } from "@radix-ui/themes";
import { ArrowLeft } from "lucide-react";
import { RxInfoCircled } from "react-icons/rx";

const Final = ({ handlePrevStep }: { handlePrevStep: () => void }) => {
  return (
    <Box data-aos="fade-right">
      <h1 className="text-center font-mont font-semibold">Last Slide! 🎉</h1>
      <p className="text-center font-sans text-sm text-gray-500 mt-4">
      Join a movement where knowledge meets action, and books shape your future.
      </p>

      <Callout.Root variant="surface" color="green" className="mt-4">
        <Callout.Icon>
          <RxInfoCircled />
        </Callout.Icon>
        <Callout.Text className="font-sans">
          You're one step closer to shaping your growth journey! By clicking{" "}
          <b>Submit</b>, you&apos;ll help us tailor a better experience for you.
        </Callout.Text>
      </Callout.Root>

     
      <Flex align={"center"} justify={"between"} gap={"4"} className="mt-4">
        <button
          onClick={handlePrevStep}
          className="center bg-green-500/10 text-green-700 border border-green-700 text-sm font-medium w-full h-10 gap-2 rounded-lg font-mont"
        >
          <ArrowLeft size={18} />
          <span>Prev</span>
        </button>
        <button
          type="submit"
          className="center text-sm font-medium bg-green-700 text-white w-full h-10 gap-2 rounded-lg font-mont"
        >
          <span>Submit</span>
        </button>
      </Flex>
    </Box>
  );
};

export default Final;
