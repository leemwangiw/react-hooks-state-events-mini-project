import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState(categories[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { text, category, id: Date.now() }; // Use Date.now() as a unique ID
    onTaskFormSubmit(newTask);
    setText("");
    setCategory(categories[0]); // Reset form to default state
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          {categories
            .filter((cat) => cat !== "All")
            .map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
