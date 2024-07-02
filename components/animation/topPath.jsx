import { V29, V25, V26, V27, V28, V30 } from "../svg/vector";
import Stack from "./tech";

const topPath = () => {
  return (
    <>
      <div className="w-screen flex justify-center items-center flex-col ">
        <div className="md:w-[60%] w-[95%]">
          <Stack></Stack>
        </div>
        <div className="relative flex justify-center">
          <div className="absolute top-0  flex">
            {/* <V28 /> */}
            <V29 />
            <V30 />
            <V27 />
            <V26 />
            {/* <V25 /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default topPath;
