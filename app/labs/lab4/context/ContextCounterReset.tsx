import { useCounterContext } from "./CounterContext";

export default function ContextCounterReset() {
    const { count, setCount } = useCounterContext();
    <div id="wd-context-counter-reset">
       <button
        type="button"
        onClick={() => setCount(7)}
        id="wd-context-up-click"
        className="me-2 rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Reset
      </button>
    </div>
}