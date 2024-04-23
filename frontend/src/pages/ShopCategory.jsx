import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../context/ShopContext'
import dropdown_icon from '../components/Assets/dropdown_icon.png'
import Item from '../components/Item/Item'

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext)

  const filteredProducts = all_product.filter((item) => item.category === props.category);
  console.log('Filtered products:', filteredProducts);

  return (
    <div className='shop-category'>
      
      <div className='shopcategory-indexSort'>
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className='shopcategory-sort'>
          Sort by <img src={dropdown_icon} alt='dropdown_icon' />
        </div>
      </div>
      <div className='shopcategory-products'>
        {all_product
          .filter((item) => item.category === props.category)
          .map((item, i) =>
            <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          )}
      </div>
    </div>
  )
}

export default ShopCategory