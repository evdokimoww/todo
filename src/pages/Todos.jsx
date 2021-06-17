import React, {useState} from "react";
import {Form} from "../components/Form";
import {Tasks} from "../components/Tasks";
import {Alert} from "../components/Alert/Alert";
import {AlertProvider, useAlert, useToggleAlert} from "../components/Alert/AlertContext";

export const Todos = () => {
    const [tasks, setTask] = useState([])
    const [completeTasks, setCompleteTask] = useState([])

    const alert = useAlert()

    const showAlert = (text, color) => {
        alert.show(text, color)
        setTimeout(alert.hide, 5000)
    }

    const addTask = (textTask) => {
        setTask([...tasks, textTask])
        showAlert('Задача добавлена!', 'primary')
    }

    const deleteTask = (indexTask) => {
        const newTasks = tasks.filter((_, index) => index !== indexTask)
        setTask(newTasks)
        showAlert('Задача удалена!', 'danger')
    }

    const completeTask = (indexTask) => {
        const newCompleteTasks = tasks.filter((_, index) => index === indexTask)
        setCompleteTask([...completeTasks, newCompleteTasks])
        deleteTask(indexTask)
        showAlert('Задача выполнена!', 'success')
    }

    const changeTask = (textTask, indexTask) => {
        tasks.forEach((value, index) => {if (index === indexTask) tasks[index] = textTask})
    }

    return <>
            <Alert />
            <h1>Задачи</h1>
            <Form addTask={addTask}/>
            <Tasks tasks={tasks}
                   completeTasks={completeTasks}
                   completeTask={completeTask}
                   deleteTask={deleteTask}
                   changeTask={changeTask}/>
        </>

}