import Top from "../animation/topPath";
import Bottom from "../animation/bottomPath";
import Middle from "../animation/middlePath";
import Logo from "../animation/logo";

const animation = () => {
  return (
    <>
      <div className="flex gap-0 flex-col justify-center items-center">
        <div className="flex justify-between h-[60vh] flex-col items-center">
          <Top></Top>

          <div className="relative flex justify-center items-center">
            <div className="absolute top-[-40px]">
              <Middle></Middle>
            </div>
            <Logo></Logo>
          </div>
        </div>
        <div>
          <Bottom></Bottom>
        </div>
      </div>
    </>
  );
};

export default animation;
