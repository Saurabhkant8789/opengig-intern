import React, { useState, useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "./Column";
import TaskForm from "./TaskForm"; // Import TaskForm component

export default function Board() {
  const [data, setData] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const [onProgress, setOnProgress] = useState([]);

  useEffect(() => {
    // Fetch tasks from backend when component mounts
    fetchTasks();
  }, []);

  const fetchTasks = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setCompleted(json.filter((task) => task.completed));
        setIncomplete(json.filter((task) => !task.completed));
      });
  };

  const handleDragEnd = (result) => {
    // Drag and drop logic
    // ...
    
  };

  const handleAddTask = (task) => {
    task.id = data[data.length - 1].id++;
    setData([...data, task]);
    setIncomplete((prev) => [...prev, task]);
   
  };

  const handleDeleteTask = (taskId) => {
    setData((prev) => prev.filter((task) => task.id !== taskId))
    setIncomplete((prev) => prev.filter((task) => task.id !== taskId));
    setCompleted((prev) => prev.filter((task) => task.id !== taskId));
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <h1 style={{ textAlign: "center" }}>INTERN ASSIGNMENT</h1>

      {/* TaskForm component for adding tasks */}
      <TaskForm onAddTask={handleAddTask} />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          width: "1300px",
          margin: "0 auto",
        }}
      >
        {/* Column components for displaying tasks */}
        <Column className="to-do"
          title={"TO DO"}
          tasks={incomplete}
          id={"1"}
          onDeleteTask={handleDeleteTask}
        />
       
        <Column className="On-progress"
          title={"On Progress "}
          tasks={onProgress}
          id={"3"}
          onDeleteTask={handleDeleteTask}
        />
         <Column className="Done"
          title={"DONE"}
          tasks={completed}
          id={"2"}
          onDeleteTask={handleDeleteTask}
        />
      </div>
    </DragDropContext>
  );
}
