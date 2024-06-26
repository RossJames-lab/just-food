import React, { Fragment, useState } from "react";
import "./Foods.css";
import FoodOrder from "./FoodOrder";

const Foods = (props) => {
  const [selectedFood, setSelectedFood] = useState(null);

  const handleSelect = (event) => {
    const foodId = parseInt(event.currentTarget.dataset.id);
    setSelectedFood(props.foodItems.find((item) => item.id === foodId));
  };

  return (
    <Fragment>
      {!selectedFood && (
        <Fragment>
          <h4 className="foodTitle">Choose from our Menu</h4>
          <ul className="ulFoods">
            {props.foodItems.map((item) => (
              <li
                key={item.id}
                className="liFoods"
                data-id={item.id}
                onClick={handleSelect}
              >
                <img
                  className="foodImg"
                  src={require(`./images/${item.image}`).default} // Ensure .default is used for require in newer versions of React
                  alt={item.name}
                />
                <div className="foodItem">
                  <p className="foodDesc">{item.desc}</p>
                  <p className="foodPrice">{item.price}$</p>
                </div>
              </li>
            ))}
          </ul>
        </Fragment>
      )}
      {selectedFood && (
  <FoodOrder
    food={selectedFood}
    returnToMenu={() => setSelectedFood(null)}
    updateQuantity={(id, quantity) => props.updateQuantity(id, quantity)}
  />
)}

    </Fragment>
  );
};

export default Foods;
