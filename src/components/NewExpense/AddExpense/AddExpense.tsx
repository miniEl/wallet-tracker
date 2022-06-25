import NewExpenseService from '../NewExpenseService';

const AddExpense = (props: any) => {
  const {currencyList, amount, register, handleSubmit, errors, onSubmit} = NewExpenseService();

  return (
    <div className="add-expense">
      <form onSubmit={handleSubmit(onSubmit)}>
        <select {...register('currency')}>
            {
              currencyList.map((item: any) => (
                <option key={item} value={item}>{item}</option>
              ))
            }
          </select>
          <input placeholder='Amount' {...register('amount')}></input>
        <p>{errors.amount?.message}</p>

        <div className="modal-actions-wrapper">
            <div className="actions-container">
              <button
                className='submit-btn'
                type='submit'
              >
               submit
              </button>
              <button
                className="cancel-btn"
                onClick={() => props.setIsOpen(false)}
              >
                cancel
              </button>
            </div>
          </div>
      </form>
      <div>{amount}</div>
    </div>
  );
}

export default AddExpense;