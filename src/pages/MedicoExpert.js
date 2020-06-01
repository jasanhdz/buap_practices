import React, { useRef } from 'react'
import HeaderLight from '../components/expert/HeaderLight';
import '../components/styles/medico_expert.css';
import Options from '../components/expert/MedicoExpert/Options'
import Suggestions from '../components/expert/MedicoExpert/Suggestions'

export default function MedicoExpert() {
  const suggestions = useRef(null)
  const closeSugestion = e => {
    suggestions.current.style.display = "none"
    console.log('hiciste click')
  } 
  return (
    <>
      <HeaderLight />
      <div className="Wrapper">
        <h1 className="Home__title">Sistema Médico</h1>
        <p className="center">Hola, Soy un sistema médico y te ayudo a canalizar tu situación</p>
        <div className="Info">
          <Suggestions suggestions={suggestions} closeSugestion={closeSugestion} />
          <p className="Home__text">¿Cuáles son tus Sintomas?</p>
          <Options suggestions={suggestions} />
        </div>
      </div>
      </>
  )
}
