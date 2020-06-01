import { data } from '../data'

function rules(option1, option2, state) {
  switch (true) {
    case option1 === data.diarrea.value && option2 === data.malaria.value:
      return setStateMalaria(state)
    case option1 === data.diarrea.value && option2 === data.hepatitis.value:
      return setStateHepatitis(state)
    case option1 === data.tos.value && option2 === data.gripe.value: 
      return setStateGripe(state)
    case option1 === data.tos.value && option2 === data.tubercolosis.value: 
      return setStateTubercolosis(state)
    case option1 === data.cansancio.value && option2 === data.gripe.value:
      return setStateGripe(state)
    case option1 === data.cansancio.value && option2 === data.tubercolosis.value:
      return setStateTubercolosis(state)
    case option1 === data.cansancio.value && option2 === data.anemia.value:
      return setStateAnemia(state)
    case option1 === data.fiebre.value && option2 === data.gripe.value:
      return setStateGripe(state)
    case option1 === data.fiebre.value && option2 === data.rubeola.value:
      return setStateRubeola(state)
    case option1 === data.fiebre.value && option2 === data.malaria.value:
      return setStateMalaria(state)
    case option1 === data.fiebre.value && option2 === data.tubercolosis.value:
      return setStateTubercolosis(state)
    case option1 === data.dolorDeCabeza.value && option2 === data.gripe.value:
      return setStateGripe(state)
    case option1 === data.nauseas.value && option2 === data.hepatitis.value:
      return setStateHepatitis(state)
    case option1 === data.nauseas.value && option2 === data.anemia.value:
      return setStateAnemia(state)     
    case option1 === data.ictericia.value && option2 === data.malaria.value:
      return setStateMalaria(state)     
    case option1 === data.ictericia.value && option2 === data.hepatitis.value:
      return setStateHepatitis(state)     
    case option1 === data.apatia.value && option2 === data.anemia.value:
      return setStateAnemia(state)     
    case option1 === data.escalofrios.value && option2 === data.rubeola.value:
      return setStateRubeola(state)   
    case option1 === data.escalofrios.value && option2 === data.malaria.value:
      return setStateMalaria(state)     
    case option1 === data.escalofrios.value && option2 === data.tubercolosis.value:
      return setStateTubercolosis(state)     
    case option1 === data.jaqueca.value && option2 === data.rubeola.value:
      return setStateRubeola(state)     
    case option1 === data.secrecion.value && option2 === data.rubeola.value:
      return setStateRubeola(state)
    default:
      console.log('No hay relacion entre los 2 sintomas')
      return state
  }
}

const setStateGripe = state => ({
  ...state,
  recipe: ['Vacuna', 'Contrex', 'Paracetamol'],
  specialist: ['Médico General', 'Endocrinólogo']
})

const setStateRubeola = state => ({
  ...state,
  recipe: ['Vacuna', 'Paracetamol'],
  specialist: ['Médico General', 'Endocrinólogo']
})

const setStateMalaria = state => ({
  ...state,
  recipe: ['Vacuna'],
  specialist: ['Médico General', 'Endocrinólogo']
})

const setStateHepatitis = state => ({
  ...state,
  recipe: ['Vacuna', 'Paracetamol'],
  specialist: ['Médico General', 'Endocrinólogo']
})

const setStateTubercolosis = state => ({
  ...state,
  recipe: ['Paracetamol'],
  specialist: ['Médico General']
})

const setStateAnemia = state => ({
  ...state,
  recipe: ['Vitamina'],
  specialist: ['Nutriologo']
})

export default rules