import { getStoredAccounts } from '../../../utils/storage.js'
import { loggedAccount } from '../../../utils/storage.js'

const accounts = getStoredAccounts().length
const newAccounts = getStoredAccounts()[accounts-1].fullname
const balance = loggedAccount.balance

const insightList = [
  {
    title: 'balance',
    total: balance,
    description: `Last balance: ${0}`,
    icon: 'piggy-bank'
  },
  {
    title: 'total expenses',
    total: '524',
    description: `Last expense: ${0}`,
    icon: 'coins'
  },
  {
    title: 'total withdrawal',
    total: '10,864',
    description: `Last withdraw: ${0}`,
    icon: 'money-check-alt'
  },
  {
    title: 'last transfer',
    total: accounts,
    description: `Transfered to: ${newAccounts}`,
    icon: 'hand-holding-usd'
  }
]

export { insightList }
