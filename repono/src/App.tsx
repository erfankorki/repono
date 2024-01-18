import useSlice from "./useSlice";

function App() {
  const { counter, setCounter } = useSlice();
  return (
    <main>
      <h1>REPONO</h1>
      <p>{counter}</p>
      <button
        onClick={() => {
          setCounter((counter) => counter + 1);
        }}
      >
        INCREMENT
      </button>
    </main>
  );
}

export default App;
