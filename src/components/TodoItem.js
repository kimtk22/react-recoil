import React from "react";
import { useRecoilState } from "recoil";
import todoListState from "../recoil/todoListState";
import { removeItemAtIndex, replaceItemAtIndex } from "../util/util";

const TodoItem = ({ todoItem }) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => listItem === todoItem);

  const onChange = ({ target: { value } }) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...todoItem,
      text: value,
    });
    setTodoList(newList);
  };

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...todoItem,
      isComplete: !todoItem.isComplete,
    });
    setTodoList(newList);
  };

  const removeTodoItem = () => {
    const newList = removeItemAtIndex(todoList, index);
    setTodoList(newList);
  };

  return (
    <li>
      <input
        type="checkbox"
        onChange={toggleItemCompletion}
        checked={todoItem.isComplete}
      />
      <input type="text" value={todoItem.text} onChange={onChange} />
      <button onClick={removeTodoItem}>X</button>
    </li>
  );
};

export default TodoItem;
