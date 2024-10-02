import s from "./style.module.css";
import { useSelector } from "react-redux";

export function ExpenseTotal(props) {

  const expenseList = useSelector(store => store.EXPENSE.expenseList);

  let totalExpenses = expenseList.reduce((acc, item) => acc + item.price, 0);

  let remainingMoney = useSelector(store => store.EXPENSE.income) - totalExpenses;

  return (
    <div>
      <div className="row">
        <div className={`col ${s.label}`}>Total expenses</div>
        <div className={`col ${s.amount}`}>{totalExpenses} $</div>
      </div>
      <div className="row">
        <div className={`col ${s.label}`}>Remaining money</div>
        <div className={`col ${s.amount}`}>{remainingMoney} $</div>
      </div>
    </div>
  );
}
