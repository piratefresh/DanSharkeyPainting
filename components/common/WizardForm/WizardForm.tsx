import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import "./WizardForm.module.css";

export interface IFormValues {
  PropertyType: string;
  PaintType: string;
  FirstName: string;
  LastName: number;
  Address: string;
  PostalCode: string;
  City: string;
  State: string;
  Email: string;
  Phone: string;
  Comments: string;
}

export default function WziardForm() {
  const [currentStep, setCurrentStep] = React.useState<number>(1);
  const { register, control, handleSubmit } = useForm<IFormValues>();
  const onSubmit = (data: IFormValues) => {
    console.log("data", data);
    alert(JSON.stringify(data, null));
  };
  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };
  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };
  return (
    <div className="h-screen">
      <form className="wizardform-container" onSubmit={handleSubmit(onSubmit)}>
        {currentStep === 1 ? (
          <Step1 handleNextStep={handleNextStep} register={register} />
        ) : null}
        {currentStep === 2 ? (
          <Step2
            handleNextStep={handleNextStep}
            handlePreviousStep={handlePreviousStep}
            register={register}
          />
        ) : null}
        {currentStep === 3 ? (
          <Step3 handlePreviousStep={handlePreviousStep} />
        ) : null}

        <button>Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  );
}
