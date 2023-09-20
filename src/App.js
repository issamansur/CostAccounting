import Costs from "./components/Costs"

function App() {
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

  return (
    <div className="lol">
      <h1>Реакт</h1>
      <Costs costs={costs} />
    </div>
  );
}

export default App;
