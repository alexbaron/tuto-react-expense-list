import { useSelector } from "react-redux";
import s from "./style.module.css";
import { setIncome } from "store/expense/expense-slice";
import { useDispatch } from "react-redux";

export function IncomeInput(props) {

  const income = useSelector(store => store.EXPENSE.income);
  const dispatch = useDispatch();

  function updateIncome(evt) {
    const income = evt.target.value;
    console.log(income);
    dispatch(setIncome(income));
  }

  return (
    <div className="row justify-content-center mb-2">
      <div className={`col-6 ${s.label}`}>Income</div>
      <div className="col-6">
        <input type="number"
          defaultValue={income}
          className="form-control"
          placeholder="Ex: 3000"
          onChange={updateIncome} />
      </div>
    </div>
  );
}
