import { Box, Flex } from "@radix-ui/themes"
import { Input } from "../UI"
import { ArrowRight } from "lucide-react"

const PersonalInfo = (
    {handleNextStep}:
    {handleNextStep: ()=> void}
) => {
  return (
    <Box>
        <h1 className="text-center font-mont font-semibold">Personal Info</h1>

        <Flex direction={"column"} gap={"2"} className="mt-4">
            <Input type="text" label="Fullname" placeholder="e.g Gift Jackson"/>
            <Input type="email" label="E-mail Address" placeholder="e.g giftjackson@gmail.com"/>
            <Input type="tel" label="Phone Number" placeholder="e.g +234 81 0000 0000"/>
        </Flex>

        <Flex align={"center"} justify={"between"} className="mt-4">
            <button onClick={handleNextStep} className="center text-sm font-medium bg-green-700 text-white w-full h-10 gap-2 rounded-lg font-mont">
                <span>Next</span>
                <ArrowRight size={18}/>
            </button>
        </Flex>
    </Box>
  )
}

export default PersonalInfo