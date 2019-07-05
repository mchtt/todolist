import React, { useContext, useState } from 'react'
import { DispatchContext } from '../../services/todoContext'
import Switch from '@material-ui/core/Switch'

const Switches: React.FC = () => {
  const dispatch = useContext(DispatchContext)
  const [state, setState] = useState(
    JSON.parse(localStorage.getItem('mode')!) || false
  )

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.checked)
    dispatch({ type: 'DARKMODE', mode: state })
  }

  return (
    <div>
      <Switch
        checked={state}
        onChange={e => handleChange(e)}
        value={state}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
    </div>
  )
}

export default Switches
