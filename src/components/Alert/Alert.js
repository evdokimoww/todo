import React from "react"
import {useAlert} from "./AlertContext";

export const Alert = () => {

    const alert = useAlert()
    const className = 'alert alert-' + alert.color + ' fade show'

    if (!alert.visible) return null

    return <div className={className} role="alert" onClick={() => setTimeout(alert.hide, 500)}>
        {alert.text}
    </div>
}