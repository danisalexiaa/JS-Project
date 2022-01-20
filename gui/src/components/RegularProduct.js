import './RegularProduct.css'

function Product (props) {
  const { item } = props

  return (
    <div className='regular-product'>
      <div className='denumire'>
        {item.denumire}
      </div>
      <div className='categorie'>
        {item.category}
      </div>
      <div className='expirare'>
        {item.expirationDate}
      </div>
      Regular product
    </div>
  )
}

export default Product