import Link from "next/link";

type Props = {
  containerStyles: string;
  iconStyles: string;
};

const socails = [
  {
    name: <p>GITHUB</p>,
    path: "https://github.com/LEETAESEONG",
  },
  {
    name: <p>NOTION</p>,
    path: "https://speckle-velvet-1e0.notion.site/WiseDeveloper-cc9d6af90dfd464181d417cacd12a771?pvs=74",
  },
  {
    name: <p>TISTORY</p>,
    path: "https://sound-programming.tistory.com/",
  },
];

export default function Socail(params: Props) {
  return (
    <div className={`${params.containerStyles}`}>
      {socails.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={params.iconStyles}>
            {item.name}
          </Link>
        );
      })}
    </div>
  );
}
