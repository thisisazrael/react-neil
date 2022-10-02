import { Avatar, Button, List, ListItemAvatar, ListItemText } from "@mui/material";
import ListItem from "@mui/material/ListItem";

import { Product } from "../../app/models/product"

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
            <List>
                {products.map(product => (
                    <ListItem key={product.id}>
                        <ListItemAvatar>
                            <Avatar src={product.pictureUrl} />
                        </ListItemAvatar>
                        <ListItemText>
                            {product.name} - {product.price}
                        </ListItemText>
                    </ListItem>
                ))}
            </List>
            <Button variant="contained" onClick={addProduct}>Add Product</Button>
        </>
    )
}
