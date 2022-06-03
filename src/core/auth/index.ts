const LOGGED_USER = '@belvo-wallet/logged-user'

export interface LoggedUser {
  access_token: string,
}

export const getLoggedUser = (): string => sessionStorage.getItem(LOGGED_USER) || ''

export const setLoggedUser = (user: LoggedUser): void => sessionStorage.setItem(LOGGED_USER, JSON.stringify(user))

export const isAuthenticated = (): boolean => !!getLoggedUser()

export const removeLoggedUser = (): void => sessionStorage.removeItem(LOGGED_USER)

export const getAccessToken = (): string => {
  const user = getLoggedUser()
  if (!user) return ''
  
  const loggedUser = JSON.parse(getLoggedUser())
  return `${loggedUser.token_type} ${loggedUser.access_token}`
}
