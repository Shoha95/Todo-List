import React from 'react';
import './TodoListItem.css'

const TodoListItem = (props) => {
    return (
        <div className='Item'>
            <div className='input_item'>
                <input
                    value={props.task.active}
                    type="checkbox"
                    checked={props.task.active}
                    onClick={props.onCheckbox} />
                <span>{props.task.text}</span>
            </div>
            <div className="btn">
                <button
                    disabled={!props.task.active}
                    onClick={props.onDelete}>
                    Delete
                </button>
            </div>
        </div>
    );
};

export default TodoListItem;