import './ExpenseItem.css';

function ExpenseItem() {
  return (
    <div className='expense-item'>
      <div>June 21st 2022</div>
      <div className='expense-item__description'>
        <h2>Food</h2>
        <div className='expense-item__price'>$120.20</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
