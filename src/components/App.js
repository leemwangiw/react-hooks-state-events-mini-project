import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS); // Initial tasks
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleTaskFormSubmit = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleTaskDelete = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const filteredTasks =
    selectedCategory === "All"
      ? tasks
      : tasks.filter((task) => task.category === selectedCategory);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        onCategoryChange={handleCategoryChange}
        selectedCategory={selectedCategory}
      />
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={handleTaskFormSubmit}
      />
      <TaskList tasks={filteredTasks} onTaskDelete={handleTaskDelete} />
    </div>
  );
}

export default App;
