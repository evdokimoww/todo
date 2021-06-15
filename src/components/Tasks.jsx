import React, {useRef, useState} from "react";

export const Tasks = ({tasks, deleteTask, completeTasks, changeTask, completeTask}) => {
    const [editMode, setEditMode] = useState(false)
    const [editingIndex, setEditingIndex] = useState(null)
    const [changedTask, setChangedTask] = useState('')

    const activateEditMode = (index) => {
        setEditingIndex(index)
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        changeTask(changedTask, editingIndex)
        setEditingIndex(null)
    }

    const onTaskEditing = (event) => {
        setChangedTask(event.currentTarget.value)
    }

    return <>
        {tasks.length > 0
            ? <div>
                <h5>Текущие задачи</h5>
                <ul className="list-group my-3">
                    {tasks.map((task, index) => //.slice(0).reverse()
                        <li className="list-group-item task" key={index}>

                            {!editMode &&
                            <div>
                                <strong>{task}</strong>
                                <span className="px-3 small" onClick={() => {
                                    activateEditMode(index)
                                }}>редактировать</span>
                            </div>
                            }

                            {editMode &&
                                (editingIndex === index
                                    ? <div>
                                        <input autoFocus className="form-control form-control-sm" type="text" defaultValue={task} onChange={onTaskEditing}
                                               onBlur={deactivateEditMode} />
                                    </div>
                                    : <div>
                                        <strong>{task}</strong>
                                        <span className="px-3 small" onClick={() => {activateEditMode(index)}}>редактировать</span>
                                    </div>)
                            }

                            <div>
                                <span className="px-4">{new Date().toLocaleDateString()}</span>
                                <button type="button" className="btn btn-sm btn-outline-success mx-2" onClick={() => {
                                    completeTask(index)
                                }}>выполнено</button>
                                <button type="button" className="btn btn-sm btn-outline-danger" onClick={() => {
                                    deleteTask(index)
                                }}>удалить</button>
                            </div>
                        </li>)}
                </ul>
            </div>
            : <div>Нет текущих задач</div>
        }


        {completeTasks.length > 0
            ? <div>
                <hr/>
                <h5>Выполненные задачи</h5>
                <ul className="list-group my-3">
                    {completeTasks.map((task, index) => //.slice(0).reverse()
                        <li className="list-group-item task disabled" key={index}>
                            {task}
                            <div>
                                <span className="px-4">{new Date().toLocaleDateString()}</span>
                            </div>
                        </li>)}
                </ul>
            </div>
            : <div></div>}

    </>
}