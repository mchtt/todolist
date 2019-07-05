import React, { useContext } from 'react'
import { TodoContext, DispatchContext } from '../../services/todoContext'
import Card from '@material-ui/core/Card'

const Todos: React.FC = () => {
  const todos = useContext(TodoContext)
  const dispatch = useContext(DispatchContext)
  return (
    <div className='tasksList'>
      {todos.map(({ text, complete }, i) => (
        <Card className='card' key={i}>
          <button
            className='task'
            onDoubleClick={() => dispatch({ type: 'DELETE', id: i })}
            onClick={() => dispatch({ type: 'DONE', id: i })}
            style={{
              color: complete ? 'red' : '',
              textDecoration: complete ? 'line-through' : ''
            }}
          >
            {text}
          </button>
        </Card>
      ))}
    </div>
  )
}

export default Todos
