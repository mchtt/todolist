import React, { useState, useContext } from 'react'
import { DispatchContext } from '../../services/todoContext'
import {
  Button,
  FormControl,
  Input,
  InputLabel,
  FormHelperText
} from '@material-ui/core'

const Form: React.FC = () => {
  const [text, setText] = useState('')
  const dispatch = useContext(DispatchContext)

  return (
    <form
      className='form'
      onSubmit={e => {
        e.preventDefault()
        dispatch({ text, type: 'ADD' })
        setText('')
      }}
    >
      <Button
        id='btnReverse'
        onClick={() => {
          dispatch({ type: 'REVERSE'})
        }}
      >
        <i className='material-icons'>swap_vert</i>
      </Button>

      <FormControl className='input'>
        <InputLabel htmlFor='my-input' />
        <Input
          id='my-input'
          aria-describedby='my-helper-text'
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <FormHelperText id='my-helper-text'>
          Double click on a task to delete it - - - Simple click to check it
        </FormHelperText>
      </FormControl>

      <Button type='submit' className='btn' variant='contained'>
        <i className='material-icons'>add_circle</i>
      </Button>
    </form>
  )
}

export default Form
