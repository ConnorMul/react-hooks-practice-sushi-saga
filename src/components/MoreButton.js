import React from "react";
import { useDispatch } from "react-redux";
import { incrementCurrentIndex } from '../redux/sushi'

function MoreButton() {

  const dispatch = useDispatch()
  // const currentIndex = useSelector(state => state.sushis.currentIndex)
  
  function handleClick() {
    const action = incrementCurrentIndex()

    dispatch(action)
  }




  return <button onClick={handleClick}>More sushi!</button>;
}

export default MoreButton;
