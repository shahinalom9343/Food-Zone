import PropTypes from "prop-types";

const Sidebars = (props) => {
  return (
    <div className="py-6 border-2 border-[#28282833] rounded-xl mx-auto">
      {/* upper sidebar */}
      <div className="space-y-2 mb-10">
        <h1 className="border-b-2 text-2xl font-semibold text-center">
          Want to cook: 01
        </h1>
        <div class="overflow-x-auto">
          <table class="table">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Title</th>
                <th>Calories</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-base-200 lg:p-4 text-lg">
                <th>1</th>
                <td>Chicken Caesar Salad</td>
                <td>20 minutes</td>
                <td>400 calories</td>
                <button class=" bg-[#0BE58A] rounded-3xl text-lg lg:px-2 py-1 text-black my-5 mr-4">
                  Preparing
                </button>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* lower sidebar */}
      <div className="space-y-2">
        <h1 className="border-b-2 text-2xl font-semibold text-center">
          Currently cooking: 02
        </h1>
        <div class="overflow-x-auto">
          <table class="table">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Title</th>
                <th>Calories</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-base-200 p-4 text-lg">
                <th>1</th>
                <td>Chicken Caesar Salad</td>
                <td>20 minutes</td>
                <td>400 calories</td>
                <button class=" bg-[#0BE58A] rounded-3xl text-lg px-2 py-1 text-black my-5 mr-4">
                  Preparing
                </button>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

Sidebars.propTypes = {};

export default Sidebars;
