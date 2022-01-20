import { useEffect, useState } from "react";
import Product from "./Product";
import ProductForm from "./ProductForm";
import "./ProductList.css";

const SERVER = "http://localhost:3000";

function ProductList(props) {
  const [product, setProduct] = useState([]);
  const [categorie, setCategorie] = useState("");
  const [produseUrgente, setProduseUrgente] = useState([]);
  const [id, setId] = useState();

  const getProducts = async () => {
    const response = await fetch(`${SERVER}/api2/produse`);
    const data = await response.json();
    setProduct(data);
  };

  const addProduct = async (product) => {
    product.UserId=parseInt(id);
    console.log(product);
    await fetch(`${SERVER}/api2/produse`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    })
    getProducts();
  }

  useEffect(() => {
    getProducts();
    avertizareProduse();
  }, []);

  useEffect(() => {
    avertizareProduse();
  }, [product]);

  

  const avertizareProduse = async() => {
    let dataCurenta = new Date();
    setProduseUrgente(product.filter(p => {
      
      let d = new Date(p.expirationDate);
      
      var days = Math.ceil((d.getTime() - dataCurenta.getTime()) / (1000 * 3600 * 24));
      if(days < 30){
        return true;
      }else{
        return false;
      }
    }));
    }


  return (
    <div className="product-list">
      <div className='selectareId'>
        <label htmlFor="userId">ID: </label>
        <input type='text' id="userId" placeholder='id user..' onChange={(evt) => {setId(evt.target.value)}} />
      </div>
      <div className='cautareCategorie'>
      <label htmlFor="userId">Filtrare: </label>
        <input type='text' placeholder='categorie' onChange={(evt) => setCategorie(evt.target.value)} />
      </div>
      <h3>Produsele mele</h3>
      {product.filter((val)=>{
        if(categorie==""){return val}else if(val.category.toLowerCase().includes(categorie.toLocaleLowerCase()))return val;
      }).filter((val)=>{if(val.UserId == id)return val;}).map((e) => (
        <Product key={e.id} item={e} />
      ))}
      <ProductForm onAdd={addProduct}/>
      <h3>Produse expirate/urgente</h3>
      {
        (
          produseUrgente.filter((val)=>{if(val.UserId == id)return val;}).map(e=>(
            <Product key={e.id} item={e}/>
          ))
        )
      }
    </div>
  );
}

export default ProductList;
