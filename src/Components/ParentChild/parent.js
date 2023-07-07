import React, {useState} from "react"
import DataChild from "./child";

const DataKaryawan = () => {
    const [data] = useState({
        firstName : 'Kausal',
        lastName : 'Fradeo'
    })

  return (
    <div>
      <DataChild data={data}
        //   firstName = {data.firstName}
        //   lastName = {data.lastName}
          />
    </div>
  )
};

export default DataKaryawan;
