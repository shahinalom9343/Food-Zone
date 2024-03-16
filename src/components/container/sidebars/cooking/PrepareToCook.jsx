const PrepareToCook = ({ singleCart, index, handleDelete }) => {
  const { recipe_name, preparing_time, calories, recipe_id } = singleCart;
  return (
    <div>
      <div className="bg-base-200 w-full text-lg flex justify-around items-center">
        <p>{index + 1}</p>
        <p>{singleCart.recipe_name.slice(0, 15)}</p>
        <p>{singleCart.preparing_time}</p>
        <p>{singleCart.calories}</p>
        <div>
          <button
            onClick={() => handleDelete(singleCart.recipe_id)}
            className=" bg-[#0BE58A] rounded-3xl text-lg px-5 py-2 text-black my-5 mr-4"
          >
            Preparing
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrepareToCook;
