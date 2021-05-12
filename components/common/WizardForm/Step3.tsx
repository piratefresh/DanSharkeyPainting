interface IProps {
  handleSubmit?: () => void;
  handlePreviousStep: () => void;
}

export default function Step3({ handleSubmit, handlePreviousStep }: IProps) {
  return (
    <div>
      Step 3 <button onClick={() => handlePreviousStep()}>Back</button>
      <button type="submit">Submit</button>
    </div>
  );
}
