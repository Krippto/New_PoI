import { useState } from "react"

const AddProduct = () =>{

    let array = []
    const prodObj = {prodId:'', price:'', prod:''}
    const [name, setName] = useState(prodObj)

    const submitHandler = (event) =>{
        event.preventDefault()
        const obj = JSON.stringify(name)
        localStorage.setItem(name.prodId, obj)
        array.push(name)
        console.log(array)
    }
    const productIdtHandler = (event) =>{
        // event.preventDefault()
        const prodId = event.target.value
        const namevalue = event.target.name
        setName({...name,[namevalue]:prodId})
    }
    const priceHandler = (event) =>{
        // event.preventDefault()
        const price = event.target.value
        const namevalue = event.target.name
        setName({...name,[namevalue]:price})
    }
    const productHandler = (event) =>{
        // event.preventDefault()
        const prod = event.target.value
        const namevalue = event.target.name
        setName({...name,[namevalue]:prod})
    }

    return (
        <form onSubmit={submitHandler}>
            <label>Product ID: </label>
            <input type="text" name="prodId" onChange={productIdtHandler} value={name.prodId}></input>
            <label>Selling Price: </label>
            <input type="text" name="price" onChange={priceHandler} value={name.price}></input>
            <label>Product Name: </label>
            <input type="text" name="prod" onChange={productHandler} value={name.prod}></input>
            <button type="submit">Add Product</button>
        </form>
    )
}

export default AddProduct