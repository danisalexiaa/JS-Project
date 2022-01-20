import { useEffect, useState } from 'react'
import './ProductForm.css'

function ProductForm (props) {
  const { onAdd } = props
  const [denumire, setDenumire] = useState('')
  const [categorie, setCategorie] = useState('')
  const [data, setData] = useState('')
  const [type, setType] = useState('')

  const options = [{
    label: 'regular',
    value: 'regular'
  }, {
    label: 'urgent',
    value: 'urgent'
  }]

  const addProduct = (evt) => {
    let category = categorie;
    let expirationDate = data;
    console.log(type);
    onAdd({
      denumire,
      category,
      expirationDate,
      type
    })
  }

  useEffect(()=>{
    setType(options[0].value);
  },[]);

  return (
    <div className='product-form'>
      <div className='productname'>
        <input type='text' placeholder='denumire produs' onChange={(evt) => setDenumire(evt.target.value)} />
      </div>
      <div className='productcategorie'>
        <input type='text' placeholder='categorie' onChange={(evt) => setCategorie(evt.target.value)} />
      </div>
      <div className='productexpirare'>
        <input type='text' placeholder='data de expirare' onChange={(evt) => setData(evt.target.value)} />
      </div>
      <div className='type'>
        <select onChange={(evt) => setType(evt.target.value)}>
          {
            options.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))
          }
        </select>
      </div>
      <div className='add'>
        <input type='button' value='Adauga produs in lista' onClick={addProduct} />
      </div>
    </div>
  )
}

export default ProductForm;