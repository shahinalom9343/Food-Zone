const PrepareToCook = ({ singleCart }) => {
  const { recipe_name, preparing_time, calories } = singleCart;
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr className=" p-4 text-lg"></tr>
          </thead>
        </table>
      </div>
      <tbody className="bg-base-200 w-full border border-red-400">
        <tr className=" p-4 text-lg">
          <td>{singleCart.recipe_name.slice(0, 15)}</td>
          <td>{singleCart.preparing_time}</td>
          <td>{singleCart.calories}</td>
          <td>
            <button className=" bg-[#0BE58A] rounded-3xl text-lg px-5 py-2 text-black my-5 mr-4">
              Preparing
            </button>
          </td>
        </tr>
      </tbody>
    </div>
  );
};

export default PrepareToCook;
