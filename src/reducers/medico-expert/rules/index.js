import { data } from '../data'

const malaria = [data.cansancio.value, data.dolorDeCabeza.value]
const gripe = [data.tos.value, data.cansancio.value, data.fiebre.value, data.dolorDeCabeza.value]
const rubeola = [data.fiebre.value, data.escalofrios.value, data.jaqueca.value, data.secrecion.value]
const hepatitis = [data.diarrea.value, data.nauseas.value, data.ictericia.value]
const tubercolosis = [data.tos.value, data.cansancio.value, data.fiebre.value]
const anemia = [data.cansancio.value, data.nauseas.value, data.apatia.value]

function rules(payload, state) {
  switch (true) {
    case JSON.stringify(payload) === JSON.stringify(malaria):
      console.log('el payload es malaria')
      return setStateMalaria(state)
    case JSON.stringify(payload) === JSON.stringify(hepatitis):
      console.log('el payload es hepatitis')
      return setStateHepatitis(state)
    case JSON.stringify(payload) === JSON.stringify(gripe):
      console.log('el payload es gripe')
      return setStateGripe(state)
    case JSON.stringify(payload) === JSON.stringify(tubercolosis):
      console.log('el payload es tubercolosis')
      return setStateTubercolosis(state)
    case JSON.stringify(payload) === JSON.stringify(anemia):
      console.log('el payload es anemia')
      return setStateAnemia(state)
    case JSON.stringify(payload) === JSON.stringify(rubeola):
      console.log('el payload es rubeola')
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
  disease: "Rubeola",
  recipe: ['Vacuna', 'Paracetamol'],
  specialist: ['Médico General', 'Endocrinólogo']
})

const setStateMalaria = state => ({
  ...state,
  disease: "Malaria",
  recipe: ['Vacuna'],
  specialist: ['Médico General', 'Endocrinólogo']
})

const setStateHepatitis = state => ({
  ...state,
  disease: "Hepatitis",
  recipe: ['Vacuna', 'Paracetamol'],
  specialist: ['Médico General', 'Endocrinólogo']
})

const setStateTubercolosis = state => ({
  ...state,
  disease: "Tubercolosis",
  recipe: ['Paracetamol'],
  specialist: ['Médico General']
})

const setStateAnemia = state => ({
  ...state,
  disease: "Anemia",
  recipe: ['Vitamina'],
  specialist: ['Nutriologo']
})

export default rules