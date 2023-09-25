import React, { useState } from "react";
import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

const INIT_COSTS = [
  {
    date: new Date(),
    description: 'Холодильник',
    amount: 999.99,
  },
  {
    date: new Date(),
    description: 'MacBook',
    amount: 1254.72,
  },
  {
    date: new Date(),
    description: 'Джинсы',
    amount: 49.99,
  },
];

const App = () => {
  const [costs, setCosts] = useState(INIT_COSTS);

  const addNewCostHandler = (cost) => {
    setCosts(
      (prevCosts) => {
        return [cost, ...prevCosts]
      }
    );
  };

  return (
    <div className="lol">
      <NewCost 
        onAddNewCost={addNewCostHandler}
      />
      <Costs costs={costs} />
    </div>
  );
}

export default App;
