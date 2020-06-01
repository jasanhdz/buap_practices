import { useState } from 'react'
import { useDispatch } from 'react-redux'

export const useCheckboxValues = (action, suggestions) => {
  const dispatch = useDispatch()
  const [state, setState] = useState({})
  const onChange = e => {
    const { name, checked, value } = e.target
    setState({ ...state, [name]: { checked, value } })
  }
  const sendOptions = () => {
    if (Object.entries(state).length) {
      const data = Object.entries(state).filter(item => item[1].checked)
      if (data.length) {
        const options = data.map(opt => opt[1].value)
        dispatch(action(options))
        suggestions.current.style.display = "flex"
      } else {
        return console.log('no has seleccionado ninguna opción')
      }
    } else {
      console.log('uuuuu')
    }
  }

  return { state, onChange, sendOptions }
}
