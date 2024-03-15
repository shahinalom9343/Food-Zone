import PropTypes from "prop-types";
import Card from "./card/Card";
const Cards = (props) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </div>
  );
};

Cards.propTypes = {};

export default Cards;
