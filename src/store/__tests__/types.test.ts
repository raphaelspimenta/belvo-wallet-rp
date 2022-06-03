import { reduce } from 'lodash'
import { types as userTypes, namespace as userNamespace } from '../reducers/user/actions'
import { types as contactsTypes, namespace as contactsNamespace } from '../reducers/contacts/actions'
import { types as walletTypes, namespace as walletNamespace } from '../reducers/wallet/actions'

const getTypes = (namespace: string, type: string) => {
    const keys = [
        `${type}`,
        `${type}_PENDING`,
        `${type}_SUCCESS`,
        `${type}_ERROR`,
        `RESET_${type}_STATUS`,
    ]

    return reduce(keys, (result, key) => ({ ...result, [key]: `${namespace}/${key}` }), {})
}

describe('Action types', () => {
    it('should return action types for login', () => {
        const expectedTypes = { ...getTypes(userNamespace, 'LOGIN') }
        expect(userTypes).toEqual(expectedTypes)
    })
    it('should return action types for contacts', () => {
        const expectedTypes = { ...getTypes(contactsNamespace, 'LOAD') }
        expect(contactsTypes).toEqual(expectedTypes)
    })
    it('should return action types for wallet', () => {
        const expectedTypes = {
            ...getTypes(walletNamespace, 'LOAD'),
            ...getTypes(walletNamespace, 'REQUEST'),
            ...getTypes(walletNamespace, 'SEND'),
        }
        expect(walletTypes).toEqual(expectedTypes)
    })
})
