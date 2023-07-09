import Todos from "./Todos";
import { useState } from "react";
import React from "react";

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["todo 1", "todo 2"]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  return (
    <>
      <Todos todos={todos} />
      <hr />
      <div>
        Sayaç: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
}

export default App;
