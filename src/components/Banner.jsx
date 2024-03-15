import PropTypes from "prop-types";
import banner from "../images/banner.png";
const Banner = (props) => {
  return (
    <div className="lg:px-32 mx-auto mt-2 lg:mt-7 mb-3 lg:mb-10 ">
      <div class="hero rounded-3xl">
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold">
              Discover an exceptional cooking class tailored for you!
            </h1>
            <p class="mb-5">
              Learn and Master Basic Programming, Data Structures, Algorithm,
              OOP, Database and solve 500+ coding problems to become an
              exceptionally well world-class Programmer.
            </p>
            <div className="space-x-6">
              <button class=" bg-[#0BE58A] rounded-3xl text-xl font-medium px-6 py-3 text-black">
                Explore Now
              </button>
              <button class="text-white outline-2 border-2 border-white rounded-3xl text-xl font-medium px-6 py-3 text-black">
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
