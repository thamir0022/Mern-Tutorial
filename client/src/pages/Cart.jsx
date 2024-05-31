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

  useEffect(() => {
    // Calculate total amount when cart products change
    if (cart.length > 0) {
      const total = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
      setTotal(total);
    } else {
      setTotal(0);
    }
  }, [cart]);

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

const handleQuantityUpdate = async (productId, operation) => {
  try {
    const res = await fetch(`/api/user/update-cart-product-quantity/${productId}/${operation}`, {
      headers: {
        'Content-Type': 'application/json'
      }, 
      method: 'PATCH'
    })
    if(res.ok){
      setCart(prevCart => {
        return prevCart.map(product => {
          if (product.product._id === productId) {
            let newQuantity;
            if (operation === 'inc' && product.quantity < 10) {
              newQuantity = product.quantity + 1;
            } else if (operation === 'dec' && product.quantity > 1) {
              newQuantity = product.quantity - 1;
            } else {
              // If the quantity is already at the limit, do not change it
              newQuantity = product.quantity;
            }
            return { ...product, quantity: newQuantity };
          } else {
            return product;
          }
        });
      });
      
    }
  } catch (error) {
    console.log(error);
  }
}

  return (
    <section>
      {cart?.length > 0 && <h1 className='text-4xl mt-10 text-center font-semibold'>Your Cart</h1> }
      <div className="w-full min-h-[calc(100vh-6rem)] px-10 py-10 flex  flex-col justify-center items-center gap-10">
        {cart?.length > 0 ? (
         <>
          {cart.map((product) => {
            return (
              <div className="h-96 w-full mx-auto rounded-md shadow-xl  flex items-center  justify-evenly">
              <img className='h-60' src={product.product.image} alt="" />
              <div className="flex flex-col gap-2">
                <span className='text-xl text-center text-gray-500'>Item Name</span>
                <span className='text-2xl font-semibold'>{product.product.name}</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className='text-xl text-center text-gray-500'>Amount</span>
                <span className='text-2xl font-semibold'>{(product.product.price * product.quantity).toLocaleString('en-IN', {maximumFractionDigits: 2, style: 'currency', currency: 'INR'})}</span>
              </div>
              <div className="w-1/6 flex flex-col gap-2">
                <span className='text-xl text-center text-gray-500'>Quantity</span>
                <div className="flex justify-evenly items-center">
                  <button onClick={() => handleQuantityUpdate(product.product._id, 'inc')} className='px-3 py-2 bg-gray-300 rounded-md text-3xl'>+</button>
                  <span className='text-2xl text-center font-semibold'>{product.quantity}</span>
                  <button onClick={() => handleQuantityUpdate(product.product._id, 'dec')}  className='px-4 py-2 bg-gray-300 rounded-md text-3xl'>-</button>
                </div>
              </div>
              <button onClick={() => handleDelete(product.product._id)} className='px-5 py-3 bg-red-500 text-white rounded-md shadow-lg'>Delete</button>
            </div>
            )
          })}
          <div className="text-3xl font-semibold">Total Amount  {total.toLocaleString('en-IN', {maximumFractionDigits: 2, style: 'currency', currency: 'INR'})}</div>
          <button className='w-1/3 bg-blue-500 px-10 py-5 rounded-md text-white font-semibold text-xl'>Checkout</button>
         </>
        ): (
          <div className="text-2xl font-semibold text-gray-400">Your Cart Is Empty!</div>
        )}
      </div>
    </section>
  )
}

export default Cart