import React from 'react'
import { ButtonHTMLAttributes } from "react-dom/node_modules/@types/react"
import '../styles/button.scss'


type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement > &{
    isOutlined?: boolean;
}

export default function Button({isOutlined = false, ...props}: ButtonProps) {

    return (
        <div>
            <button 
            className={`button${isOutlined ? 'outlined' : ''}`} 
            {...props}
            />
        </div>

    )
}