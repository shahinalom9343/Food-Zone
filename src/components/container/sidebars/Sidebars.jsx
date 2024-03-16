import PropTypes from "prop-types";
import PrepareToCook from "./cooking/PrepareToCook";
import Cooking from "./cooking/Cooking";
import { useState } from "react";
const Sidebars = ({ carts, handleDelete }) => {
  const [preparing_time, setPreparing_time] = useState(0);
  return (
    <div className="py-6 border-2 border-[#28282833] rounded-xl">
      {/* upper sidebar */}
      <div className="space-y-2 mb-4">
        <h1 className="border-b-2 text-2xl font-semibold text-center">
          Want to cook: {carts.length}
        </h1>
        <div className="flex justify-center items-center ">
          <div></div>
        </div>
        {carts.map((singleCart, index) => (
          <PrepareToCook
            key={singleCart.recipe_id}
            singleCart={singleCart}
            index={index}
            handleDelete={handleDelete}
          ></PrepareToCook>
        ))}
        <Cooking></Cooking>
      </div>
      <div className="flex justify-end gap-6 mr-2">
        <p>
          Total Time = <br /> <span>30 min</span>
        </p>
        <p>
          Total Calories = <br /> <span>600 Calories</span>
        </p>
      </div>
    </div>
  );
};

Sidebars.propTypes = {};

export default Sidebars;
