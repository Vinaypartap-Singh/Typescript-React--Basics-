import axios from "axios";
import { useEffect, useState } from "react";

type todoType = {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
};

export default function DataFetching() {
  const [todos, setTodos] = useState<todoType[]>([]);

  //   Using Fetch Method in Typescript React

  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/todos/")
  //       .then((reponse) => reponse)
  //       .then((e) => e.json())
  //       .then((e) => setTodos(e as todoType[]));
  //   }, []);

  //   In Axios

  useEffect(() => {
    axios
      .get<todoType[]>("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => setTodos(response.data));
  }, []);

  // Using Axios in Typescript

  return (
    <div style={{ marginTop: "30px" }}>
      {todos?.map((data, index) => {
        return (
          <li style={{ textAlign: "start" }} key={index}>
            {data.title}
          </li>
        );
      })}
    </div>
  );
}
