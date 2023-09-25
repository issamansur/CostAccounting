import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

const App = () => {
  const costs = [
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

  const addNewCostHandler = (cost) => {
    console.log(cost);
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
