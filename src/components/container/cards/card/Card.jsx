import React from "react";
import PropTypes from "prop-types";

const Card = (props) => {
  return (
    <div>
      <div class="card w-96 bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
            class="rounded-xl"
          />
        </figure>
        <div class="card-body items-start space-y-2">
          <h2 class="card-title p-2">Chicken Caesar Salad</h2>
          <p className="border-b-2 w-full">
            Classic Italian pasta dish with savory meat sauce.
          </p>
          <div className="border-b-2 w-full">
            <p>Ingredients: 6</p>
            <div className="text-center">
              <li>500g ground beef 1 onion</li>
              <li>500g ground beef 1 onion</li>
              <li>500g ground beef 1 onion</li>
            </div>
          </div>
          <button class=" bg-[#0BE58A] rounded-3xl text-xl font-medium px-4 py-2 text-black">
            Want to Cook
          </button>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {};

export default Card;
