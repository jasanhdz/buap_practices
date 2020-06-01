import { GET_DISEASE } from '../../types/MedicoExpert'
import { data } from './data'
import Rules from './rules'

const INITIAL_STATE = {
  symptoms: [
    data.diarrea,
    data.tos,
    data.cansancio,
    data.fiebre,
    data.dolorDeCabeza,
    data.nauseas,
    data.ictericia,
    data.apatia,
    data.escalofrios,
    data.jaqueca,
    data.secrecion
  ],
  diseases: [
    data.gripe,
    data.rubeola,
    data.malaria,
    data.hepatitis,
    data.tubercolosis,
    data.anemia
  ],
  recipe: [],
  specialist: [],
  disease: ""
}

function medicoExpert(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case GET_DISEASE:
      console.log(payload)
      return Rules(payload, state)
    default:
      return state
  }
}

export default medicoExpert