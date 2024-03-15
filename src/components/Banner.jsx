import PropTypes from "prop-types";
const Banner = (props) => {
  return (
    <div className="lg:px-32 mx-auto mt-2 lg:mt-7 mb-3 lg:mb-10 banner-image">
      <div className="hero rounded-3xl">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Discover an exceptional cooking class tailored for you!
            </h1>
            <p className="mb-5">
              Learn and Master Basic Programming, Data Structures, Algorithm,
              OOP, Database and solve 500+ coding problems to become an
              exceptionally well world-class Programmer.
            </p>
            <div className="flex gap-4">
              <button className=" bg-[#0BE58A] rounded-3xl text-xl font-medium px-6 py-3 text-black">
                Explore Now
              </button>
              <button className="text-white outline-2 border-2 border-white rounded-3xl text-xl font-medium px-6 py-3 text-black">
                Our feedback
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Banner.propTypes = {};

export default Banner;
