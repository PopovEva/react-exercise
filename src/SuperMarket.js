import React, { useState } from 'react'

const SuperMarket = () => {
    const [cart, setcart] = useState([])
    const [product, setproduct] = useState("")
    const [amount, setamount] = useState(1)
  return (
    <div>
        <h1>SuperMarket:</h1>
        Whrite product: <input on onChange={(e)=> setproduct(e.target.value)}/>
        Choose amount: <input on onChange={(e)=> setamount(e.target.value)}/>
        <button 
                onClick={()=> setcart([...cart,{product, amount}])} 
            >
                Add to cart
            </button>
        <h1>Cart:</h1> 
        {cart.length>0 ? <h1>product: {cart.map(pro=> <div>{pro.product} x {pro.amount}</div>)}</h1>:<h3>Yuor cart is empty</h3>}
    </div>
  )
}

export default SuperMarket
