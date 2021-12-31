export const inner =   `
<div class="main">
    <div class="container">
      <div class="topbar">
        <p class="text">Your current balance</p>
        <p class="amount_holder">
          <span id="currency">$</span>
          <span id="balance">500</span>
        </p>
      </div>
      <div class="form">
        <p>Add transaction</p>
        <div class="form-control">
          <label for="amount">Amount</label>
          <input type="number" name="amount" id="amount" />
        </div>
        <div class="form-control">
          <label for="name">Description</label>
          <input type="text" name="name" id="name" />
        </div>
        <div class="form-control">
          <label for="type">Type</label>
          <div class="radio">
            <input type="radio" name="type" id="income" checked />
            <label for="radio">Income</label>
          </div>
          <div class="radio">
            <input type="radio" name="type" id="expense" />
            <label for="radio">Expense</label>
          </div>
        </div>

        <button class="btn" id="save">Save</button>
        <button class="btn" id="cancel">Cancel</button>
      </div>

      <p>Budget List</p>
      <ul id="list_of_transactions">
        <li class="transaction income">
          <p>Income 1</p>
          <div class="right_side">
            <p>$300</p>
            <button>edit</button>
            <button>delete</button>
          </div>
        </li>

        <li class="transaction expense">
          <p>Expense 1</p>
          <div class="right_side">
            <p>$100</p>
            <button>edit</button>
            <button>delete</button>
          </div>
        </li>
      </ul>
    </div>
  </div>`
