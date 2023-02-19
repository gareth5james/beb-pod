import { useState } from "react";

function AddFee() {
    const [newFee, setNewFee] = useState({column1: "", column2: "", column3: ""})

    return <form onSubmit={(event) => {
        event.preventDefault();
        
    }}>
        <input value={newFee.column1} onChange={(event) => {
            setNewFee((currFee) => {
                const temp = {...currFee}

                temp.column1 = event.target.value;

                return temp;
            })
        }}/>
        <input value={newFee.column2} onChange={(event) => {
            setNewFee((currFee) => {
                const temp = {...currFee}

                temp.column2 = event.target.value;

                return temp;
            })
        }}/>
        <input value={newFee.column3} onChange={(event) => {
            setNewFee((currFee) => {
                const temp = {...currFee}

                temp.column3 = event.target.value;

                return temp;
            })
        }}/>
        <button type="submit">Add</button>
    </form>
}

export default AddFee;