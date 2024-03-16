import PropTypes from "prop-types";
import Card from "./card/Card";
import { useEffect, useState } from "react";
const Cards = ({ handleAddToCart }) => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("recipe.json")
      .then((res) => res.json())
      // .then((data) => console.log(data));
      .then((data) => setCards(data));
  }, []);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {cards.map((card) => (
        <Card
          key={card.recipe_id}
          card={card}
          handleAddToCart={handleAddToCart}
        ></Card>
      ))}
    </div>
  );
};

Cards.propTypes = {};

export default Cards;
