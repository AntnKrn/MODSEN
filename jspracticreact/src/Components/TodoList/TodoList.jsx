import React, { useEffect, useState } from "react";

export const TodoList = () => {
  const [tasksList, setTasksList] = useState([]);
  const [taskText, setTaskText] = useState("");

  const onChangeInputHandler = (e) => {
    setTaskText(e.target.value);
  };

  const onPressEnterHandler = (e) => {
    if (e.key === "Enter" && taskText.trim().length !== 0) {
      setTasksList((prev) => [taskText, ...prev]);
      setTaskText("");
    }
  };

  const onClickDeleteHandler = (index) => {
    const updatedList = [...tasksList];
    updatedList.splice(index, 1);
    setTasksList(updatedList);
  };

  return (
    <div>
      <input
        value={taskText}
        onChange={onChangeInputHandler}
        onKeyDown={onPressEnterHandler}
      />
      <div>
        {tasksList.map((task, index) => (
          <h2 key={String(task) + String(index)}>
            {index + 1}. {task}{" "}
            <button onClick={() => onClickDeleteHandler(index)}>X</button>
          </h2>
        ))}
      </div>
    </div>
  );
};
