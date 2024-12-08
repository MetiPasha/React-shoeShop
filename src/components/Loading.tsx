import { RingLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex flex-col items-center gap-36 justify-center  border-2 p-2 bg-gray-200 ">
      <img
        className="text-3xl font-semibold mt-[15rem]"
        src="./assets/shoea.png"
        alt="PIC"
      />
      <RingLoader />
    </div>
  );
};

export default Loading;
