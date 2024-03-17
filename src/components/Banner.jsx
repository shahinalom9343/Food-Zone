import background from "../images/banner.png";
const Banner = () => {
  return (
    <div className="lg:px-24 mx-auto mt-2 lg:mt-7 mb-3 lg:mb-10">
      <div
        className="hero rounded-3xl"
        style={{
          backgroundImage: `url(${background})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-lg flex flex-col justify-center items-center lg:py-28">
            <h1 className="mb-5 text-3xl font-bold">
              Discover an exceptional cooking class tailored for you!
            </h1>
            <p className="mb-5">
              our classes offer a welcoming and enriching environment where
              passion for food and culinary expertise converge.Please search for
              exploring....
            </p>
            <div className="flex gap-4">
              <button className=" bg-[#0BE58A] rounded-3xl text-lg lg:text-xl font-medium px-3 lg:px-6 py-2 lg:py-3 text-black">
                Explore Now
              </button>
              <button className="text-white outline-2 border-2 border-white rounded-3xl text-lg lg:text-xl font-medium px-3 lg:px-6 py-2 lg:py-3">
                Our feedback
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
