import { newAccounts } from './newAccounts.js'
import MenuHTML from '../../html/MenuHTML.js'
import { insights } from './insights.js'

const content = {
  id: 'mainMenu',
  title: 'Dashboard',
  inner: [insights, newAccounts]
}

export const mainMenu = new MenuHTML(content)
