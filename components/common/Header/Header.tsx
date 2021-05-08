interface IProps {
  title: string;
  subtitle: string;
}

export default function Header({ title, subtitle }: IProps) {
  return (
    <div className="my-8 flex flex-col items-center">
      <div className="text-4xl font-bold text-blue-400">{title}</div>
      <p className="">{subtitle}</p>
    </div>
  );
}
