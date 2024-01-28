import { useReducer } from "react";

const initialValue = { count: 0 };

type CounterState = {
  count: number;
};

type CounterAction = {
  type: "increment" | "decrement";
  payload?: number;
};

function reducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case "increment":
      return { count: state.count + (action.payload || 0) };
    case "decrement":
      return { count: state.count - (action.payload || 0) };
    default:
      return state;
  }
}
export default function ReducerCounter() {
  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <>
      <h3>Count : {state.count}</h3>
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>
        Decrement
      </button>
    </>
  );
}
