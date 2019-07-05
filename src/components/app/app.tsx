import React, { useReducer, useEffect } from 'react'
import Header from '../header/header'
import Form from '../form/form'
import Todos from '../todos/todos'
import Footer from '../footer/footer'

import {
  TodoContext,
  DispatchContext
} from '../../services/todoContext'

import todosReducer from '../../services/todoReducer'

const App: React.FC = () => {
  const [todos, dispatch] = useReducer(
    todosReducer,
    JSON.parse(localStorage.getItem('tasks')!) || []
  )

  useEffect(() => {
    todos.length > 1
      ? (document.getElementById('btnReverse')!.style.visibility = 'visible')
      : (document.getElementById('btnReverse')!.style.visibility = 'hidden')
    document.documentElement.setAttribute('data-theme', JSON.parse(localStorage.getItem('mode')!) || false)
  },[])

  return (
    <div className='app'>
      <TodoContext.Provider value={todos}>
        <DispatchContext.Provider value={dispatch}>
          <Header />
          <Form />
          <Todos />
          <Footer />
        </DispatchContext.Provider>
      </TodoContext.Provider>
    </div>
  )
}

export default App
