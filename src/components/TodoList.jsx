import TodoItem from "./TodoItem";

const TodoList = ({todos, handleCompleteTodo, handleDeleteTodo}) => {
  

  return (
    <div className="w-11/12 m-auto">
      {todos &&
        todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              title={todo.title}
              description={todo.description}
              isCompleted={todo.isCompleted}
              id={todo.id}
              handleCompleteTodo={handleCompleteTodo}
              handleDeleteTodo={handleDeleteTodo}
            />
          );
        })}
    </div>
  );
};

export default TodoList;
