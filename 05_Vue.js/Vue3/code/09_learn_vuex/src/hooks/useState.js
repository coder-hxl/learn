import { mapState } from 'vuex'
import { useMapper } from './useMapper'

export function useState(mapper) {
  useMapper(mapper, mapState)
}