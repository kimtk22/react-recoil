import React from "react";
import { useRecoilValue } from "recoil";
import { todoListStats } from "../recoil/TodoLIstStats";

const TodoListStats = () => {
  const [totalNumber, completeNumber, uncompleteNmuber, percentCompleted] =
    useRecoilValue(todoListStats);

  return (
    <ul>
      <li>Total Number : {totalNumber}</li>
      <li>Complete Number : {completeNumber}</li>
      <li>Uncomplete Number : {uncompleteNmuber}</li>
      <li>Percent Completed : {percentCompleted}</li>
    </ul>
  );
};

export default TodoListStats;
