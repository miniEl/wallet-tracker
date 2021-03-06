import useCurrencyFormatter from '../../../Helpers/useCurrencyFormatter';
import './ExpenseItem.scss';

const ExpenseItem = (props: any) => {

  const amount = useCurrencyFormatter('usd', props.amount);

  return (
    <div className='expense-item'>
      <div className='expense-item__details'>
        <h4>{props.title}</h4>
        <div className='align-right'>
        <div className='expense-item__amount'>{amount}</div>
        <div className='expense-item__date secondary-txt'>{props.date}</div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseItem;
