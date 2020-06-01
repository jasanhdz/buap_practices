import { GET_DISEASE } from '../types/MedicoExpert'

export const getDisease = (payload) => ({
  type: GET_DISEASE,
  payload,
})