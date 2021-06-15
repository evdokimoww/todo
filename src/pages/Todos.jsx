import React, {useState} from "react";
import {Form} from "../components/Form";
import {Tasks} from "../components/Tasks";

export const Todos = () => {
    const [tasks, setTask] = useState([])
    const [completeTasks, setCompleteTask] = useState([])

    const addTask = (textTask) => setTask([...tasks, textTask])

    const deleteTask = (indexTask) => {
        const newTasks = tasks.filter((_, index) => index !== indexTask)
        setTask(newTasks)
    }

    const completeTask = (indexTask) => {
        const newCompleteTasks = tasks.filter((_, index) => index === indexTask)
        setCompleteTask([...completeTasks, newCompleteTasks])
        deleteTask(indexTask)
    }

    const changeTask = (textTask, indexTask) => {
        tasks.forEach((value, index) => {if (index === indexTask) tasks[index] = textTask})
    }

    return <>
        <h1>Задачи</h1>
        <Form addTask={addTask}/>
        <Tasks tasks={tasks}
               completeTasks={completeTasks}
               completeTask={completeTask}
               deleteTask={deleteTask}
               changeTask={changeTask}/>
        </>
}