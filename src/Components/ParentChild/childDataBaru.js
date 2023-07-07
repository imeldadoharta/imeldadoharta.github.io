import React, { useEffect, useRef } from "react"
import $ from 'jquery'
 
export default function ChildDataBaru(props) {
 
$.DataTable = require('datatables.net')
const tableRef = useRef()
 
useEffect(() => {
    console.log(tableRef.current)
    const table = $(tableRef.current).DataTable(
        {
            data: props.data,
                columns: [
                    { title: "no"},
                    { title: "emp_id"},
                    { title: "emp_fullname"},
                    { title: "Sisa Cuti"}
                ],
                destroy: true  // I think some clean up is happening here
        }
    )
    // Extra step to do extra clean-up.
    return function() {
        console.log("Table destroyed")
        table.destroy()
    }
},[props.data])
    return (
        <div>
            <table className="display" width="100%" ref={ tableRef }></table>
        </div>
         
    )
}