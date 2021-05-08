interface IProps {
  imageUrl: string;
  isTwoPlaces?: boolean;
  classes?: string;
  serviceTitle: string;
  serviceDesc: string;
}

export default function ServiceCard({
  isTwoPlaces = false,
  imageUrl,
  classes,
  serviceTitle,
  serviceDesc,
}: IProps) {
  return (
    <div className={classes}>
      <img src={imageUrl} alt="" className="h-2/4 w-full object-cover" />

      <div className="p-4">
        <div className="text-2xl my-4 font-bold">{serviceTitle}</div>
        <p>{serviceDesc}</p>
      </div>
    </div>
  );
}
