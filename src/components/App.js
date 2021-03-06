import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addItems } from '../redux/sushi'
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    fetch(API)
    .then(r => r.json())
    .then(sushiObjs => {
      
      const mappedSushi = sushiObjs.map((sushi) => {
        return {
          ...sushi,
          isEaten: false
        }
      })
      const action = addItems(mappedSushi)
      dispatch(action)
    })
  }, [dispatch])
  return (
    <div className="app">
      <SushiContainer />
      <Table />
    </div>
  );
}

export default App;
