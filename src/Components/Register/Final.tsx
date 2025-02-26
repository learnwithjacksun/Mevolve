import { Box , Callout, Flex} from "@radix-ui/themes"
import { RxInfoCircled } from "react-icons/rx"


const Final = () => {
  return (
    <Box>
      <h1 className="text-center font-mont font-semibold">Last Slide! 🎉</h1>

       <Callout.Root variant="surface" color="green" className="mt-4">
            <Callout.Icon>
              <RxInfoCircled />
            </Callout.Icon>
            <Callout.Text className="font-sans">
  You're one step closer to shaping your growth journey! By clicking <b>Submit</b>, you&apos;ll help us tailor a better experience for you.
</Callout.Text>
          </Callout.Root>

          <Flex align={"center"} justify={"between"} className="mt-4">
            <button type="submit" className="center text-sm font-medium bg-green-700 text-white w-full h-10 gap-2 rounded-lg font-mont">
                <span>Submit</span>
            </button>
        </Flex>
      </Box>
  )
}

export default Final