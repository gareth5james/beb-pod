import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getFees, getProducts } from "../utils/utils";

function Fees({feesTable, setFeesTable, isLoading, setIsLoading, productsTable, setProductsTable}) {
    useEffect(() => {
        setIsLoading(true);
        getFees()
          .then((gotFees) => {
            setFeesTable(gotFees)
        }).then(() => getProducts()).then((gotProducts) => {
            setProductsTable(gotProducts)
            setIsLoading(false);
        })
          .catch((error) => {
            setIsLoading(false);
            console.log(error, "ERROR")}
            );
      }, []);

    const fees = feesTable;
    const newPatient = fees[0] || {column1: "", column2: "", column3: ""}
    
    return <main className="fees">
        {isLoading  === true ? <p>Loading...</p> : <table className="fees__table">
            <th colSpan="3"><h2>Fees (2023, subject to change)</h2></th>
            <tbody>
                <tr>
                    <td></td>
                    <td className="mini__header"><b>Clinic</b></td>
                    <td className="mini__header"><b>Home Visit</b></td>
                </tr>
                <tr>
                    <td>{newPatient.column1} * (see bottom of page for details)</td>
                    <td>{newPatient.column2}</td>
                    <td>{newPatient.column3}</td>
                </tr>
                <tr>
                    <td></td>
                    <td className="mini__header"><b>Daytime</b></td>
                    <td className="mini__header"><b>Evening</b></td>
                </tr>
                {fees.slice(1).map(fee => <tr id={fee.fees_id}>
                    {fee.column2 === "" && fee.column3 === "" ? <td><b>{fee.column1}</b></td> : <td>{fee.column1}</td>}
                    <td>{fee.column2}</td>
                    <td>{fee.column3}</td>
                </tr>)}
            </tbody>
        </table>}

        
        {isLoading ? <p>Loading</p> : <table className="products__table">
            <th colSpan="3"><h2>Products</h2></th>
            <tbody>
                {productsTable.map(product => <tr id={product.products_id}>
                    <td><b>{product.product}</b></td>
                    <td>{product.type}</td>
                    <td>{product.price}</td>
                </tr>)}
            </tbody>
        </table>}
        <p>Gift vouchers in designs for various occasions available for all our services and gift bags of products to your choice.</p>
        <p><b>* Your first appointment lasts approx. one hour</b> and includes a general health check (please bring with you a list of all your medication & any supplements you take), a foot health check – the podiatrist will check your circulation, nerve function and Musculo-skeletal status followed by initial treatment. Please note some treatments such as nail surgery, orthoses, Lacuna will require another appointment.</p>
        <p></p>
        <p>Should your podiatrist find any anomalies, they will discuss them with you and develop a treatment plan to address and resolve. If an issue is found that is outside our scope of practice such as a heart problem or diabetes we will; with your permission, refer you onto the relevant health professional (usually via your GP) who deals with that particular area of health.</p>
        <Link to="/login">Login</Link>
    </main>
}

export default Fees;