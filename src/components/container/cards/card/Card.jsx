import PropTypes from "prop-types";
const Card = ({ card, handleAddToCart }) => {
  const {
    recipe_image,
    recipe_name,
    short_description,
    preparing_time,
    calories,
    ingredients,
  } = card;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl border-2 border-[#28282833]">
        <figure className="px-4 pt-4">
          <img
            src={recipe_image}
            alt="Recipe"
            className="rounded-xl h-48 w-5/6"
          />
        </figure>
        <div className="card-body items-start space-y-1">
          <h2 className="card-title p-2">{recipe_name}</h2>
          <p className="border-b-2 w-full">{short_description}</p>
          <div className="border-b-2 w-full">
            <p>Ingredients: {ingredients.length}</p>
            <div className="text-start text-[#878787] pl-6">
              {ingredients.map((item) => (
                <li>{item}</li>
              ))}
            </div>
          </div>
          <div className="flex gap-10">
            <div className="flex justify-center items-center gap-2">
              <svg
                width="1.000000"
                height="6.000000"
                viewBox="0 0 1 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <desc>Created with Pixso.</desc>
                <defs />
                <path
                  id="Vector"
                  d="M0 0L0 "
                  stroke="#282828"
                  strokeOpacity="0.800000"
                  strokeWidth="1.500000"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
              </svg>
              <span>{preparing_time} minutes</span>
            </div>
            <div className="flex justify-center items-center gap-2">
              <svg
                width="13.000000"
                height="18.000000"
                viewBox="0 0 13 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <desc>Created with Pixso.</desc>
                <defs />
                <path
                  id="Vector"
                  d="M5 0C5 3.03 3.22 4.74 2 6C0.77 7.25 0 9.24 0 11C0 12.59 0.63 14.11 1.75 15.24C2.88 16.36 4.4 17 6 17C7.59 17 9.11 16.36 10.24 15.24C11.36 14.11 12 12.59 12 11C12 9.46 10.94 7.06 10 6C8.21 9 7.2 9 6 8C8 5.04 6 1 5 0Z"
                  stroke="#282828"
                  strokeOpacity="0.800000"
                  strokeWidth="1.500000"
                  strokeLinejoin="round"
                />
              </svg>

              <span>{calories} Calories</span>
            </div>
          </div>
          <button
            onClick={() => handleAddToCart(card)}
            className=" bg-[#0BE58A] rounded-3xl text-lg font-medium px-4 py-2 text-black"
          >
            Want to Cook
          </button>
        </div>
      </div>
    </div>
  );
};
Card.propTypes = {
  card: PropTypes.object.isRequired,
  handleAddToCart: PropTypes.func,
};
export default Card;
