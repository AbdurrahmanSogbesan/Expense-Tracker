import React from "react";
import "./Expenses.css";

function Expenses({ expenseAmount, incomeAmount }) {
  return (
    <div className="expenses">
      <div className="expenses__left">
        <span>Income</span>
        <p>${incomeAmount}</p>
      </div>
      <hr />
      <div className="expenses__right">
        <span>Expense</span>
        <p>${expenseAmount}</p>
      </div>
    </div>
  );
}

export default Expenses;
