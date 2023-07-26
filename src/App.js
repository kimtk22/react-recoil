import { useRecoilValue } from "recoil";
import todoListState from "./recoil/todoListState";
import TodoCreator from "./components/TodoCreator";
import TodoItem from "./components/TodoItem";
import Preview from "./components/Preview";
import { filteredTodoListState } from "./recoil/FilteredTodoListState";
import TodoListFilters from "./components/TodoListFilters";
import TodoListStats from "./components/TodoListStats";

function App() {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      <TodoListFilters />
      <TodoListStats />
      <TodoCreator />
      <ul>
        {todoList.map((todoItem) => {
          return <TodoItem key={todoItem.id} todoItem={todoItem} />;
        })}
      </ul>
      <Preview />
    </>
  );
}

export default App;
