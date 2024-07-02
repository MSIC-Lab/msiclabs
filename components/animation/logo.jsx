import { Logoback } from "../svg/eclips";
import Image from "next/image";
import msic from "@/public/msiclogo.png";

const logo = () => {
  return (
    <div className="relative flex justify-center items-center">
      <div className="absolute ">
        <Logoback></Logoback>
      </div>
      <Image
        alt="msic softaware solutions"
        src={msic}
        width={40}
        className="relative"
        height={40}
      ></Image>
    </div>
  );
};

export default logo;
