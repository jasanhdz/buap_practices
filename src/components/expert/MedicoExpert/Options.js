import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useInputValue } from '../../../hooks/useInputValue'
import { getDisease } from '../../../actions/medico_expert'

export default function Options() {
  const dispatch = useDispatch()
  const option1 = useSelector(state => state.medico.option_one)
  const option2 = useSelector(state => state.medico.option_two)
  const option_one = useInputValue('')
  const option_two = useInputValue('')

  const handleClick = e => {
    if (option_one.value && option_two.value) {
      const payload = { option1: option_one.value, option2: option_two.value }
      console.log(payload)
      return dispatch(getDisease(payload))
    }
    console.log('Por favor Selecciona 2 sintomas 😜')
  }

  const handleSelected = e => {
    console.log(e, 'selected')
  }
  return (
    <>
      <select value={option_one.value} onChange={option_one.onChange} className="Select">
          <option className="option_disable" value="" disabled> -- Selecciona algún sintoma -- </option>
          {option1.map(({ option, value }, idx) => <option
            key={idx}
            value={value}>
            {option}
          </option>)}
      </select>
      <select value={option_two.value} onChange={option_two.onChange} className="Select">
      <option className="option_disable"  value="" disabled> -- Selecciona algún sintoma -- </option>
        {option2.map(({ option, value }, idx) => <option
            key={idx}
            value={value}>
            {option}
          </option>)}
      </select>
      <button onClick={handleClick} className="btn primary">Continuar</button>
    </>
  )
}

