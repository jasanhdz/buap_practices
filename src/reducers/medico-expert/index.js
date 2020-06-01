import { GET_DISEASE } from '../../types/MedicoExpert'
import { data } from './data'
import Rules from './rules'

const INITIAL_STATE = {
  option_one: [
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
  option_two: [
    data.gripe,
    data.rubeola,
    data.malaria,
    data.hepatitis,
    data.tubercolosis,
    data.anemia
  ],
  recipe: [],
  specialist: []
}

function medicoExpert(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case GET_DISEASE:
      const { option1, option2 } = payload
      return Rules(option1, option2, state)
    default:
      return state
  }
}

export default medicoExpert