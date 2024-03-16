import React from "react";

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
            className="rounded-xl h-48 w-11/12"
          />
        </figure>
        <div className="card-body items-start space-y-1">
          <h2 className="card-title p-2">{recipe_name}</h2>
          <p className="border-b-2 w-full">{short_description}</p>
          <div className="border-b-2 w-full">
            <p>Ingredients: {ingredients.map((items) => items.length)}</p>
            <div className="text-center">
              <li>500g ground beef 1 onion</li>
              <li>500g ground beef 1 onion</li>
              <li>500g ground beef 1 onion</li>
            </div>
          </div>
          <div className="flex gap-10">
            <div className="flex justify-center items-center gap-2">
              <span>{preparing_time} minutes</span>
            </div>
            <div className="flex justify-center items-center gap-2">
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

export default Card;
