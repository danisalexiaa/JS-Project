import './Product.css'
import RegularProduct from "./RegularProduct";
import UrgentProduct from "./UrgentProduct";

function Product (props) {
  const { item } = props

  
    return (
      <div className='product'>
      {
        item.type === 'regular'
          ? (
            <RegularProduct item={item} />
            )
          : (
            <UrgentProduct item={item} />
            )
      }
    </div>
    )
}

export default Product