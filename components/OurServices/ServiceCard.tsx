import Image from "next/image";

interface IProps {
  imageUrl: string;
  isTwoPlaces?: boolean;
  classes?: string;
  serviceTitle: string;
  serviceDesc: string;
  hrefUrl?: string;
}

export default function ServiceCard({
  isTwoPlaces = false,
  imageUrl,
  classes,
  serviceTitle,
  serviceDesc,
  hrefUrl,
}: IProps) {
  return (
    <a href={hrefUrl} className={classes}>
      <Image
        layout="responsive"
        width={300}
        height={300}
        src={`/${imageUrl}`}
        alt=""
        className="h-2/4 w-full object-cover rounded-t-xl"
      />

      <div className="p-4">
        <div className="text-lg md:text-2xl my-4 font-bold">{serviceTitle}</div>
        <p>{serviceDesc}</p>
      </div>
    </a>
  );
}
