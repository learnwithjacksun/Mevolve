
const Steps = (
    {
        currentStep,
        setCurrentStep,
      }: {
        currentStep: number;
        setCurrentStep: (step: number) => void;
      }
) => {
    const gotoTab = (step: number) => {
        setCurrentStep(step);
      }
  return (
    <>
    <div className="flex items-center justify-center gap-2 md:gap-4 font-mont">
        <div onClick={() => gotoTab(1)} className={`h-8 w-8 cursor-pointer rounded-full center text-sm font-sora font-medium ${currentStep === 1 ? "bg-green-700 text-white" : "bg-gray-300 text-sub"}`}>
          1
        </div>
        <div className="h-1 w-10 bg-gray-200 rounded-full" />
        <div onClick={() => gotoTab(2)} className={`h-8 w-8 cursor-pointer rounded-full center text-sm font-sora font-medium ${currentStep === 2 ? "bg-green-700 text-white" : "bg-gray-300 text-sub"}`}>
          2
        </div>
        <div className="h-1 w-10 bg-gray-200 rounded-full" />
        <div onClick={() => gotoTab(3)} className={`h-8 w-8 cursor-pointer rounded-full  center text-sm font-sora font-medium ${currentStep === 3 ? "bg-green-700 text-white" : "bg-gray-300 text-sub"}`}>
          3
        </div>
        
      </div>
    </>
  )
}

export default Steps