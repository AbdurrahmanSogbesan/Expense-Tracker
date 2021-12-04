import "./App.css";
import Expenses from "./Expenses";
import ExpenseCard from "./ExpenseCard";
import { useState } from "react";

function App({ text, amount }) {
  const [inputText, setInputText] = useState("");
  const [inputAmount, setInputAmount] = useState();
  const [expenses, setExpenses] = useState([]);
  const [expenseAmount, setExpenseAmount] = useState(0);
  const [incomeAmount, setIncomeAmount] = useState(0);

  const addExpense = (e) => {
    e.preventDefault();

    const currentExpenses = expenses.slice();
    currentExpenses.push({
      text: inputText,
      amount: inputAmount,
    });

    if (Number(inputAmount) > 0) {
      const newAmount = Number(incomeAmount) + Number(inputAmount);
      setIncomeAmount(newAmount.toFixed(2));
    } else if (Number(inputAmount) < 0) {
      const newAmount =
        Math.abs(Number(expenseAmount)) + Math.abs(Number(inputAmount));
      setExpenseAmount(newAmount.toFixed(2));
    }

    setInputAmount("");
    setInputText("");
    setExpenses(currentExpenses);
  };

  return (
    <div className="app">
      <h1>Expense Tracker</h1>
      <div className="app__balance">
        <span>Your Balance</span>
        <h2>${(incomeAmount - expenseAmount).toFixed(2)}</h2>
      </div>
      <Expenses expenseAmount={expenseAmount} incomeAmount={incomeAmount} />
      <div className="expenseCards">
        <p>History</p>
        <hr />
        <div className="expenseCard__row">
          {expenses.map(({ text, amount }) => (
            <ExpenseCard text={text} amount={amount} />
          ))}
        </div>
      </div>
      <div className="app__transactionInfo__container">
        <p>Add new transaction</p>
        <hr />
        <form onSubmit={addExpense}>
          <div className="app__transactionInfo">
            <span>Text</span>
            <input
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              type="text"
              placeholder="Enter text..."
              required
            />
          </div>
          <div className="app__transactionInfo">
            <span>
              Amount <br />
              (negative - expense, positive - income)
            </span>
            <input
              type="text"
              placeholder="Enter amount..."
              value={inputAmount}
              onChange={(e) => setInputAmount(e.target.value)}
              required
            />
          </div>
          <button>Add transaction</button>
        </form>
      </div>
    </div>
  );
}

export default App;
