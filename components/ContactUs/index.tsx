import { useForm, Controller, Path, UseFormRegister } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import FormInput from "../Form/FormInput";
import FormTextArea from "../Form/FormTextArea";
import Header from "../common/Header";

type TData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

interface IFormData {
  ame: string;
  email: string;
  phone: string;
  message: string;
}

interface IFormValues {
  Name: string;
  Email: string;
  Phone: string;
  Age: number;
  Message: string;
}

type InputProps = {
  label: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  required: boolean;
};

interface IProps {
  hasTitle?: boolean;
}

function ContactUs({ hasTitle = false }: IProps) {
  const {
    register,
    formState: { errors },
    control,
    handleSubmit,
  } = useForm<IFormValues>({ mode: "onChange" });

  const handleFormSubmit = (data) => {
    alert(JSON.stringify(data, null));
  };

  const onSubmit = (data: IFormValues) => {
    alert(JSON.stringify(data, null));
    fetch("/api/sendEmailContact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
      }
    });
  };
  console.log(errors);
  return (
    <>
      <div className="flex flex-col w-full">
        {hasTitle ? (
          <Header
            title="Contact Us"
            subtitle="We will contact you for more information"
          />
        ) : null}
        <form
          className="flex flex-col w-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col w-full sm:flex-row">
            <div className="flex flex-col w-full">
              <FormInput label="Name" {...register("Name")} />

              <FormInput label="Email" {...register("Email")} />

              <FormInput label="Phone" {...register("Phone")} />
            </div>
            <div className="flex flex-col w-full sm:ml-4">
              <FormTextArea label="Message" {...register("Message")} />
            </div>
          </div>

          <button
            className="font-bold bg-blue-400 text-white rounded-md p-2"
            style={{ width: "140px", margin: "1rem auto" }}
            type="submit"
          >
            Send Message
          </button>
        </form>
        {/* <DevTool control={control} /> */}
      </div>
    </>
  );
}

export default ContactUs;
