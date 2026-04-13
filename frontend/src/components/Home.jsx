import { useContext } from "react";
import { counterContextObject } from "../provider/createprovider";

function Home() {
  const { counter, changeCounter } = useContext(counterContextObject);

  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh]">
      <h1 className="text-5xl font-light text-zinc-900 mb-8 tracking-tight">
        Counter: <span className="font-medium">{counter}</span>
      </h1>
      <button
        onClick={changeCounter}
        className="px-6 py-3 bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 hover:-translate-y-0.5 transition-all shadow-sm font-medium"
      >
        Change Count
      </button>
    </div>
  );
}

export default Home;


