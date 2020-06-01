import React from 'react'
import HeaderLight from '../components/expert/HeaderLight';
import '../components/styles/medico_expert.css';
import  Options from '../components/expert/MedicoExpert/Options'

export default function MedicoExpert() {
  return (
    <>
      <HeaderLight />
      <div className="Wrapper">
        <h1 className="Home__title">Sistema Médico</h1>
        <p className="center">Hola, Soy un sistema médico y te ayudo a canalizar tu situación</p>
        <div className="Info">
          <p className="Home__text">¿Cuáles son tus Sintomas?</p>
          <Options />
        </div>
      </div>
      </>
  )
}
