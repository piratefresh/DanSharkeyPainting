interface IProps {
  children: React.ReactNode;
  onClick: () => void;
}

const Button = ({ onClick, children }: IProps) => {
  return (
    <button
      className="bg-blue-600 rounded-lg text-white p-2 my-4"
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
};

export default Button;
