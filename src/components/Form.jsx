import React, {useState} from "react";

export const Form = ({addTask}) => {

    const [value, setValue] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        if (value !== '') addTask(value)

        event.target.reset()
        setValue('')
    }

    const onInputChange = (event) => {
        setValue(event.currentTarget.value)
    }

    return <form className="py-4" onSubmit={handleSubmit}>
        <input type="text"
               className="form-control"
               placeholder={'введите текст задачи...'}
               onChange={onInputChange}/>
    </form>
}