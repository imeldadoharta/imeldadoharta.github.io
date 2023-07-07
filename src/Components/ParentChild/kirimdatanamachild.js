import React from "react"
import KirimNama from "./kirimdatanama";

const KirimNamaChild = (props) => {
  return (
    <div>
       
      <h2>FirstName Karyawan adalah : {props.data.firstname}</h2>
      <h2>LastName Karyawan adalah : {props.data.lastname}</h2>
    </div>
  )
};

export default KirimNamaChild;
