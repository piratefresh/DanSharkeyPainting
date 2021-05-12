import React from "react";
import { UseFormRegister } from "react-hook-form";
import { IFormValues } from "./WizardForm";

interface IProps {
  handleNextStep: () => void;
  handlePreviousStep: () => void;
  register: UseFormRegister<IFormValues>;
}

export default function Step2({
  handleNextStep,
  handlePreviousStep,
  register,
}: IProps) {
  const [showTextArea, setShowTextArea] = React.useState<boolean>(false);
  return (
    <div>
      <h2>Your Contact Information: </h2>
      <div className="flex flex-row flex-grow">
        <input
          id="FirstName"
          placeholder="First Name"
          className="border border-gray-400 outline-none p-4  flex-grow"
          {...register("FirstName", { required: true })}
        />
        <input
          id="LastName"
          placeholder="Last Name"
          className="border border-gray-400 outline-none p-4  flex-grow"
          {...register("LastName", { required: true })}
        />
      </div>
      <div className="flex">
        <input
          id="Address"
          placeholder="Address"
          className="border border-gray-400 outline-none p-4 flex-grow"
          {...register("Address", { required: true })}
        />
      </div>
      <div className="flex">
        <input
          id="City"
          placeholder="City"
          className="border border-gray-400 outline-none p-4 flex-grow"
          {...register("City", { required: true })}
        />
      </div>
      <div className="flex flex-row">
        <input
          id="State"
          placeholder="State"
          className="border border-gray-400 outline-none p-4 flex-grow"
          {...register("State", { required: true })}
        />
        <input
          id="PostalCode"
          placeholder="PostalCode"
          className="border border-gray-400 outline-none p-4 flex-grow"
          {...register("PostalCode", { required: true })}
        />
      </div>
      <div>+</div>
      {showTextArea ? (
        <textarea
          id="AddionalComment"
          placeholder="Addional Comment"
          className="border border-gray-400 outline-none p-4 flex-grow"
          {...register("PostalCode", { required: true })}
        />
      ) : null}
      Step 2 <button onClick={() => handlePreviousStep()}>Back</button>
      <button onClick={() => handleNextStep()}>Next</button>
    </div>
  );
}
