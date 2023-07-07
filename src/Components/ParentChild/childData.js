import React from "react"
import $ from 'jquery'



const ChildDataKaryawan = (props) => {
    $(document).ready(function () {
        $('#example').DataTable();
    });

    return (
        <div>
           
                <table id="example" class="cell-border" >
                <thead>
                    <tr>
                    <th scope="col">no</th>
                    <th scope="col">Employee Id</th>
                    <th scope="col">Employee Name</th>
                    <th scope="col">SIsa Cuti</th>
                    </tr>
                </thead>
                    {
                props.data.map((key,i) => {
                    return (
                        <tbody>
                        <tr>
                        <td>{i+1}</td>
                        <td>{key.emp_id}</td>
                        <td>{key.emp_fullname}</td>
                        <td>{key.sisa_cuti}</td>
                        </tr>                   
                      
                        </tbody>
                            )
                        })
                    } 
</table>
        
       
    </div >
  )
};

export default ChildDataKaryawan;
