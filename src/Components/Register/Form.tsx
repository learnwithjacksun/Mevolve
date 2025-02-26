import { Section } from "@radix-ui/themes"
import Steps from "./Steps"
import { FormEvent, useState } from "react";
import PersonalInfo from "./PersonalInfo";
import Likes from "./Likes";
import Final from "./Final";
import { toast } from "sonner";

const Form = () => {
    const [currentStep, setCurrentStep] = useState(1);
    //   Change Steps
  const handleNextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    toast.success("Form Should be Submitted!")
  }
  return (
    <>
    <main className="layout">
        <Section>
            <Steps currentStep={currentStep} setCurrentStep={setCurrentStep}/>

<form onSubmit={handleSubmit} className="mt-6">
{currentStep === 1 && <PersonalInfo handleNextStep={handleNextStep}/>}
{currentStep === 2 && <Likes handleNextStep={handleNextStep} handlePrevStep={handlePrevStep} />}
{currentStep === 3 && <Final/>}
</form>
           
        </Section>
    </main>
    </>
  )
}

export default Form

