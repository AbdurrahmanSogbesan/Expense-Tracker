import React from "react";
import "./ExpenseCard.css";

function ExpenseCard({ text, amount }) {
  let selectedClass = "expenseCard";
  if (amount < 0) {
    selectedClass += " redBorder";
  }

  return (
    <div className={selectedClass}>
      <span>{text}</span>
      <span>{amount}</span>
    </div>
  );
}

export default ExpenseCard;
