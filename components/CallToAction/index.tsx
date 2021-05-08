type Props = {
  text: string;
  linkHref: string;
};

function CallToAction({ text, linkHref }: Props) {
  return (
    <button
      className="bg-blue-400 text-blackText rounded-full p-4 cursor-pointer font-bold shadow-md"
      style={{ width: "fit-content" }}
    >
      <a href={linkHref}>{text}</a>
    </button>
  );
}

export default CallToAction;
