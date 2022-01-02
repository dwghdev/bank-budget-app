import { accountsToDisplay } from '../../../utils/accountsToDisplay.js'
import { getStoredAccounts } from '../../../utils/storage.js'
import { jsonTable } from '../../../utils/jsonTable.js'
import MenuHTML from '../../html/MenuHTML.js'

const searchInput = `<input type="text" id="accountSearch" class="search" placeholder="Search"/>`
const accounts = accountsToDisplay(getStoredAccounts())
const table = jsonTable(accounts).outerHTML

const content = {
  id: 'accountsMenu', 
  title: 'All Users', 
  inner: [ searchInput, table]
}

const accountsMenu = new MenuHTML(content)
export { accountsMenu }
