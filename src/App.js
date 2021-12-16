import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header'
import TodoList from './components/todo-list/TodoList'
import AddTodo from './components/add-todo/AddTodo'
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [task, setTask] = useState(JSON.parse(localStorage.getItem('task')) || [])
  const [input, setInput] = useState('');
  const [All, setAll] = useState('all')

  const onChange = (value) => {
    setInput(value)
  }
  useEffect(() => {
    localStorage.setItem('task', JSON.stringify(task))
  }, [task])

  const addTodo = (body) => {
    if (body !== '') {
      // console.log(body);
      setTask([...task, {
        text: body,
        id: uuidv4(),
        active: false,
      }])
      setInput('')
    } else {
      alert('awdaw')
    }
  }

  const onDelete = (id) => {
    // console.log(ind). 
    const ind = task.findIndex((e, i) => e.id === id)
    setTask([...task.slice(0, ind), ...task.slice(ind + 1)])
  }

  const onCheckbox = (id) => {
    const ind = task.findIndex((e, i) => e.id === id)
    const old = task[ind]
    setTask([...task.slice(0, ind), { ...old, active: !old.active }, ...task.slice(ind + 1)])

  }
  const onSelectChange = (select) => {
    setAll(select)
  }


  return (
    <div className="App">
      <Header task={task} />
      <AddTodo
        onSelectChange={onSelectChange}
        addTodo={addTodo}
        onChange={onChange}
        input={input}
      />
      <TodoList
        all={All}
        onDelete={onDelete}
        task={task}
        onCheckbox={onCheckbox}
      />

    </div>
  );
}

export default App;
