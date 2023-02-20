import { useState } from "react";
import { patchProduct } from "../utils/utils";

function Product({product}) {
    const [newProduct, setNewProduct] = useState(product)

    return <form onSubmit={(event) => {
        event.preventDefault();
        patchProduct(newProduct).then((patchedProduct => {
            console.log("done")
            setNewProduct(patchedProduct)
        })).catch(e => console.log(e));
    }}>
        <input className="big-input" value={newProduct.product} onChange={(event) => {
            setNewProduct((currProduct) => {
                const temp = {...currProduct}

                temp.product = event.target.value;

                return temp;
            })
        }}/>
        <input className="small__input" value={newProduct.type} onChange={(event) => {
            setNewProduct((currProduct) => {
                const temp = {...currProduct}

                temp.type = event.target.value;

                return temp;
            })
        }}/>
        <input className="small__input" value={newProduct.price} onChange={(event) => {
            setNewProduct((currProduct) => {
                const temp = {...currProduct}

                temp.price = event.target.value;

                return temp;
            })
        }}/>
        <button type="submit">Change</button>
    </form>
}

export default Product;