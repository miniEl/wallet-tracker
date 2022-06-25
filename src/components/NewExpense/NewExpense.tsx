import { useState } from 'react';
import Modal from '../UI/Modal/Modal';
import AddExpense from './AddExpense/AddExpense';
import './NewExpense.scss';

const NewExpense = () => {
  const [isOpen, setIsOpen] = useState(false);

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
        // action='submit'
        >
          <AddExpense setIsOpen={setIsOpen} />
        </Modal>
      }
    </div>
  );
}

export default NewExpense;