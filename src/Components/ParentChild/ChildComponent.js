import React, { useState } from 'react'


const ChildComponent = (props) => {
  const[answer,setData]=useState("Hasil quiz:") 

  return (
    <div>
        <h1>Quiz Programming</h1>
        <p>What programming for build cross-platform app?</p>
        <button onClick={()=>props.onQuiz('react')}>React</button>
        <button onClick={()=>props.onQuiz('python')}>Python</button>
        <button onClick={()=>props.onQuiz('golang')}>Golang</button>
        <h2>{answer+' '+props.yourAnswer}</h2>
        {/* <h2>{answer}</h2> */}
    </div>
  )
}
export default ChildComponent;