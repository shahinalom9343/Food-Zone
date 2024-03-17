import PropTypes from "prop-types";
import PrepareToCook from "./cooking/PrepareToCook";
import Cooking from "./cooking/Cooking";
const Sidebars = ({
  carts,
  handleDelete,
  handlePrepare,
  preparationTime,
  handleCalories,
  calories,
}) => {
  return (
    <div className="py-6 border-2 border-[#28282833] rounded-xl">
      {/* upper sidebar */}
      <div className="space-y-2 mb-4">
        <h1 className="border-b-2 text-2xl font-semibold text-center">
          Want to cook: {carts.length}
        </h1>
        <div className=" flex items-center gap-3 lg:gap-9 px-1 bg-fuchsia-100">
          <div>
            <p></p>
          </div>
          <div>
            <p>Name</p>
          </div>
          <div>
            <p>Time</p>
          </div>
          <div>
            <p>Calories</p>
          </div>
          <div></div>
        </div>
        <div className="flex justify-center items-center ">
          <div></div>
        </div>
        {carts.map((singleCart, index) => (
          <PrepareToCook
            key={singleCart.recipe_id}
            singleCart={singleCart}
            index={index}
            handleDelete={handleDelete}
            handlePrepare={handlePrepare}
            handleCalories={handleCalories}
          ></PrepareToCook>
        ))}
        <h1 className="border-b-2 text-2xl font-semibold text-center">
          Currently cooking: 0
        </h1>
        <div className=" flex items-center gap-3 lg:gap-9 px-1 bg-fuchsia-100">
          <div>
            <p></p>
          </div>
          <div>
            <p>Name</p>
          </div>
          <div>
            <p>Time</p>
          </div>
          <div>
            <p>Calories</p>
          </div>
          <div></div>
        </div>
        <Cooking></Cooking>
      </div>
      <div className="flex justify-end gap-6 mr-2">
        <p>
          Total Time = <br /> <span>{preparationTime} min</span>
        </p>
        <p>
          Total Calories = <br /> <span>{calories} Calories</span>
        </p>
      </div>
    </div>
  );
};

Sidebars.propTypes = {};

export default Sidebars;
