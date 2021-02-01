import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { eatSushi } from "../redux/sushi";

function Sushi({ sushi }) {

  const dispatch = useDispatch()

  function handleClick() {
    const action = eatSushi(sushi)

    dispatch(action)
  }
  
  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick}>
        
        {sushi.isEaten ? null : (
          <img
            src={sushi.img_url}
            alt={sushi.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
