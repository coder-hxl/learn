import {
  useNavigate,
  useParams,
  useLocation,
  useSearchParams
} from 'react-router-dom'

export default function withRouter(WrapperComponent) {
  return (props) => {
    // 1.导航
    const navigate = useNavigate()

    // 2.动态路由参数解析
    const params = useParams()

    // 3.query解析
    const location = useLocation()
    const [searchParams] = useSearchParams()
    const query = Object.fromEntries(searchParams)

    const router = { navigate, params, location, query }

    return <WrapperComponent {...props} router={router} />
  }
}
