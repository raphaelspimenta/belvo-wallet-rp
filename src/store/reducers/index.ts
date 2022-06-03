import { combineReducers } from 'redux'
import wallet from './wallet'
import contacts from './contacts'
import user from './user'

export default combineReducers({
    wallet,
    contacts,
    user,
})
