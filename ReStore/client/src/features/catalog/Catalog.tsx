import { Button } from "@mui/material";

import { Product } from "../../app/models/product"
import ProductList from "./ProductList";

interface Props {
    products: Product[];
    addProduct: () => void;
}

// {products, addProduct} --> this is called destructuring so you don't need to use props like this before
// export default function Catalog(props: Props) {... and do something like props.products.map
export default function Catalog({products, addProduct}: Props) {
    return (
        // this is empty tag is the equivalent of using frament
        // <Fragment> is use when you wanted to wrap the child elements as this
        // fragment wont be rendered in DOM.
        <>
            <ProductList products={products} />
            <Button variant="contained" onClick={addProduct}>Add Product</Button>
        </>
    )
}
