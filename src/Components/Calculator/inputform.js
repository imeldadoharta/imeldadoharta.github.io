import React, { useState } from "react"
import Operation from "./operation";

const InputForm = () => {
    const [jumlah, setJumlah] = useState({
        angka1: '',
        angka2: ''
    })

    const handleAngka1InputChange = (event) => {
        event.persist();
          
        setJumlah((previousState) => ({
            ...previousState,
        angka1 : event.target.value,
        }));
    }

    const handleAngka2InputChange = (event) => {
        event.persist();
        setJumlah((previousState) => ({
            ...previousState,
            angka2: event.target.value,
        }));
    }
    const data={angka1:jumlah.angka1,angka2:jumlah.angka2}

    return (
        <div>
            <br></br>
            <input type="text" name='angka1' placeholder="Enter number.." value={jumlah.angka1} onChange={handleAngka1InputChange} />
            <input type="text" name='angka2' placeholder="Enter number.." value={jumlah.angka2} onChange={handleAngka2InputChange} />
            <Operation data={data}/>
        </div>
    )
};

export default InputForm;
