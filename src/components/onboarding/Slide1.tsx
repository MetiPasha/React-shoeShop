import { useNavigate } from "react-router-dom";

const Slide1 = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen mx-auto w-[25rem] bg-gray-300">
      <div className="w-full">
        <img
          src="/assets/page1.svg"
          alt=""
          className="w-full h-[30rem] object-cover"
        />
      </div>
      <div className="flex flex-col items-center mt-4 p-2 ">
        <p className="text-lg ">We provide high quality just for you</p>
        <img src="/assets/dash1.svg" alt="" className="w-36 mt-8" />
        <button
          onClick={() => navigate("/slide2")}
          className="mt-20 w-full p-2 rounded-full bg-black text-white text-lg"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Slide1;
