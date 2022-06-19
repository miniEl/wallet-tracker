import Card from "../../UI/Card/Card";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import './ExpenseList.scss';

const ExpenseList = () => {
    const expenses = [{
            id: 1,
            "title": "Sleek Wooden Car",
            "amount": "239.71",
            "date": "28 Mar 22"
        },
        {
            id: 2,
            "title": "Handcrafted Granite Cheese",
            "amount": "42.63",
            "date": "8 Mar 22"
        },
        {
            id: 3,
            "title": "Small Granite Pants",
            "amount": "276.13",
            "date": "2 Feb 22"
        },
        {
            id: 4,
            "title": "Fantastic Rubber Gloves",
            "amount": "405.87",
            "date": "31 Jan 22"
        }
    ];

    return ( 
        <Card className='expense-list'> 
        {
            expenses.map(expense =>
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