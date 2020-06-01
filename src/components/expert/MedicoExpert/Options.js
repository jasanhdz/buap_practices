import React from 'react'
import { useSelector } from 'react-redux'
import { useCheckboxValues } from '../../../hooks/useCheckboxValues'
import { getDisease } from '../../../actions/medico_expert'

export default function Options({ suggestions }) {
  const { state, onChange, sendOptions } = useCheckboxValues(getDisease, suggestions)
  const symptoms = useSelector(state => state.medico.symptoms)
  return (
    <>
      <div className="grid">
        {symptoms.map(({ option, value }, idx) => <label className="Label" for={idx}>
          <input
            className="Checkbox"
            onChange={onChange}
            checked={state.idx}
            name={idx}
            id={idx} value={value}
            type="checkbox"
          />{option}
        </label>)}
      </div>
      <button onClick={sendOptions} className="btn primary"><a href="#diagnostic">Continuar</a></button>
      </>
  )
}

