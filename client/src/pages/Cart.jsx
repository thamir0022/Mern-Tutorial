import React, { useEffect, useState } from 'react'

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const getCart = async () => {
      const res = await fetch('/api/user/get-cart');
      if(res.ok){
        const data = await res.json();
        setCart(data.cart);
      }
    }
    getCart();
  }, []);

  const handleDelete = async (productId) => {
    const res = await fetch('/api/user/delete-cart-product', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({productId})
    })

    if(res.ok){
      setCart(cart.filter(product => product.product._id.toString() !== productId))
    }
  }

  return (
    <section>
      <h1 className='text-3xl my-10 text-center'>Your Cart</h1>
      <div className="w-full px-10 py-20 flex  flex-col justify-center items-center gap-10">
        {cart?.length > 0 ? (
         <>
          {cart.map((product) => {
            return (
              <div className="h-96 w-full mx-auto rounded-md shadow-lg border border-black flex items-center  justify-evenly text-2xl font-semibold">
              <img className='h-52' src={product.product.image} alt="" />
              <span>{product.product.name}</span>
              <span>{product.product.price.toLocaleString('en-IN', {maximumFractionDigits: 2, style: 'currency', currency: 'INR'})}</span>
              <span>{product.quantity}</span>
              <button onClick={() => handleDelete(product.product._id)} className='px-5 py-3 bg-red-500 text-white rounded-md shadow-lg'>Delete</button>
            </div>
            )
          })}
          <button className='w-1/3 bg-blue-500 px-10 py-5 rounded-md text-white font-semibold text-xl'>Checkout</button>
         </>
        ): (
          <div className="text-2xl font-semibold">Your Cart Is Empty!</div>
        )}
      </div>
    </section>
  )
}

export default Cart