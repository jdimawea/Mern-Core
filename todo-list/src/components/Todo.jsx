import React from 'react'

const Todo = (props) => {

    const todoClasses = ["bold", "italic"];

    if (props.todo.complete) {
        todoClasses.push("line-through");
    }

    return (
        <div>
            <span className={todoClasses.join(" ")}>{props.todo.text}  </span>
            <input onChange={(e) => props.handleToggleComplete(props.i)} checked={props.todo.complete} type="checkbox"></input>
            <button onClick={(e) => props.handleTodoDelete(props.i)}>Delete</button>
        </div>
    )
}

export default Todo