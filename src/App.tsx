import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useState } from "react";
import {
  StateType,
  decrement,
  increment,
  incrementByValue,
} from "./components/state/store/store";
// import Box from "./components/Box";
// import Button from "./components/Button";
// import Greet from "./components/Greet";
// import Input from "./components/Input";
// import Person from "./components/Person";
// import Status from "./components/Status";
// import DataFetching from "./components/api/DataFetching";
// import User from "./components/state/User";

export default function App() {
  const [val, setVal] = useState<number>(0);
  const dispatch = useDispatch();

  const count = useSelector((state: StateType) => state.count);

  const incrementByValueHandler = () => {
    dispatch(incrementByValue(val));
  };

  // const personList = [
  //   {
  //     firstName: "Iron",
  //     lastName: "Man",
  //   },
  //   {
  //     firstName: "Captain",
  //     lastName: "America",
  //   },
  //   {
  //     firstName: "Thor",
  //     lastName: "Thunder",
  //   },
  // ];

  return (
    <div>
      <h1>Typescript Learning Start</h1>
      {/* <Greet
        name="Devil"
        message="Learn typescript for the best"
        isLoggedIn={true}
      />

      <Person personList={personList} />
      <Status status="success" />
      <Button
        styles={{ margin: 20, padding: "10px 30px" }}
        title="Click ME"
        buttonClick={(event) => console.log("Button Clicked", event)}
      />
      <Input
        value="Sandhu"
        handleChange={(event) => console.log(event.target.value)}
      />
      <User />
      <Box padding={30} borderRadius={10} />
      <DataFetching /> */}

      <h3>Count: {count}</h3>

      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      <input
        type="number"
        value={val}
        onChange={(e) => setVal(Number(e.target.value))}
      />

      <button onClick={incrementByValueHandler}>Add</button>
    </div>
  );
}
