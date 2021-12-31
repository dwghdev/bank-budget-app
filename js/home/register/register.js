import { getStoredAccounts } from '../../utils/storage.js'
import { getValidInput } from './validInput.js'
import { typingCheck } from './typingCheck.js'
import { addAccount } from './addAccount.js'
import * as DOM from '../../utils/dom.js'

const callback = e => {
  e.preventDefault()
  const form = e.target 

  const fullname = form.fullname
  const password = form.password
  const email = form.email
  const mobile = form.mobile
  const confirmPassword = form.confirmPassword

  if (getValidInput(fullname)
    && getValidInput(email)
    && getValidInput(mobile)
    && getValidInput(password)
    && getValidInput(confirmPassword) === getValidInput(password)) {
      addAccount(form)
      console.log('Registered!')
  } else 
    console.log('INVALID!')
}

const register = () => {
  typingCheck()
  const form = DOM.get('#signUpForm')
  form.addEventListener('submit', callback)   
}

export { register }
