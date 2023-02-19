import { useEffect, useState } from "react";
import { getFees, getProducts } from "../utils/utils";
import AddFee from "./AddFee";
import Fee from "./Fee"
import Product from "./Product"

function Admin ({isLoading, setIsLoading, feesTable, setFeesTable, productsTable, setProductsTable}) {
    const [newFees, setNewFees] = useState([])
    const [newProducts, setNewProducts] = useState([])

    useEffect(() => {
        setIsLoading(true);
        getFees()
          .then((gotFees) => {
            setNewFees(gotFees)
        }).then(() => getProducts()).then((gotProducts) => {
            setNewProducts(gotProducts)
        })
          .catch((error) => console.log(error, "ERROR"));
        setIsLoading(false);
    }, [])

    return <main>
        {isLoading ? <p>Loading...</p> : <section className="set__fees">
            <p>FEES</p>
            {newFees.map(fee =><Fee fee={fee} key={fee.fees_id}/>)}
            </section>}
        {isLoading ? <p>Loading...</p> : <section className="set__products">
            <p>PRODUCTS</p>
            {newProducts.map(product =><Product product={product} key={product.products_id}/>)}
            </section>}
    </main>
}

export default Admin;