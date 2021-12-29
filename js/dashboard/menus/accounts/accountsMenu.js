import { defaultList } from './defaultList.js'
import { jsonTable } from '../../../utils/jsonTable.js'
import MenuHTML from '../../html/MenuHTML.js'

if (!localStorage.accounts)
  localStorage.accounts = JSON.stringify(defaultList)

const storedAccounts = localStorage.accounts
  ? JSON.parse(localStorage.accounts) : []

const tableAccounts = list => {
  const accounts = list.map(account => {
    const cloneAccount = Object.assign({}, account)

    delete cloneAccount.password
    delete cloneAccount.mobile
    
    return cloneAccount
  })

  return accounts
}

const list = tableAccounts(storedAccounts)

const content = {
  id: 'accountsMenu', 
  title: 'Accounts', 
  inner: [
    `<input type="text" id="searchInput" placeholder="Search"/>`,
    jsonTable(list).outerHTML
  ]
}

const accountsMenu = new MenuHTML(content)
export { accountsMenu }
