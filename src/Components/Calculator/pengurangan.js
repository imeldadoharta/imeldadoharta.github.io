import React,{useState} from "react"

const Pengurangan = () => {
    const [jumlah,setJumlah] = useState({
        total:'',
        angka1:'',
        angka2:''
    })
       
    const handleAngka1InputChange = (event) => {
        event.persist();
        setJumlah((previousState ) => ({  
            ...previousState,          
            angka1: event.target.value,
        }));
    }

    const handleAngka2InputChange = (event) => {
        event.persist();
        setJumlah((previousState ) => ({  
            ...previousState,         
            angka2: event.target.value,
        }));
    }

    const add=( )=>{
        setJumlah((previousState ) => ({  
            ...previousState,        
            total: parseInt(jumlah.angka1)-parseInt(jumlah.angka2)
        }))
    }

    return (
      <div>
          <h1>Pengurangan:{jumlah.total}</h1>
          <input type="text" placeholder="Enter number.."  value={jumlah.angka1} onChange={handleAngka1InputChange}/>-
          <input type="text" placeholder="Enter number.."  value={jumlah.angka2} onChange={handleAngka2InputChange}/>
          <button onClick={add}>Add</button>
         
      </div>
    )
};

export default Pengurangan;
