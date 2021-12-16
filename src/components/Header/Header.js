import React from 'react';
import './Header.css'

const Header = (props) => {
    return (
        <div className='Header'>
            <h1>Todo List:{props.task.length}</h1>
            <h2>Выполнено: {props.task.filter(elem => elem.active).length}</h2>
            <h2>Не выполнено: {props.task.filter(elem => !elem.active).length}</h2>
        </div>
    );
};

export default Header;