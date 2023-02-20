import { useEffect, useState } from "react";
import { getFees, getProducts } from "../utils/utils";
import Fee from "./Fee"
import Product from "./Product"

function Admin ({isLoading, setIsLoading}) {
    const [newFees, setNewFees] = useState([])
    const [newProducts, setNewProducts] = useState([])
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        setIsLoading(true);
        setIsError(false);
        getFees()
          .then((gotFees) => {
            setNewFees(gotFees)
        }).then(() => getProducts()).then((gotProducts) => {
            setIsLoading(false);
            setNewProducts(gotProducts)
        })
          .catch((error) => {
            setIsLoading(false);
            setIsError(true)
        });
    }, [])

    return <main>
        {isLoading ? <p>Loading...</p> : isError ? <p>Something went wrong, please try again</p> : <section className="set__fees">
            <p>FEES</p>
            {newFees.map(fee =><Fee fee={fee} key={fee.fees_id}/>)}
            </section>}
            {isLoading ? <p>Loading...</p> : isError ? <p>Something went wrong, please try again</p> : <section className="set__products">
            <p>PRODUCTS</p>
            {newProducts.map(product =><Product product={product} key={product.products_id}/>)}
            </section>}
    </main>
}

export default Admin;