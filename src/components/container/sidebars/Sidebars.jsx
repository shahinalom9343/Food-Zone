import PropTypes from "prop-types";
import PrepareToCook from "./cooking/PrepareToCook";

const Sidebars = ({ carts }) => {
  return (
    <div className="py-6 border-2 border-[#28282833] rounded-xl mx-auto">
      {/* upper sidebar */}
      <div className="space-y-2 mb-4 ">
        <h1 className="border-b-2 text-2xl font-semibold text-center">
          Want to cook: {carts.length}
        </h1>
        <div className="flex justify-center items-center ">
          <div></div>
        </div>
        {carts.map((singleCart) => (
          <PrepareToCook singleCart={singleCart}></PrepareToCook>
        ))}
      </div>
      {/* lower sidebar */}
      <div className="space-y-2 mb-4 ">
        <h1 className="border-b-2 text-2xl font-semibold text-center">
          Currently cooking: 02
        </h1>
        <div className="flex justify-center items-center bg-base-200">
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Title</th>
                  <th>Calories</th>
                </tr>
              </thead>
              <tbody>
                <tr className=" p-4 text-lg">
                  <th>1</th>
                  <td>Chicken Caesar Salad</td>
                  <td>20 minutes</td>
                  <td>400 calories</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <button className=" bg-[#0BE58A] rounded-3xl text-lg px-5 py-2 text-black my-5 mr-4">
              Preparing
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-end gap-6 mr-4">
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
