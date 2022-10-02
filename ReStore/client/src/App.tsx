import { useEffect, useState } from "react";

function App() {
  // Use state
  const [products, setProducts] = useState([
    { name: 'product1', price: 100.00 },
    { name: 'product2', price: 200.00 }
  ]);

  // Adding the empty array dependency here is important as this will prevent
  // the infinite call to api.  What will happen when there is no dependency is
  // every time the state (on this case) is updated and will cause to re-render
  // useEffect hook will trigger again if there is no dependency
  useEffect(() => {
    fetch('http://localhost:5000/api/products')
    .then(response => response.json())
    .then(data => setProducts(data))
  }, [])

  function addProduct() {
    setProducts(prevState => [...prevState,
    { name: 'product' + (prevState.length + 1), price: (prevState.length * 100) + 100 }])
  }

  return (
    <div>
      <h1>Re-Store</h1>
      <ul>
        {products.map((item, index) => (
          <li key={index}>{item.name} = {item.price}</li>
        ))}
      </ul>
      <button onClick={addProduct}>Add Product</button>
    </div>
  );
}

export default App;
