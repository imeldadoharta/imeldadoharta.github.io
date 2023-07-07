import React from "react"

const DataChild = (props) => {

  return (
    <div>
      <h2>
              first name : {props.data.firstName}
          </h2>
          <h2>
              last name : {props.data.lastName}
          </h2>
    </div>
  )
};

export default DataChild;
