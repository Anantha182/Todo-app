import { v4 as uuidv4 } from "uuid";

const todos = [
  {
    id: uuidv4(),
    title: "Complete React project",
    description: "Finish building the todo app with React",
    isCompleted: false,
  },
  {
    id: uuidv4(),
    title: "Study for exam",
    description: "Review the course material for the upcoming exam",
    isCompleted: true,
  },
  {
    id: uuidv4(),
    title: "Go for a run",
    description: "Take a jog in the park for some exercise",
    isCompleted: false,
  },
  {
    id: uuidv4(),
    title: "Buy groceries",
    description: "Get milk, eggs, bread, and vegetables from the store",
    isCompleted: false,
  },
  {
    id: uuidv4(),
    title: "Call mom",
    description: "Catch up with mom and see how she's doing",
    isCompleted: true,
  },
  {
    id: uuidv4(),
    title: "Finish book",
    description: 'Read the last few chapters of "The Great Gatsby"',
    isCompleted: false,
  },
];

export { todos };
