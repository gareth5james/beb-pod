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
        })
          .catch((error) => console.log(error, "ERROR"));
        setIsLoading(false);
      }, []);

    const fees = feesTable;
    const newPatient = fees[0] || {column1: "", column2: "", column3: ""}
    
    return <main className="fees">
        {isLoading ? <p>Loading...</p> : <table className="fees__table">
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
        <p><b>* Your first appointment lasts approx. one hour</b> and includes a full podiatry check and initial treatment. Some conditions such as toenail surgery, Lacuna anti fungal nail treatment or orthoses fitting etc will require another appointment.</p>
        <p>Baseline check:</p>
        <ol className="new__patient__list">
            <li>Circulatory - your podiatrist will feel for the pulses in your feet then listen to them with a Doppler (ultrasound) machine. They will assess your foot temperature and colour.</li>
            <li>Neurological - A 10g monofilament will be applied to specific areas of your feet to check you ability to feel light touch then a 128hz tuning fork is placed on the end of your big toe and ankle bone to assess how well your nerves are sending messages to your brain which can affect your balance or indicate health issues.</li>
            <li>MSK - your podiatrist will check for any structural anomalies in your feet and legs such as a difference in the length of your legs, flat feet, misaligned knees etc. This will tell us how your foot/leg position is affecting your stance and gait which can lead to pathology.</li>
            <li>Medical health check - you will be asked to provide details of your general health, GP, tablets and supplements (please bring a list with you) you take. This enables us to ensure we provide the safest treatment tailored to your needs.</li>
        </ol>
        <p>Should your podiatrist find any anomalies, they will discuss them with you and develop a treatment plan to address and resolve. If an issue is found that is outside our scope of practice, such as a heart problem or diabetes, we will, with your permission, refer you onto the relevant health professional (usually via your GP) who deals with that particular area of health.</p>
        <Link to="/login">Login</Link>
    </main>
}

export default Fees;