import { useNavigate } from 'react-router-dom'

export default function withRouter(WrapperComponent) {
  return (props) => {
    const navigate = useNavigate()

    const router = { navigate }

    return <WrapperComponent {...props} router={router} />
  }
}
