import { useState } from "react";
import "./App.css";
import { LoadImage } from "./Components/LoadImages/LoadImage";
import { Button } from "./Components/Button/Button";
import { TodoList } from "./Components/TodoList/TodoList";
function App() {
  const [task, setTask] = useState("");
  const displayTask = () => {
    if (task === "TodoList") return <TodoList />;
    if (task === "LoadImage") return <LoadImage />;
    if (task === "ShowAndHideButton") return <Button />;
    return null;
  };
  return (
    <div>
      <div className="btns-wrapper">
        <button onClick={() => setTask("TodoList")}>TodoList</button>
        <button onClick={() => setTask("LoadImage")}>LoadImage</button>
        <button onClick={() => setTask("ShowAndHideButton")}>
          ShowAndHideButton
        </button>
      </div>
      <div className="task-wrapper">{displayTask()}</div>
    </div>
  );
}

export default App;
