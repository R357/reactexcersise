import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function ArrayDisplay2(){
  let arrayData =[ "heloo","hi","bywee"];

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
    <p>Integer is {integer_x}</p>
    <p>String is {string_x}</p>
    <p>Boolean is {Boolean_x}</p>
    <p> array below : </p>
    { arrayDisplayelement }
    <ArrayDisplay2 />
    </>

  )
}

export default App
