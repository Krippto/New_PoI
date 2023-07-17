import './ExpenseItem.css'

const ExpenseDetails = (props) => {
    return(
        <div className='expense-item__description'>
            <h2>{props.title} - {props.location}</h2>
            <div className='expense-item__price'>${props.amount}</div>
            <button className='expense-item__price' onClick={()=>{console.log("Clicked!!!!")}}>Delete</button>
        </div>
    )
}

export default ExpenseDetails