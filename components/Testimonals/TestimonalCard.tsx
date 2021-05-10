interface IProps {
  children: React.ReactNode;
}

export default function TestimonalCard({ children }: IProps) {
  return (
    <div
      className="flex flex-col items-center p-8 self-start text-lg"
      style={{ backgroundColor: "#f0eae8" }}
    >
      {children}
    </div>
  );
}
