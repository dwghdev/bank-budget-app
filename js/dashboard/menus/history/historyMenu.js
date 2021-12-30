import { cards } from './cards.js'
import MyHTML from '../../../utils/MyHTML.js'
import MenuHTML from '../../html/MenuHTML.js'

const getButtons = () => {
  const list = ['All', 'Deposit', 'Withdraw', 'Transfer', 'Expense']
  const html = list.map((button, i) => {
    const isActive = (i === 0) ? ' active' : ''
    return `<button class="btn${isActive}">${button}</button>`
  })

  return html
}

const buttons = new MyHTML({
  id: 'buttons',
  inner: getButtons()
}).string

const historyMenu = new MenuHTML({ 
  id: 'historyMenu', 
  title: 'Transaction History',
  inner: [buttons, cards]
})

export { historyMenu }
