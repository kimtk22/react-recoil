import React from "react";
import { useRecoilState } from "recoil";
import todoListState from "../recoil/todoListState";

const Preview = () => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  return <textarea value={JSON.stringify(todoList)} />;
};

export default Preview;
