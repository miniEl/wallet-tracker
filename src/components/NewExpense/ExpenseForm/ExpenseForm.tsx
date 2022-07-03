import ExpenseFormService from './ExpenseFormService';
import './ExpenseForm.scss'
import { useEffect } from 'react';

const ExpenseForm = (props: any) => {
  const {currencyList, register, handleSubmit, errors, onSubmit} = ExpenseFormService();
  console.log(props);
  

  useEffect(() => {
    console.log('eee', props);
    props.callChildFunc.current = handleSubmit(onSubmit);
  });

  return (
    <div className='expense-form'>
      <form onSubmit={handleSubmit(onSubmit)}>

      <div className='flex-wrap'>
        <div className='expense-form__group'>
          <label 
            htmlFor='title' 
            className='expense-form__label'>
            title
          </label>

          <div className='expense-form__feild-wrapper shadow-sm'>
            <input 
              id='title'
              type='text' 
              placeholder='ex. shoes' 
              className='expense-form__input w-full'
              {...register('title')} 
            />
          </div>
        </div>


        <div className='expense-form__group'>
          <label 
            htmlFor='amount' 
            className='expense-form__label'>
            amount
          </label>
          <div className='expense-form__feild-wrapper shadow-sm'>
            <input 
                id='amount'
                type='text' 
                placeholder='0.00' 
                className='expense-form__input w-full'
                min='0.01'
                step='0.01'
                {...register('amount')} />

            <div className='expense-form__currency'>
              <label htmlFor='currency' className='sr-only hidden'>currency</label>
              <select 
              id='currency' 
              className='expense-form__currency h-full focus:ring-indigo-500'
              {...register('currency')}>
                  {
                    currencyList.map((item: any) => (
                      <option key={item} value={item}>{item}</option>
                    ))
                  }
              </select>
            </div>
            <p>{errors.amount?.message}</p>
          </div>
        </div>

        <div className='expense-form__group'>
          <label 
            htmlFor='date' 
            className='expense-form__label'>
            title
          </label>

          <div className='expense-form__feild-wrapper shadow-sm'>
            <input 
              id='date'
              type='text' 
              placeholder='20/03/22' 
              className='expense-form__input w-full'
              {...register('date')} 
            />
          </div>
        </div>
      </div>

      </form>
    </div>
  );
}

export default ExpenseForm;