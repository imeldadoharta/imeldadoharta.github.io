import React from "react"
import InputForm from "./inputform";

// import Pembagian from "./pembagian";
// import Pengurangan from "./pengurangan";
// import Penjumlahan from "./penjumlahan";
// import Perkalian from "./perkalian";

const Calculator = () => {


    return (
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
        <InputForm/>
       
          {/* <Penjumlahan />
          <Pengurangan />
          <Pembagian />
          <Perkalian /> */}
         
         </div>
            </div>



          </div>

        </section>

      </main>
    )
};

export default Calculator;
