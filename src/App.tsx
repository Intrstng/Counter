import React, {useState} from 'react';
import './App.css';
import TodoList, { TaskType } from './TodoList';

//CRUD:
//create
//read
//update
//delete

function App() {
    const todoListTitle = "What to learn"
    const[tasks, setTasks] = useState<Array<TaskType>>([
        { id: 1, title: "HTML", isDone: true },
        { id: 2, title: "JS/ES6", isDone: false },
        { id: 3, title: "REACT", isDone: false }
    ])

    const removeTask = (taskId: number) => {
        console.log(taskId)
        const nextState: Array<TaskType> = tasks.filter(el => el.id !== taskId);
        setTasks(nextState);
    }
    return (
        <div className="App">
            <TodoList title={todoListTitle} tasks={tasks}           removeTask={removeTask}/>
        </div>
    );
}

export default App;
