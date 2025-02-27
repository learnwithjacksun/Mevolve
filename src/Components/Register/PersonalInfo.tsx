import { Box, Flex } from "@radix-ui/themes";
import { Input } from "../UI";
import { ArrowRight } from "lucide-react";

interface Props {
  handleNextStep: () => void;
  form: FormType;
  error: FormType;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setError: React.Dispatch<React.SetStateAction<FormType>>;
}

const PersonalInfo = ({
  handleNextStep,
  form,
  error,
  handleChange,
  setError,
}: Props) => {
  const handleNext = () => {
    if (!form.fullname) {
      setError({ ...error, fullname: "Fullname is required!" });
      return;
    }
    if (!form.email) {
      setError({ ...error, email: "Valid E-mail Address is required!" });
      return;
    }
    if (!form.phoneNumber) {
      setError({ ...error, phoneNumber: "Phone Number is required!" });
      return;
    }
    handleNextStep()
  };
  return (
    <Box data-aos="fade-right">
      <h1 className="text-center  font-mont font-semibold">Personal Info</h1>

      <Flex direction={"column"} gap={"2"} className="mt-4">
        <Input
          type="text"
          name="fullname"
          label="Fullname"
          placeholder="e.g Gift Jackson"
          value={form.fullname}
          onChange={handleChange}
          styles="capitalize placeholder:lowercase"
          error={error.fullname}
        />
        <Input
          type="email"
          label="E-mail Address"
          name="email"
          id="email"
          placeholder="e.g giftjackson@gmail.com"
          value={form.email}
          onChange={handleChange}
          styles="lowercase placeholder:lowercase"
          error={error.email}
        />
        <Input
          type="tel"
          label="Phone Number"
          placeholder="e.g +234 XX XXXX XXXX"
          name="phoneNumber"
          value={form.phoneNumber}
          onChange={handleChange}
          error={error.phoneNumber}
        />
      </Flex>

      <Flex align={"center"} justify={"between"} className="mt-4">
        <button
          onClick={handleNext}
          type="button"
          className="center text-sm font-medium bg-green-700 text-white w-full h-10 gap-2 rounded-lg font-mont"
        >
          <span>Next</span>
          <ArrowRight size={18} />
        </button>
      </Flex>
    </Box>
  );
};

export default PersonalInfo;
