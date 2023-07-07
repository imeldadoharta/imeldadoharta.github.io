import React, { useState } from "react"
import KirimNamaChild from "./kirimdatanamachild";

const KirimNama = (props) => {
    const[data,setFirstname]=useState({
        firstname:'Keanu',
        lastname:'Reaves'
    })

    
  return (
    <div>
      <KirimNamaChild data={data}/>
    </div>
  )
};

export default KirimNama;
