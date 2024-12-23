import { CiSearch } from "react-icons/ci";

export const Cart = () => {
  return (
    <>
      <header className="flex justify-between px-5 mt-9 ">
        <div className="flex items-center gap-5">
          <img className="size-7" src="./assets/Cart/logo.png" alt="logo" />
          <p className="text-4xl">my Cart</p>
        </div>
        <div className="flex items-center ">
          <CiSearch className="text-3xl" />
        </div>
      </header>
    </>
  );
};

export default Cart;
