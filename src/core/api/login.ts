import { getCurrentEnvConfig } from 'core/config'
import { LoginModel } from 'store/reducers/user/model'
import createAPI from '.'

const { apiURL } = getCurrentEnvConfig()
const BaseAPI = createAPI(apiURL)

type GetIssues = (username: string, password: string) => Promise<LoginModel>
export const login: GetIssues = (username, password) => BaseAPI.post('/login', { username, password })
