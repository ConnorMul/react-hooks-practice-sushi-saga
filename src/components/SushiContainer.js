import React from "react";
import { useSelector } from "react-redux";
import Sushi from './Sushi'
import MoreButton from "./MoreButton";

function SushiContainer() {

  const currentIndex = useSelector(state => state.sushis.currentIndex)
  const sushis = useSelector(state => state.sushis.items)
    .map(sushi => <Sushi key={sushi.id} sushi={sushi} />)
    .slice(currentIndex, currentIndex + 4)
  return (
    <div className="belt">
      {sushis}
      <MoreButton />
    </div>
  );
}

export default SushiContainer;
