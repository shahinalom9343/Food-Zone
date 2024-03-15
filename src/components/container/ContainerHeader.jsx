import PropTypes from "prop-types";

const ContainerHeader = (props) => {
  return (
    <div className="lg:px-32 mx-auto mt-2 lg:mt-7 text-center space-y-5">
      <h1 className="text-sm lg:text-3xl font-medium lg:font-bold">
        Our Recipes
      </h1>
      <p className="text-[#150B2B99]">
        Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
        vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum
        mauris aenean neque.{" "}
      </p>
    </div>
  );
};

ContainerHeader.propTypes = {};

export default ContainerHeader;
