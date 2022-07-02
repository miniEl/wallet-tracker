import { useAppSelector } from "../../../Hooks/reduxHooks";
import Card from "../../UI/Card/Card";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import './ExpenseList.scss';

const ExpenseList = () => {
    const expenses = useAppSelector((state: any) => state.expenseList);
    
    return ( 
         <Card className='expense-list'> 
        {
            expenses.map((expense: any) =>
                <ExpenseItem key = { expense.id }
                title = { expense.title }
                amount = { expense.amount }
                date = { expense.date }
                />
            )
        } 
        </Card>
    );
}

export default ExpenseList;