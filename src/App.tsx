import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";

export default function App() {
  const personList = [
    {
      firstName: "Iron",
      lastName: "Man",
    },
    {
      firstName: "Captain",
      lastName: "America",
    },
    {
      firstName: "Thor",
      lastName: "Thunder",
    },
  ];

  return (
    <div>
      <h1>Typescript Learning Start</h1>
      <Greet
        name="Devil"
        message="Learn typescript for the best"
        isLoggedIn={true}
      />

      <Person personList={personList} />
    </div>
  );
}
