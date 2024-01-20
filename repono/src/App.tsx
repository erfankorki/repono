import useSlice from "./useSlice";

const StateContainer = () => {
  const { counter } = useSlice();
  return <p>{counter}</p>;
};

const StateUpdater = () => {
  const { setCounter } = useSlice();
  return (
    <button
      onClick={() => {
        setCounter(20);
      }}
    >
      INCREMENT
    </button>
  );
};
function App() {
  return (
    <main>
      <h1>REPONO</h1>
      <StateContainer />
      <StateUpdater />
    </main>
  );
}

export default App;
