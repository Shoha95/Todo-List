import React from 'react';

const AddTodo = (props) => {
    return (
        <div>
            <input
                onChange={(e) => props.onChange(e.target.value)}
                type="text"
                value={props.input}
                name="" id="" />
            <button
                onClick={() => props.addTodo(props.input)}>
                Добавить
            </button>
            <select onChange={(e) => props.onSelectChange(e.target.value)}>
                <option value="all">по умолчание</option>
                <option value="done">выполнено</option>
                <option value="not done">не выполнено</option>
            </select>
        </div>
    );
};

export default AddTodo;