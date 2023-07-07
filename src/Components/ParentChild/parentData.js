import React, {useState} from "react"
import ChildDataBaru from "./childDataBaru";
//import ChildDataKaryawan from "./childData";

const ParentDataKaryawan = () => {
    const DataKaryawan=[
        {emp_id:101,emp_fullname:'Lex',emp_salary:17000,emp_department:'IT',sisa_cuti:5},
        {emp_id:102,emp_fullname:'Alexander',emp_salary:15000,emp_department:'IT',sisa_cuti:5},
        {emp_id:103,emp_fullname:'Bruce',emp_salary:10000,emp_department:'SALES',sisa_cuti:5},
        {emp_id:104,emp_fullname:'Steven',emp_salary:17000,emp_department:'IT',sisa_cuti:5},
        {emp_id:105,emp_fullname:'Maudya',emp_salary:19000,emp_department:'HR',sisa_cuti:5},
        {emp_id:106,emp_fullname:'Bob',emp_salary:19000,emp_department:'FINANCE',sisa_cuti:5},
        {emp_id:107,emp_fullname:'Sarah',emp_salary:14000,emp_department:'HR',sisa_cuti:5},
        {emp_id:108,emp_fullname:'Xera',emp_salary:20000,emp_department:'SALES',sisa_cuti:5},
        {emp_id:109,emp_fullname:'Neena',emp_salary:25000,emp_department:'IT',sisa_cuti:5},
        {emp_id:110,emp_fullname:'Rose',emp_salary:11000,emp_department:'SALES',sisa_cuti:5},
        {emp_id:101,emp_fullname:'Lex',emp_salary:17000,emp_department:'IT',sisa_cuti:5},
        {emp_id:102,emp_fullname:'Alexander',emp_salary:15000,emp_department:'IT',sisa_cuti:5},
        {emp_id:103,emp_fullname:'Bruce',emp_salary:10000,emp_department:'SALES',sisa_cuti:5},
        {emp_id:104,emp_fullname:'Steven',emp_salary:17000,emp_department:'IT',sisa_cuti:5},
        {emp_id:105,emp_fullname:'Maudya',emp_salary:19000,emp_department:'HR',sisa_cuti:5},
        {emp_id:106,emp_fullname:'Bob',emp_salary:19000,emp_department:'FINANCE',sisa_cuti:5},
        {emp_id:107,emp_fullname:'Sarah',emp_salary:14000,emp_department:'HR',sisa_cuti:5},
        {emp_id:108,emp_fullname:'Xera',emp_salary:20000,emp_department:'SALES',sisa_cuti:5},
        {emp_id:109,emp_fullname:'Neena',emp_salary:25000,emp_department:'IT',sisa_cuti:5},
        {emp_id:110,emp_fullname:'Rose',emp_salary:11000,emp_department:'SALES',sisa_cuti:5}
    ]
    const [data] = useState(DataKaryawan)
  return (
    <div>
      <ChildDataBaru data={data}/>
    </div>
  )
};

export default ParentDataKaryawan;
