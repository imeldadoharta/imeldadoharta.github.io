import React,{useState} from "react"


const Operation = (props) => {
  
        const [hasil, setHasil] = useState({
        jumlah:'',
        kurang:'',
        kali:'',
        bagi:'',
    })

    const add=( )=>{
        setHasil(( previousState) => ({    
            ...previousState,               
            jumlah: parseInt(props.data.angka1)+parseInt(props.data.angka2)
        }))
    }
    const kurang=( )=>{
        setHasil(( previousState) => ({  
            ...previousState,                 
            kurang: parseInt(props.data.angka1)-parseInt(props.data.angka2)
        }))
    }
    const kali=( )=>{
        setHasil(( previousState) => ({
            ...previousState,                   
            kali: parseInt(props.data.angka1)*parseInt(props.data.angka2)
        }))
    }
    const bagi=( )=>{
        setHasil(( previousState) => ({
            ...previousState,                   
            bagi: parseInt(props.data.angka1)/parseInt(props.data.angka2)
        }))
    }
    return (
        <div>
         
            <h1>Penjumlahan:{hasil.jumlah}</h1>
            <button onClick={add}>Add</button>
            <br/>
            <h1>Pengurangan:{hasil.kurang}</h1>
            <button onClick={kurang}>Kurang</button>
            <br/>
            <h1>Perkalian:{hasil.kali}</h1>
            <button onClick={kali}>Kali</button>
            <br/>
            <h1>Pembagian:{hasil.bagi}</h1>
            <button onClick={bagi}>Bagi</button>


        </div>
    )
};

export default Operation;
