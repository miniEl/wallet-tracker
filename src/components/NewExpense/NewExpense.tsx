import { useRef, useState } from 'react';
import Modal from '../UI/Modal/Modal';
import ExpenseForm from './ExpenseForm/ExpenseForm';
import './NewExpense.scss';

const NewExpense = () => {
  const [isOpen, setIsOpen] = useState(false);
  const callChildFunc = useRef<any | null>();

  return (
    <div className='new-expense'>
      <button 
      className='new-expense__btn primary-btn' 
      onClick={() => setIsOpen(true)}>
        add expense
      </button>
      {
        isOpen && 
        <Modal 
        className='add-new-expense' 
        setIsOpen={setIsOpen} 
        title='Add Expense'
        action='submit'
        callChildFunc={callChildFunc}
        >
          <ExpenseForm 
          setIsOpen={setIsOpen} 
          callChildFunc={callChildFunc} />
        </Modal>
      }
    </div>
  );
}

export default NewExpense;