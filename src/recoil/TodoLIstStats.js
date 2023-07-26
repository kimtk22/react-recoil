import { selector } from "recoil";
import todoListState from "./todoListState";

export const todoListStats = selector({
  key: "todoListStats",
  get: ({ get }) => {
    const todoList = get(todoListState);
    const totalNumber = todoList.length;
    const completeNumber = todoList.filter((item) => item.isComplete).length;
    const uncompleteNmuber = todoList.filter((item) => !item.isComplete).length;
    const percentCompleted =
      totalNumber && (completeNumber / totalNumber) * 100;

    return [totalNumber, completeNumber, uncompleteNmuber, percentCompleted];
  },
});
