import { defaultAccounts } from './defaultStorage.js'

const getStoredAccounts = () => {
  if (!localStorage.accounts)
    localStorage.accounts = JSON.stringify(defaultAccounts)

  return JSON.parse(localStorage.accounts)
}

if (!localStorage.loggedAccount)
  localStorage.loggedAccount = '[]'

const loggedAccount = JSON.parse(localStorage.loggedAccount)
let accountName = loggedAccount.fullname
const history = loggedAccount.history

if (!accountName)
  accountName = ''

const firstName = accountName.substring(0, accountName.indexOf(' '))
const isLoggedIn = !Array.isArray(loggedAccount)

export { getStoredAccounts, loggedAccount, isLoggedIn, firstName, history }
