import React from "react";
import { UseFormRegister } from "react-hook-form";
import s from "./WizardForm.module.css";
import { IFormValues } from "./WizardForm";

interface IProps {
  handleNextStep: () => void;
  register: UseFormRegister<IFormValues>;
}

export default function Step1({ handleNextStep, register }: IProps) {
  return (
    <div className="wizardForm">
      <h2>What Type of Property?</h2>
      <div className="flex flex-row wizard-radio">
        <input
          type="radio"
          id="radioHome"
          value="Home"
          {...register("PropertyType", { required: true })}
        />
        <label htmlFor="radioHome">Home</label>

        <input
          type="radio"
          id="radioBusiness"
          value="Business"
          {...register("PropertyType", { required: true })}
        />
        <label htmlFor="radioBusiness">Business</label>
      </div>
      <h2>What would you like to paint?</h2>
      <div className="flex flex-row  wizard-radio">
        <input
          type="radio"
          id="radioExterior"
          value="Exterior"
          {...register("PaintType", { required: true })}
        />
        <label className={s.label} htmlFor="radioExterior">
          Exterior
        </label>

        <input
          type="radio"
          id="radioInterior"
          value="Interior"
          {...register("PaintType", { required: true })}
        />
        <label className={s.label} htmlFor="radioInterior">
          Interior
        </label>

        <input
          type="radio"
          id="radioInterior"
          value="Interior"
          {...register("PaintType", { required: true })}
        />
        <label className={s.label} htmlFor="radioInterior">
          Both
        </label>
      </div>
      Step 1 <button onClick={() => handleNextStep()}>Next</button>
    </div>
  );
}
