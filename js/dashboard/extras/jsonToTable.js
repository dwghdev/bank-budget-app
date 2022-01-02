import { copyText } from '../../utils/helpers.js'
import * as dom from '../../utils/dom.js'

const jsonTable = (data, container) => { 
  const table = dom.create('table')
  const thead = table.createTHead()
  const col = Object.keys(data[0])
  const tbody = table.createTBody()

  let tr = dom.create('tr')                  
  col.forEach(i => tr.innerHTML += '<th>'+i+'</th>')
  thead.append(tr)

  for (let i = 0; i < data.length; i++) {
    let row = dom.create('tr')
    for (let j = 0; j < col.length; j++) {
      const cell = row.insertCell(-1)
      cell.textContent = data[i][col[j]]
      //cell.addEventListener('click', copyText)
    }
    tbody.append(row)
  }

  return table
}

export { jsonTable }