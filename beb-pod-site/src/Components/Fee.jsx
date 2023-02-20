import { useState } from "react";
import { patchFee } from "../utils/utils";

function Fee({fee}) {
    const [newFee, setNewFee] = useState(fee)

    return <form onSubmit={(event) => {
        event.preventDefault();
        patchFee(newFee).then((patchedFee => {
            setNewFee(patchedFee)
        })).catch(e => console.log(e));
    }}>
        <input className="big-input" value={newFee.column1} onChange={(event) => {
            setNewFee((currFee) => {
                const temp = {...currFee}

                temp.column1 = event.target.value;

                return temp;
            })
        }}/>
        <input className="small__input" value={newFee.column2} onChange={(event) => {
            setNewFee((currFee) => {
                const temp = {...currFee}

                temp.column2 = event.target.value;

                return temp;
            })
        }}/>
        <input className="small__input" value={newFee.column3} onChange={(event) => {
            setNewFee((currFee) => {
                const temp = {...currFee}

                temp.column3 = event.target.value;

                return temp;
            })
        }}/>
        <button type="submit">Change</button>
    </form>
}

export default Fee;