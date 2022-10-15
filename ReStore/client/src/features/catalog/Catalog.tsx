import { useState, useEffect } from "react";

import { Product } from "../../app/models/product"
import ProductList from "./ProductList";

// {products, addProduct} --> this is called destructuring so you don't need to use props like this before
// export default function Catalog(props: Props) {... and do something like props.products.map
export default function Catalog() {
    // Use state
    const [products, setProducts] = useState<Product[]>([]);

    // Adding the empty array dependency here is important as this will prevent
    // the infinite call to api.  What will happen when there is no dependency is
    // every time the state (on this case) is updated and will cause to re-render
    // useEffect hook will trigger again if there is no dependency
    useEffect(() => {
        fetch('http://localhost:5000/api/products')
            .then(response => response.json())
            .then(data => setProducts(data))
    }, [])

    return (
        // this is empty tag is the equivalent of using frament
        // <Fragment> is use when you wanted to wrap the child elements as this
        // fragment wont be rendered in DOM.
        <>
            <ProductList products={products} />
        </>
    )
}
