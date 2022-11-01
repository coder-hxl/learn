import { useContext } from 'react'
import { TokenContext, UserContext } from '../context/index'

export default function useUserToken() {
  const user = useContext(UserContext)
  const token = useContext(TokenContext)

  return { user, token }
}
