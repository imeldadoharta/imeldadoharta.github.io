import React, {useState}  from 'react'
import ChildComponent from './ChildComponent'

const ParentComponent = () => {

    const [message,setAnswer] = useState("")
    const setQuiz = (quiz) =>{
        if (quiz === 'react') {
            setAnswer(`your answer ${quiz} is true`)
        }
        else {
            setAnswer(`your answer ${quiz} is false`)
        }
    }
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
        <ChildComponent
        yourAnswer = {message}
        onQuiz = {setQuiz}
        />
      </div>
            </div>



          </div>

        </section>

      </main>

  )
}

export default ParentComponent;
