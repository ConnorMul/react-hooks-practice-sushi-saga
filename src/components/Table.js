import React from "react";
import { useSelector } from "react-redux";

function Table() {

  const funds = useSelector(state => state.user.funds)
  const plates = useSelector(state => state.sushis.items.filter(sushi => sushi.isEaten === true))
  // renders an empty plate for every element in the array
  const emptyPlates = plates.map((_, index) => (
    <div key ={index} className="empty-plate" style={{ top: -7 * index }} />
  ));

  return (
    <>
      <h1 className="remaining">
        You have: ${funds} remaining!
      </h1>
      <div className="table">
        <div className="stack">{emptyPlates}</div>
      </div>
    </>
  );
}

export default Table;
