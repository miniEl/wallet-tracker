import { useState } from 'react';
import Modal from '../UI/Modal/Modal';
import './AddExpense.scss';
import SubmitForm from './SubmitForm/SubmitForm';

const AddExpense = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className='add-expense'>
      <button 
      className='add-expense__add-btn primary-btn' 
      onClick={() => setIsOpen(true)}>
        add expense
      </button>
      {
        isOpen && 
        <Modal 
        className='add-new-expense' 
        setIsOpen={setIsOpen} 
        title='Add Expense'
        action='submit'>
          <SubmitForm />
        </Modal>
      }
    </div>
  );
}

export default AddExpense;