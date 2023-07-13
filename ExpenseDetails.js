import './ExpenseItem.css'

const ExpenseDetails = (props) => {
    return(
        <div className='expense-item__description'>
            <h2>{props.title} - {props.location}</h2>
            <div className='expense-item__price'>{props.amount}</div>
        </div>
    )
}

export default ExpenseDetails