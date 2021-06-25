import { useEffect, useState } from 'react'

import logo from './logo.svg';
import './App.css';

import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask';


function App() {
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    console.log(data)
    return data
  }
  
  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
    // console.log('delete', id)
  }

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    console.log(id)
    const newTask = {id, ...task }
    setTasks([...tasks, newTask])
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Tasks To Show'}
      
    </div>


  );
}

export default App;
