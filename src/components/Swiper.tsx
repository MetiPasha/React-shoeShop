// import back from  '../public/assets/shoes.svg'
const Swiper = () => {
  return (
    <div
      className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 text-center"
      style={{
        backgroundImage: "url('../../public/assets/shoes.svg'); height: 2600px",
      }}
    >
      <div
        className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
        // style="background-color: rgba(0, 0, 0, 0.6)"
      >
        {/* <div className="flex h-full items-center justify-center"> */}
        <div className="welcome-text">
          <h3>Welcome to 👋</h3>
          <h1>Shoea</h1>
          <p>
            The best sneakers & shoes e-commerse app of the century for your
            fashion needs!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Swiper;
