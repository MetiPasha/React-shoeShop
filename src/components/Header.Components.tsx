import { FaBell, FaHeart } from "react-icons/fa";

const Header = () => {
  return (
    <div id="user-name" className="flex items-center  ">
      <img
        src="/assets/Home/pasha.jpg"
        alt="avatar"
        className="w-8 h-8 rounded-full"
      />
      <div>
        <p className="font-medium text-lg text-gray-700">Good Morning 👋</p>
        <p className="text-gray-500">meti pasha</p>
      </div>
      <div id="user-action" className="flex items-center gap-4 ">
        <FaHeart className="text-3xl" />
        <a href="favoritePage.html" className="text-gray-700">
          <FaBell className="text-3xl" />
        </a>
      </div>
    </div>
  );
};

export default Header;
