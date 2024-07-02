import { E21, E22, E23 } from "../svg/eclips";

const bottomPath = () => {
  return (
    <>
      <div className="">
        <div className="relative flex justify-center items-center">
          <E21 styles={{ position: "absolute" }} />
          <E22 styles={{ position: "absolute" }} />
          <E23 styles={{ position: "absolute" }} />
        </div>
      </div>
    </>
  );
};

export default bottomPath;
