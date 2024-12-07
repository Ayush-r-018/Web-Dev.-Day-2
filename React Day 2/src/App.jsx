import { useState } from "react";

function App() {
  const [Todo, setTodo] = useState([]);

  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="underline text-3xl mb-1">Todo App!</h1>
      <br />
      <input
        type="text"
        className="bg-green-200 border-4 rounded-md border-blue-700"
        onKeyDown={function (event) {
          if (event.code === "Enter") {
            // logic...
            // add Todo/
            console.log("Input entered");
            setTodo([...Todo, event.target.value]);
            event.target.value = "";
          }
        }}
      />
      {Todo.map(function (value, index) {
        return (
          <div key={index} className="flex justify-between gap-20">
            <div>{value}</div>
            <div
              className="text-red-500 cursor-pointer"
              onClick={function () {
                const newList = Todo.filter(function (value, i) {
                  if (i !== index) return true;
                  else return false;
                });
                setTodo(newList);
              }}
            >
              Delete
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
