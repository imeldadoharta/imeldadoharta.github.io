import React, { useRef, useState,useEffect } from "react"
const Example = () => {
  const [name, setName] = useState("imelda")
  const inputRef = useRef()
  useEffect(() => {
    inputRef.current.focus()
   
  },[])
  return(
    <main id="main" class="main">

      <div class="pagetitle">
        <h1>Dashboard</h1>
        <nav>
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
            <li class="breadcrumb-item active">Dashboard</li>
          </ol>
        </nav>
      </div>

      <section class="section dashboard">
        <div class="row">


          <div class="col-lg-12">
            <div class="row">
            <h3>{name}</h3>
     <input
    type="text"
    ref={inputRef}
    value={name}
    placeholer="name"
  />
      </div>
            </div>



          </div>

        </section>

      </main>
   
  )
}
export default Example