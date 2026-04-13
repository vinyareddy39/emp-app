import { useContext } from "react";
import { counterContextObject } from "../provider/createprovider";

function Home() {
  const { counter, changeCounter } = useContext(counterContextObject);

  return (
    <div className="text-center">
      <h1 className="text-5xl mb-5">Counter: {counter}</h1>
      <button
        onClick={changeCounter}
        className="p-4 bg-amber-400 rounded-xl"
      >
        Change Count
      </button>
    </div>
  );
}

export default Home;


