const PrepareToCook = ({ singleCart, index, handleDelete }) => {
  const { recipe_name, preparing_time, calories, recipe_id } = singleCart;
  return (
    <div className="bg-base-200 flex justify-around items-center gap-2 px-1">
      <div>
        <p>{index + 1}</p>
      </div>
      <div>
        <p>{singleCart.recipe_name.slice(0, 15)}</p>
      </div>
      <div>
        <p>{singleCart.preparing_time} min</p>
      </div>
      <div>
        <p>{singleCart.calories} Calories</p>
      </div>
      <div>
        <button
          onClick={() =>
            handleDelete(singleCart.recipe_id, preparing_time, calories)
          }
          className=" bg-[#0BE58A] rounded-3xl text-lg px-4 py-2 text-black my-5"
        >
          Preparing
        </button>
      </div>
    </div>
  );
};

export default PrepareToCook;
