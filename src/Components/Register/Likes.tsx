import { Box, Flex } from "@radix-ui/themes";
import { Input, Select } from "../UI";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { toast } from "sonner";

interface Props {
  handleNextStep: () => void;
  handlePrevStep: () => void;
  form: FormType;
  error: FormType;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  setError: React.Dispatch<React.SetStateAction<FormType>>;
  setForm: React.Dispatch<React.SetStateAction<FormType>>; 
}

const Likes = ({
  handleNextStep,
  handlePrevStep,
  form,
  setForm,
  error,
  handleChange,
  setError,
}: Props) => {
  const OPTIONS = [
    {
      value: "fiction",
      label: "Fiction",
    },
    {
      value: "adventure",
      label: "Adventure",
    },
  ];

  const handleNext = () => {
    if (!form.genre) {
      toast.error("Genre is required!");
      return;
    }
    if (!form.lastBookRead) {
      setError({ ...error, lastBookRead: "Tell us the title please!" });
      return;
    }
    handleNextStep()
  };

  return (
    <Box data-aos="fade-right">
      <h1 className="text-center font-mont font-semibold">Tell us more!</h1>

      <Flex direction={"column"} gap={"2"} className="mt-4">
        <Select
          label="Favorite Genre"
          options={OPTIONS}
          id="genre"
          name="genre"
          value={form.genre}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, genre: e.target.value }))
          }
        />
        <Input
          type="text"
          label="Last Book You Read"
          placeholder="e.g Think and Grow Rich"
          styles="capitalize placeholder:normal-case"
          name="lastBookRead"
          value={form.lastBookRead}
          onChange={handleChange}
          error={error.lastBookRead}
        />
      </Flex>

      <Flex align={"center"} justify={"between"} gap={"4"} className="mt-4">
        <button
          onClick={handlePrevStep}
          type="button"
          className="center bg-green-500/10 text-green-700 border border-green-700 text-sm font-medium w-full h-10 gap-2 rounded-lg font-mont"
        >
          <ArrowLeft size={18} />
          <span>Prev</span>
        </button>
        <button
          onClick={handleNext}
          type="button"
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
