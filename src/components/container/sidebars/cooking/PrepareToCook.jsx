import PropTypes from "prop-types";
const PrepareToCook = ({
  singleCart,
  index,
  handleDelete,
  handlePrepare,
  handleCalories,
}) => {
  const { recipe_name, preparing_time, calories, recipe_id } = singleCart;
  // console.log(singleCart);
  return (
    <div className="bg-base-200 flex justify-around items-center gap-2 px-1">
      <div>
        <p>{index + 1}</p>
      </div>
      <div>
        <p>{singleCart.recipe_name}</p>
      </div>
      <div>
        <p>{singleCart.preparing_time} min</p>
      </div>
      <div>
        <p>{singleCart.calories} Calories</p>
      </div>
      <div>
        <button
          onClick={() => {
            handleDelete(recipe_id);
            handlePrepare(preparing_time);
            handleCalories(calories);
          }}
          className=" bg-[#0BE58A] rounded-3xl text-lg px-4 py-2 text-black my-5"
        >
          Preparing
        </button>
      </div>
    </div>
  );
};
PrepareToCook.propTypes = {
  singleCart: PropTypes.object.isRequired,
  index: PropTypes.number,
  handleDelete: PropTypes.func,
  handlePrepare: PropTypes.func,
  handleCalories: PropTypes.func,
};
export default PrepareToCook;
