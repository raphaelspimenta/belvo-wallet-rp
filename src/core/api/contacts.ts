import { getAccessToken } from 'core/auth'
import { getCurrentEnvConfig } from 'core/config'
import { ContactsModel } from 'store/reducers/contacts/model'
import createAPI from '.'

const { apiURL } = getCurrentEnvConfig()
const BaseAPI = createAPI(apiURL)

type GetContactsRequest = () => Promise<ContactsModel>
export const getContacts: GetContactsRequest = () => BaseAPI.get('/contacts', {
    headers: {
        'Authorization': getAccessToken(),
    },
})
