import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function ArrayDisplay2(){
  let arrayData =[ "heloo","hi","bywee"];
  // ==> HTML code to replicate the nike 
  // ==> CSS write by yourdrlf to replkicate hte nike 
  // ==> to replace the use of css with tailWind CSS 
  // ==> to understand how to use UseState
  // to Understand how to use UseRef and other react hooks
  // then constructr ypour own small apps and websites - spa ( single page applications )


  let jsxEle = arrayData.map((item , i)=>{
    return <p key={i}> {item}</p>
  })

  return <>
  <hr />
  {jsxEle}
  <hr /></>
}

function App() {
  let integer_x=10;
  let string_x="hello"
  let Boolean_x=false
  let y=([12,23,34,56]);

  const arrayDisplayelement = y.map(( item , index)=>{
    return <p key={index}> {item}</p>
  })

  

  return (
    <>
    <h1> Displaying all datatypes</h1>
    <p>Integer is {integer_x}</p>
    <p>String is {string_x}</p>
    <p>Boolean is {Boolean_x}</p>
    <p> array below : </p>
    { arrayDisplayelement }
    <ArrayDisplay2 />
    <h2>Footer belowe to be made </h2>
    </>

  )
}

export default App
