import './UrgentProduct.css'

function Product (props) {
  const { item } = props

  return (
    <div className='urgent-product'>
      <div className='denumire'>
        {item.denumire}
      </div>
      <div className='categorie'>
        {item.category}
      </div>
      <div className='expirare'>
        {item.expirationDate}
      </div>
      Urgent product
    </div>
  )
}

export default Product