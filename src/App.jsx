import { useState, useEffect } from 'react'
import {ChevronUp} from 'react-feather'
import{ChevronsUp} from 'react-feather'
import { RotateCcw } from 'react-feather'
import { ChevronDown } from 'react-feather'
import { ChevronsDown } from 'react-feather'
import {Hash} from 'react-feather'
import './App.css'






function App() {
  const [count, setCount] = useState(0);
  useEffect(()=>{
    document.title = `Count : ${count}, [count] `
  });

  //increase count by 1
  const increaseCountByOne = () => {
    setCount((count) => count += 1)
  }
//increase count by 10
  const increaseCountByTen = () => {
    setCount((count) => count += 10)
  }
//reset count to 0
  const resetCountToZero = () => setCount(() => 0)

//set count to random number between 1 and 100
const countToRandomNumber = () => setCount(() => Math.floor(Math.random() * (100-1)+1))

//decrease count by 1
const decreaseCountByOne = () => {
  setCount((count) => count -= 1)
}
//decrease count by 10
  const decreaseCountByTen = () => {
    setCount((count) => count -= 10)
  }

  return (
    <>
      <div className ='wrapper' >
      <div className ='container'>
        <p>Current Value :</p>
        <p>{count}</p>
        <div className = 'images'>
         <button 
         onClick={increaseCountByOne}>
          <ChevronUp/>
          </button>
         <button 
         onClick={increaseCountByTen}> <ChevronsUp/>
         </button>
         
         <button 
         onClick={resetCountToZero}> <RotateCcw/>
         </button>
         
         <button 
         onClick={countToRandomNumber}><Hash /></button>
         
         <button 
         onClick={decreaseCountByOne}><ChevronDown />
         </button>
         
         <button 
         onClick={decreaseCountByTen} ><ChevronsDown /></button>

        </div>

        </div> 
      </div>
      
    </>
  )
}

export default App
