import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getAllProducts = async () => {
      const res = await fetch('/api/user/products');
      if(res.ok){
        const data = await res.json();
       setProducts(data.allProducts)
      }
    }
    getAllProducts();
  },[]);

  const addToCart = async (productId) => {
    try {
      const res = await fetch('/api/user/add-to-cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({productId})
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section>
      <Hero/>
      <div className="w-full px-6 py-10 flex flex-wrap gap-6 justify-center">
        {products?.length > 0 && products.map((product) => (
          <div className="w-[400px] h-[550px]  flex flex-col  rounded-2xl shadow-md items-center">
              <img className=' p-5 h-1/2' src={product.image} alt={product.name} />
              <span className='text-2xl text-center'>{product.name}</span>
              <div className='w-full flex justify-between'>
                <div className="text-xl">Rating {product.rating}</div>
              </div>
              <span className='text-2xl text-center'>{product.price.toLocaleString('en-IN', {maximumFractionDigits: 2, style: 'currency', currency: 'INR'})}</span>
              <button onClick={() => addToCart(product._id)} className='w-3/4 bg-blue-500 rounded-md shadow-md text-white font-semibold p-5'>Add to cart</button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default HomePage