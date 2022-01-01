import { transactionMenu } from '../menus/transaction/transactionMenu.js'
import { transferMenu } from '../menus/transfer/transferMenu.js'
import { settingsMenu } from '../menus/settings/settingsMenu.js'
import { scheduleMenu } from '../menus/schedule/scheduleMenu.js'
import { accountsMenu } from '../menus/accounts/accountsMenu.js'
import { historyMenu } from '../menus/history/historyMenu.js'
import { budgetMenu } from '../menus/budget/budgetMenu.js'
import { chartMenu } from '../menus/chart/chartMenu.js'
import { mainMenu } from '../menus/main/mainMenu.js'

export const sidebarLabels = [
  {
    text: 'Dashboard',
    icon: 'fas fa-th-large',
    menu: mainMenu.html
  },
  {
    text: 'Transaction',
    icon: 'far fa-credit-card',
    menu: transactionMenu.html
  },
  {
    text: 'Transfer',
    icon: 'fas fa-hand-holding-usd',
    menu: transferMenu.html
  },
  {
    text: 'Budget',
    icon: 'fas fa-wallet',
    menu: budgetMenu.html
  },
  {
    text: 'Schedule',
    icon: 'fas fa-calendar-alt',
    menu: scheduleMenu.html
  },
  {
    text: 'History',
    icon: 'fas fa-search-dollar',
    menu: historyMenu.html
  },
  {
    text: 'Chart',
    icon: 'fas fa-chart-bar',
    menu: chartMenu.html
  },
  {
    id: 'accountsLink',
    text: 'Accounts',
    icon: 'fas fa-users',
    menu: accountsMenu.html
  },
  {
    text: 'Setting',
    icon: 'fas fa-user-cog',
    menu: settingsMenu.html
  },
  {
    text: 'Logout',
    icon: 'fas fa-sign-out-alt',
    menu: 'logout'
  }
]
