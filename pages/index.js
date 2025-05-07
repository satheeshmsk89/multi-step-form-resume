import { useState } from "react";
import Stepper from "../components/Stepper";
import ResumeUpload from "../components/ResumeUpload";
import BasicDetails from "../components/BasicDetails";
import SkillsForm from "../components/SkillsForm";
import EducationForm from "../components/EducationForm";
import Summary from "../components/Summary";
import Completed from "../components/Completed";
import { FormProvider } from "../context/FormContext";
import "@fontsource/inter/index.css";

const steps = [
  "Upload Resume",
  "Basic Information",
  "Skill Set",
  "Education",
  "Summary",
  "Completed"
];

export default function Home() {
  const [step, setStep] = useState(0);

  const nextStep = () => setStep((prev) => Math.min(prev + 1, steps.length - 1));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 0));

  const renderStep = () => {
    switch (step) {
      case 0:
        return <ResumeUpload nextStep={nextStep} />;
      case 1:
        return <BasicDetails nextStep={nextStep} prevStep={prevStep} />;
      case 2:
        return <SkillsForm nextStep={nextStep} prevStep={prevStep} />;
      case 3:
        return <EducationForm nextStep={nextStep} prevStep={prevStep} />;
      case 4:
        return <Summary nextStep={nextStep} prevStep={prevStep} />;
      case 5:
        return <Completed prevStep={prevStep} />;
      default:
        return null;
    }
  };

  return (
    <FormProvider>
      <main className="max-w-6xl mx-auto p-4">
        <Stepper steps={steps} currentStep={step} />
        {renderStep()}
      </main>
    </FormProvider>
  );
}