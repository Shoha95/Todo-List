import React from 'react';
import TodoListItem from './../todo-list-item/TodoListItem';
import './TodoList.css'

const TodoList = (props) => {
    return (
        <div className='TodoList'>
            {
                props.task.filter((elem) => {
                    if(props.all === 'done') {
                        return elem.active
                    } else if (props.all === 'not done') {
                        return !elem.active
                    } else if (props.all === 'all') {
                        return true
                    }
                }).map((elem, i) => {
                    return (
                        <>
                            {console.log(elem.id)}
                            <TodoListItem
                                key={elem.id}
                                task={elem}
                                onDelete={() => props.onDelete(elem.id)}
                                onCheckbox={() => props.onCheckbox(elem.id)}
                            /></>

                    )
                })
            }
        </div>
    );
};

export default TodoList;